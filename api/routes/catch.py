from flask import Blueprint, jsonify, request
from domains.repositories.catch_repository import CatchRepository
from engine import engine
from sqlalchemy.orm import Session

catch_blueprint = Blueprint('catches', __name__, url_prefix="/catch_api")


@catch_blueprint.route("/add_catch", methods=["POST"])
def add_catch():
    context = request.get_json()

    if context.get("user_id") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing user_id"
            })

    if context.get("species") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing species"
            })

    if context.get("weight") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing weight"
            })

    if context.get("size") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing size"
            })

    user_id = context.get("user_id")
    species = context.get("species")
    weight = context.get("weight")
    size = context.get("weight")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        new_catch = catch_repository.add_user(user_id=user_id, species=species,
                                              weight=weight, size=size)
        return jsonify({
                    "status": "success",
                    "sensor id": new_catch.id
                })
