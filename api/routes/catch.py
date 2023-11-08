from flask import Blueprint, jsonify, request
from domains.repositories.catch_repository import CatchRepository
from domains.models.catch import Catch
from engine import engine
from sqlalchemy.orm import Session
from flask_cors import CORS
from routes.utils import require_json_params, require_query_params

catch_blueprint = Blueprint('catches', __name__, url_prefix="/catch_api")
CORS(catch_blueprint)


@catch_blueprint.route("/add_catch", methods=["PUT"])
@require_json_params(["uid", "species", "weight", "size", "iid"])
def add_catch():
    context = request.get_json()

    uid = context.get("uid")
    species = context.get("species")
    weight = context.get("weight")
    size = context.get("size")
    image_id = context.get("iid")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        try:
            new_catch = catch_repository.add_catch(user_id=uid, species=species,
                                               weight=weight, size=size,
                                               image_id=image_id)
            return jsonify({
                        "status": "success",
                        "catch_id": new_catch.id,
                    })
        except:
            result = jsonify({
                        "status": "failure",
                        "catch_id": new_catch.id,
                    })
            return result, 400


@catch_blueprint.route("/get_catch", methods=["GET"])
@require_query_params(["cid"])
def get_catch():
    cid = request.args.get("cid")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        catch = catch_repository.get_catch(cid)
        return jsonify({
                    "status": "success",
                    "catch": Catch.to_JSON(catch)
                })


@catch_blueprint.route("/get_catches", methods=["GET"])
@require_query_params(["uid"])
def get_catches():
    uid = request.args.get("uid")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        catches = catch_repository.get_catches(uid)
        catches = list(map(lambda x: Catch.to_JSON(x), catches))
        return jsonify({
                    "status": "success",
                    "catches": catches,
                })


@catch_blueprint.route("/get_n_catches", methods=["GET"])
@require_query_params("n")
def get_n_catches():
    n = request.args.get("n")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        catches = catch_repository.get_n_catches(n)
        catches_id = list(map(lambda x: Catch.to_JSON(x), catches))
        return jsonify({
                    "status": "success",
                    "catches": catches_id,
                })
