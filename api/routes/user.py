from flask import Blueprint, jsonify, request
from domains.repositories.user_repository import UserRepository
from domains.repositories.catch_repository import CatchRepository
from domains.models.catch import Catch
from engine import engine
from sqlalchemy.orm import Session
from domains.repositories.repo_exceptions import *

user_blueprint = Blueprint('user_api', __name__, url_prefix="/user_api")


@user_blueprint.route("/add_user", methods=["POST"])
def add_user():
    context = request.get_json()

    if context.get("username") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing username"
            })
    if context.get("uid") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing uid"
            })

    username = context.get("username")
    id = context.get("uid")

    with Session(engine) as session:
        user_repository = UserRepository(session)
        try:
            new_user = user_repository.add_user(id, username)
        except UsernameExistsException:
            return jsonify({
                "status": "failure",
                "reason": "username exists"
            })
        except IdExistsException:
            return jsonify({
                "status": "failure",
                "reason": "id exists"
            })


        return jsonify({
            "status": "success",
            "user id": new_user.id
            })


@user_blueprint.route("/get_user", methods=["GET"])
def get_user():
    context = request.get_json()

    if context.get("uid") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing uid"
            })
    id = context.get("uid")

    with Session(engine) as session:
        user_repository = UserRepository(session)
        catch_repository = CatchRepository(session)
        user = user_repository.get_user(id)
        catches = catch_repository.get_catches(id)
        catches = list(map(lambda x: Catch.to_JSON(x), catches))
        return jsonify({
                    "status": "success",
                    "user id": user.id,
                    "username": user.username,
                    "biography": user.biography,
                    "following": 34,
                    "followers": 21,
                    "image": "83d4c9ee-0895-4dd4-b1f3-2c0c14290684",
                    "catches": catches
                })
