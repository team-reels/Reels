from flask import Blueprint, jsonify, request
from domains.repositories.user_repository import UserRepository
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
                "reason": "missing id"
            })

    uid = context.get("uid")
    with Session(engine) as session:
        user_repository = UserRepository(session)
        user = user_repository.get_user(uid)
        response = jsonify({
                    "status": "success",
                    "user id": user.id,
                    "username": user.username,
                    "biography": user.biography
                })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
