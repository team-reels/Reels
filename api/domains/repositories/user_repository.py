from sqlalchemy.orm import Session
from domain.models.user import User


def UserRepository():
    db_session: Session

    def __init__(self, db_session: Session):
        self.session = db_session

    """
    Description: Adds new User object to be persisted
    Arguments: new_user: User representing user to be added
    Returns: User: User of added user data
    """
    def _add_user(self, new_user: User):
        self.session.add(new_user)
        self.session.commit()
        return new_user

    """
    Description: Adds new User object to be persisted
    Arguments: username: str of new user
    Returns: User: User of added user data
    """
    def add_user(self, username):
        new_user = User(username=username)
        return _add_user(new_user)

    """
    Description: Edits biography of user
    Arguments: id: uuid of user with biography to be edited
    Returns: User: User with modified biography
    """
    def edit_biograpgy(self, id, biography):
        user = self.session.get(User, id)
        user.set_biography(biography)
        self.session.commit()
        return user
