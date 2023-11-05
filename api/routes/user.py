from flask import Blueprint, jsonify, request
from domains.repositories.user_repository import UserRepository
from domains.repositories.catch_repository import CatchRepository
from domains.models.catch import Catch
from engine import engine
from sqlalchemy.orm import Session
from domains.repositories.repo_exceptions import *
from flask_cors import CORS

user_blueprint = Blueprint('user_api', __name__, url_prefix="/user_api")
CORS(user_blueprint)


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
    uid = context.get("uid")

    with Session(engine) as session:
        user_repository = UserRepository(session)
        try:
            new_user = user_repository.add_user(id=uid, username=username)
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


@user_blueprint.route("/get_user", methods=["POST"])
def get_user():
    context = request.get_json()

    if context.get("uid") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing uid"
            })
    uid = context.get("uid")
    with Session(engine) as session:
        user_repository = UserRepository(session)
        user = user_repository.get_user(uid)
        response = jsonify({
                    "status": "success",
                    "uid": user.id,
                    "username": user.username,
                    "bio": user.biography,
                    "following": 34,
                    "followers": 21,
                    "image": "83d4c9ee-0895-4dd4-b1f3-2c0c14290684",
                    "catches": catches
                })
        return response

@user_blueprint.route("/test", methods=["POST"])
def test():
  context = request.get_json()
  return "Hello, cross-origin-world!"
