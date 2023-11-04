from sqlalchemy.orm import Session
from domain.models.catch import Catch


def UserRepository():
    db_session: Session

    def __init__(self, db_session: Session):
        self.session = db_session

    """
    Description: Adds new Catch object to be persisted
    Arguments: new_catch: Catch representing catch to be added
    Returns: Catch: Catch of added catch data
    """
    def _add_catch(self, new_catch: Catch):
        self.session.add(new_catch)
        self.session.commit()
        return new_catch

    """
    Description: Adds new Catch object to be persisted
    Arguments: username: str of new user
    Returns: User: User of added user data
    """
    def add_catch(self, user_id, species, weight, size, type):
        new_catch = Catch(user_id=user_id, species=species,
                          weight=weight, size=size, type=type)
        return _add_catch(new_catch)
