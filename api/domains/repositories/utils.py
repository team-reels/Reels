from functools import wraps
from domains.repositories.repo_exceptions import IdExistsException, IdMissingException
from domains.repositories.catch_repository import Catch
from domains.repositories.comment_repository import Comment
from domains.repositories.user_repository import User

def check_id_not_exists(ids):
    def decorator(func):
        @wraps(func)
        def returned_func(self, *args, **kwargs):
            for id in ids:
                match id:
                    case "cid":
                        if self.session.get(Catch, kwargs["cid"]) is not None:
                            raise IdExistsException(f"Catch with cid {kwargs['cid']} exists")
                    case "uid":
                        if self.session.get(User, kwargs["uid"]) is not None:
                            raise IdExistsException(f"User with uid {kwargs['uid']} exists")
                    case "coid":
                        if self.session.get(Comment, kwargs["coid"]) is not None:
                            raise IdExistsException(f"Comment with coid {kwargs['coid']} exists")
        return returned_func
    return decorator

def check_id_exists(ids):
    def decorator(func):
        @wraps(func)
        def returned_func(self, *args, **kwargs):
            for id in ids:
                match id:
                    case "cid":
                        if self.session.get(Catch, kwargs["cid"]) is None:
                            raise IdMissingException(f"Catch with cid {kwargs['cid']} does not exists")
                    case "uid":
                        if self.session.get(User, kwargs["uid"]) is None:
                            raise IdMissingException(f"User with uid {kwargs['uid']} does not exists")
                    case "coid":
                        if self.session.get(Comment, kwargs["coid"]) is None:
                            raise IdMissingException(f"Comment with coid {kwargs['coid']} does not exists")
        return returned_func
    return decorator
