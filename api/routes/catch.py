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
                "status": "failure", "reason": "missing user_id"
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
        new_catch = catch_repository.add_catch(user_id=user_id, species=species,
                                              weight=weight, size=size)
        return jsonify({
                    "status": "success",
                    "catch id": new_catch.id
                })

@catch_blueprint.route("/edit_catch", methods=["POST"])
def add_catch():
    context = request.get_json()

    if context.get("id") is None:
        return jsonify({
                "status": "failure", "reason": "missing id"
            })

    if context.get("user_id") is None:
        return jsonify({
                "status": "failure", "reason": "missing user_id"
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

    id = context.get("id")
    user_id = context.get("user_id")
    species = context.get("species")
    weight = context.get("weight")
    size = context.get("size")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        catch = catch_repository.get_catch(id)

        if catch.user_id != user_id:
            return jsonify({
                    "status": "failure",
                    "reason": "incorrect user"
                })

        catch_repository.edit_catch(id=id, species=species, weight=weight, size=size)
        return jsonify({
                    "status": "success",
                    "catch id": catch.id
                })

@catch_blueprint.route("/get_catch", methods=["POST"])
def get_catch():
    context = request.get_json()

    if context.get("id") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing id"
            })

    id = context.get("id")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        catch = catch_repository.get_catch(id)
        return jsonify({
                    "status": "success",
                    "catch id": catch.id,
                    "user id": catch.user_id,
                    "species": catch.species,
                    "weight": catch.weight,
                    "size": catch.size,
                    "type": catch.type,
                    "likes": catch.likes
                })
