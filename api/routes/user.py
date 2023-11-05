from flask import Blueprint, jsonify, request
from domains.repositories.user_repository import UserRepository
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

    if context.get("id") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing id"
            })

    with Session(engine) as session:
        user_repository = UserRepository(session)
        user = user_repository.get(id)
        return jsonify({
                    "status": "success",
                    "user id": user.id,
                    "username": user.username,
                    "biography": user.biography
                })
