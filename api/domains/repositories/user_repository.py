from sqlalchemy.orm import Session
from domains.models.user import User
from domains.repositories.repo_exceptions import *


class UserRepository:
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
    Arguments: uid: str id of new userm, username: str of new user
    Returns: User: User of added user data
    """
    def add_user(self, uid, username):
        if len(self.session.query(User).filter(User.username == username).all()) > 0:
            raise UsernameExistsException
        new_user = User(uid=uid, username=username)
        return self._add_user(new_user)

    """
    Description: Gets an existing User
    Arguments: uid: str id of User
    Returns: User: user obtained from persisted data
    """
    def get_user(self, uid):
        user = self.session.get(User, uid)
        return user

    """
    Description: Edits biography of user
    Arguments: id: uuid of user with biography to be edited
    Returns: User: User with modified biography
    """
    def edit_biography(self, uid, biography):
        user = self.session.get(User, uid)
        user.biography = biography
        self.session.commit()
        return user
