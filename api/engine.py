from sqlalchemy import create_engine
from domains.models.base import Base
from config import *

#WARNING!!! DO NOT USE THIS IN PRODUCTION uwu. EVEN HAVING THIS HERE IS VERY BAD PRACTICE FOR OBVIOUS REASONS
RESET_DB = True

engine = create_engine(f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOSTNAME}:{DB_PORT}/{DB_NAME}",
                       echo=True)
if RESET_DB:
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)
