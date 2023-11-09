from flask import Blueprint, jsonify, request
from domains.repositories.comment_repository import CommentRepository
from engine import engine
from sqlalchemy.orm import Session
from flask_cors import CORS
from routes.utils import require_json_params, require_query_params
from domains.repositories.repo_exceptions import IdExistsException, IdMissingException, UsernameExistsException

comment_blueprint = Blueprint('comments', __name__, url_prefix="/comment_api")
CORS(comment_blueprint)


@comment_blueprint.route("/add_comment", methods=["POST"])
@require_json_params(["uid", "cid", "comment"])
def add_comment():
    context = request.get_json
    uid = context.get("uid")
    cid = context.get("cid")
    comment = context.get("comment")

    with Session(engine) as session:
        comment_repository = CommentRepository(session)
        try:
            new_comment = comment_repository.add_comment(uid=uid,
                                                         cid=cid,
                                                         comment=comment)
        except IdMissingException as e:
            return jsonify({
                        "status": "failure",
                        "reason": e
                    })
        return jsonify({
                    "status": "success",
                    "comment": new_comment.get_JSON()
                })


@comment_blueprint.route("/get_comment", methods=["POST"])
@require_query_params(["cid"])
def get_comment():
    cid = request.args.get("cid")

    with Session(engine) as session:
        try:
            comment_repository = CommentRepository(session)
            comment = comment_repository.get_comment(cid=cid)
        except IdMissingException:
            return jsonify({
                        "status": "failure",
                        "reason": f"comment with cid {cid} not found"
                    })
    return jsonify({
                "status": "success",
                "comment": comment.get_JSON()
            })
