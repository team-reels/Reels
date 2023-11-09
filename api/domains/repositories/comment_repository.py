from sqlalchemy.orm import Session
from domains.models.comment import Comment
from domains.models.user import User
from domains.models.catch import Catch
from domains.repositories.utils import check_id_exists, check_id_not_exists


class CommentRepository:
    session: Session

    def __init__(self, db_session: Session):
        self.session = db_session

    """
    Description: Adds new Comment object to be persisted
    Arguments: new_comment: Comment representing comment to be added
    Returns: comment: Comment of returned comment
    """
    def _add_comment(self, new_comment: Comment):
        self.session.add(new_comment)
        self.session.commit()
        return new_comment

    """
    Description: Adds new Comment object to be persisted
    Arguments: Comment: str of comment of new comment, uid: str id of user that commented comment, cid: uuid of catch associated with comment
    Returns: Comment: Comment of added comment data
    """
    @check_id_exists(["uid", "cid"])
    def add_comment(self, comment, uid, cid):
        self.session.get(Comment, cid)
        new_comment = Comment(comment=comment,
                              uid=uid, cid=cid)
        return self._add_comment(new_comment)

    """
    Description: Gets an existing Comment
    Arguments: cid: uuid of Comment
    Returns: Comment: Comment obtained from persisted data
    """
    @check_id_not_exists(["cid"])
    def get_comment(self, cid):
        comment = self.session.get(Comment, cid)
        return comment
