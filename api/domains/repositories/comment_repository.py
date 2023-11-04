from sqlalchemy.orm import Session
from domains.models.comment import Comment


def CommentRepository():
    db_session: Session

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
    Arguments: comment: str of comment of new comment
    Returns: Comment: Comment of added comment data
    """
    def add_comment(self, comment, user_id, catch_id):
        new_comment = Comment(comment=comment,
                              user_id=user_id, catch_id=catch_id)
        return _add_comment(new_comment)

    """
    Description: Gets an existing Comment
    Arguments: id: uuid of Comment
    Returns: Comment: Comment obtained from persisted data
    """
    def get_comment(self, id):
        comment = self.session.get(Comment, id)
        return comment
