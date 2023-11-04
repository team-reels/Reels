from sqlalchemy.orm import Session
from domains.models.catch import Catch
from random import randint


class CatchRepository:
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
    Arguments: user_id: uuid of uploader's id, species: str of species of added catch,
               weight: float of weight of added catch, size: float of weight of added catch,
               type: int of type of added catch
    Returns: User: User of added user data
    """
    def add_catch(self, user_id, species, weight, size):
        type = randint(1, 5)
        new_catch = Catch(user_id=user_id, species=species,
                          weight=weight, size=size, type=type)
        return self._add_catch(new_catch)

    """
    Description: Gets an existing Catch
    Arguments: id: uuid of Catch
    Returns: Catch: Catch obtained from persisted data
    """
    def get_catch(self, id):
        catch = self.session.get(Catch, id)
        return catch
