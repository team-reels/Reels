from domain.models.base import Base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, DateTime
from sqlalchemy.sql import func


class Catch(Base):
    __tablename__ = "catches"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    post_time: Mapped[DateTime] = mapped_column(DateTime(timezone=True),
                                                server_default=func.now())
    
