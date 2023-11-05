from flask import Blueprint, jsonify, request
from domains.repositories.catch_repository import CatchRepository
from engine import engine
from sqlalchemy.orm import Session
from flask_cors import CORS

catch_blueprint = Blueprint('catches', __name__, url_prefix="/catch_api")
CORS(catch_blueprint)


@catch_blueprint.route("/add_catch", methods=["POST"])
def add_catch():
    context = request.get_json()

    if context.get("uid") is None:
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

    uid = context.get("uid")
    species = context.get("species")
    weight = context.get("weight")
    size = context.get("weight")
    image_id = context.get("image_id")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        new_catch = catch_repository.add_catch(user_id=, species=species,
                                              weight=weight, size=size, image_id=image_id)
        return jsonify({
                    "status": "success",
                    "catch_id": new_catch.id,
                })

@catch_blueprint.route("/edit_catch", methods=["POST"])
def edit_catch():
    context = request.get_json()

    if context.get("cid") is None:
        return jsonify({
                "status": "failure", "reason": "missing id"
            })

    if context.get("uid") is None:
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

    id = context.get("cid")
    user_id = context.get("uid")
    species = context.get("species")
    weight = context.get("weight")
    size = context.get("size")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        catch = catch_repository.get_catch(id)

        if str(catch.user_id) != user_id:
            return jsonify({
                    "status": "failure",
                    "reason": "incorrect user",
                    "user_id": user_id,
                    "catch.user_id": catch.user_id
                })

        catch_repository.edit_catch(id=id, species=species, weight=weight, size=size)
        return jsonify({
                    "status": "success",
                    "catch id": catch.id
                })


@catch_blueprint.route("/get_catch", methods=["POSt"])
def get_catch():
    context = request.get_json()

    if context.get("cid") is None:
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
                    "cid": catch.id,
                    "uid": catch.user_id,
                    "species": catch.species,
                    "weight": catch.weight,
                    "size": catch.size,
                    "type": catch.type,
                    "likes": catch.likes
                })


@catch_blueprint.route("/get_catches", methods=["POST"])
def get_catches():
    context = request.get_json()

    if context.get("uid") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing uid"
            })

    user_id = context.get("uid")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        catches = catch_repository.get_catches(user_id)
        catches_id = list(map(lambda x: x.id, catches))
        return jsonify({
                    "status": "success",
                    "catches": catches_id,
                })
