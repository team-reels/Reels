from flask import Blueprint, jsonify, request
from domains.repositories.user_repository import UserRepository
from engine import engine
from sqlalchemy.orm import Session

user_blueprint = Blueprint('user_api', __name__, url_prefix="/user_api")


@user_blueprint.route("/add_user", methods=["POST"])
def add_user():
    context = request.get_json()

    if context.get("username") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing username"
            })

    username = context.get("username")

    with Session(engine) as session:
        user_repository = UserRepository(session)
        new_user = user_repository.add_user(username)
        return jsonify({
                    "status": "success",
                    "sensor id": new_user.id
                })
