from flask import Blueprint, jsonify, request
from domains.repositories.comment_repository import CommentRepository
from engine import engine
from sqlalchemy.orm import Session
from flask_cors import CORS
from routes.utils import require_json_params, require_query_params

comment_blueprint = Blueprint('comments', __name__, url_prefix="/comment_api")
CORS(comment_blueprint)


@comment_blueprint.route("/add_comment", methods=["GET"])
@require_query_params(["uid", "cid", "comment"])
def add_comment():
    uid = request.args.get("uid")
    cid = request.args.get("cid")
    comment = request.args.get("comment")

    with Session(engine) as session:
        comment_repository = CommentRepository(session)
        new_comment = comment_repository.add_comment(uid=uid,
                                                     cid=cid,
                                                     comment=comment)
        return jsonify({
                    "status": "success",
                    "cid": new_comment.cid
                })


@comment_blueprint.route("/get_comment", methods=["POST"])
@require_query_params(["cid"])
def get_comment():
    cid = request.json.get("cid")

    with Session(engine) as session:
        comment_repository = CommentRepository(session)
        comment = comment_repository.get_comment(cid=cid)
        return jsonify({
                    "status": "success",
                    "comment": comment.to_JSON()
                })
