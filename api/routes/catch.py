from flask import Blueprint, jsonify, request
from domains.repositories.catch_repository import CatchRepository
from domains.models.catch import Catch
from domains.repositories.repo_exceptions import IdExistsException, IdMissingException
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
    iid = context.get("iid")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        try:
            new_catch = catch_repository.add_catch(uid=uid, species=species,
                                                   weight=weight, size=size,
                                                   iid=iid)
            return jsonify({
                        "status": "success",
                        "catch": new_catch.get_JSON()
                    })
        except IdExistsException as e:
            result = jsonify({
                        "status": "failure",
                        "reason": str(e)
                    })
            return result, 400


@catch_blueprint.route("/get_catch", methods=["GET"])
@require_query_params(["cid"])
def get_catch():
    cid = request.args.get("cid")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        try:
            catch = catch_repository.get_catch(cid)
            return jsonify({
                        "status": "success",
                        "catch": Catch.to_JSON(catch)
                    })
        except IdMissingException as e:
            return jsonify({
                        "status": "failure",
                        "reason": str(e)
                     })


@catch_blueprint.route("/get_catches", methods=["GET"])
@require_query_params(["uid"])
def get_catches():
    uid = request.args.get("uid")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        try:
            catches = catch_repository.get_catches(uid)
            catches = list(map(lambda x: x.get_JSON(), catches))
            return jsonify({
                        "status": "success",
                        "catches": catches
                    })
        except IdMissingException as e:
            return jsonify({
                        "status": "failure",
                        "reason": str(e)
                    })



@catch_blueprint.route("/get_n_catches", methods=["GET"])
@require_query_params("n")
def get_n_catches():
    n = request.args.get("n")

    with Session(engine) as session:
        catch_repository = CatchRepository(session)
        catches = catch_repository.get_n_catches(n)
        catches = list(map(lambda x: x.get_JSON(), catches))
        return jsonify({
                    "status": "success",
                    "catches": catches,
                })
