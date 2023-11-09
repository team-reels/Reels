from sqlalchemy.orm import Session
from domains.models.catch import Catch
from random import randint
from sqlalchemy.sql.expression import func


class CatchRepository:
    session: Session

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
    Arguments: uid: uuid of uploader's uid, species: str of species of added catch,
               weight: float of weight of added catch, size: float of weight of added catch,
               type: int of type of added catch
    Returns: User: User of added user data
    """
    def add_catch(self, uid, species, weight, size, iid):
        type = randint(1, 5)
        likes = 0
        new_catch = Catch(uid=uid, species=species,
                          weight=weight, size=size, type=type, likes=likes,
                          iid=iid)
        return self._add_catch(new_catch)

    """
    Description: Gets an existing Catch
    Arguments: cid: uuid of Catch
    Returns: Catch: Catch obtained from persisted data
    """
    def get_catch(self, cid):
        catch = self.session.get(Catch, cid)
        return catch
    """
    Description: Gets an all catches for a user
    Arguments: uid: uuid of user
    Returns: Catches: List[Catch] catches obtained from persisted data
    """
    def get_catches(self, user_id):
        catch = self.session.query(Catch).filter(Catch.user_id == user_id).all()
        return catch

    def get_n_catches(self, n):
        catches = self.session.query(Catch).order_by(func.random()).limit(n).all()
        return catches

    """
    Description: Adds new Catch object to be persisted
    Arguments: uid: uuid of uploader's id, species: str of species of added catch,
               weight: float of weight of added catch, size: float of weight of added catch,
               type: int of type of added catch
    Returns: User: User of added user data
    """
    def edit_catch(self, cid, species, weight, size):
        catch = self.session.get(Catch, cid)
        catch.species = species
        catch.weight = weight
        catch.size = size
        self.session.commit()
        return catch
