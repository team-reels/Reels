from flask import Blueprint, jsonify, request
from domains.repositories.comment_repository import CommentRepository
from engine import engine
from sqlalchemy.orm import Session
from flask_cors import CORS

comment_blueprint = Blueprint('comments', __name__, url_prefix="/comment_api")
CORS(comment_blueprint)

@comment_blueprint.route("/add_comment", methods=["POST"])
def add_comment():
    context = request.get_json()

    if context.get("user_id") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing user_id"
            })

    if context.get("catch_id") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing catch_id"
            })

    if context.get("comment") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing comment"
            })

    user_id = context.get("user_id")
    catch_id = context.get("catch_id")
    comment = context.get("comment")

    with Session(engine) as session:
        comment_repository = CommentRepository(session)
        new_comment = comment_repository.add_comment(user_id = user_id,
                                                   catch_id = catch_id, comment=comment)
        return jsonify({
                    "status": "success",
                    "id": new_comment.id
                })

@comment_blueprint.route("/get_comment", methods=["POST"])
def get_comment():
    context = request.get_json()

    if context.get("id") is None:
        return jsonify({
                "status": "failure",
                "reason": "missing id"
            })

    id = context.get("id")

    with Session(engine) as session:
        comment_repository = CommentRepository(session)
        comment = comment_repository.get_comment(id=id)
        return jsonify({
                    "status": "success",
                    "id": comment.id,
                    "comment": comment.comment
                })
