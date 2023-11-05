from sqlalchemy import create_engine
from domains.models.comment import Comment
from domains.models.user import User
from domains.models.catch import Catch
from domains.models.base import Base
from sqlalchemy.orm import Session
from config import *

#WARNING!!! DO NOT USE THIS IN PRODUCTION uwu. EVEN HAVING THIS HERE IS VERY BAD PRACTICE FOR OBVIOUS REASONS
RESET_DB = True

engine = create_engine(f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOSTNAME}:{DB_PORT}/{DB_NAME}",
                       echo=True)
if RESET_DB:
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)

    with Session(engine) as session:
        session.begin()
        user1 = User()
        user1.id = "g8Vs7pZe2GgnKqPmEIIv00hxus93"
        user1.username = "username"
        user1.biography = "hello there!"
        session.add(user1)
        session.commit()

        catch1 = Catch()
        catch1.user_id = user1.id
        catch1.species = "fish"
        catch1.weight = 4
        catch1.size = 2.3
        catch1.type = 1
        catch1.likes = 4
        catch1.image_id = "83d4c9ee-0895-4dd4-b1f3-2c0c14290684"
        session.add(catch1)

        catch2 = Catch()
        catch2.user_id = user1.id
        catch2.species = "fish"
        catch2.weight = 3.3
        catch2.size = 1.4
        catch2.type = 2
        catch2.likes = 9
        catch2.image_id = "83d4c9ee-0895-4dd4-b1f3-2c0c14290684"
        session.add(catch2)
        session.commit()

        comment = Comment()
        comment.user_id = str(user1.id)
        comment.catch_id = str(catch1.id)
        comment.comment = "wow"
        session.add(comment)

        session.commit()
