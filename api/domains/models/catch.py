from domain.models.base import Base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, DateTime
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey
from uuid import uuid4
from sqlalchemy.dialects.postgresql import UUID


class Catch(Base):
    __tablename__ = "catches"

    id: Mapped[UUID] = mapped_column(UUID(as_uuid=True),
                                 primary_key=True,
                                 default=uuid4)
    post_time: Mapped[DateTime] = mapped_column(DateTime(timezone=True),
                                                server_default=func.now())
    user_id: Mapped[UUID] = mapped_column(ForeignKey("user.id"),
                                            nullable=False)
    species: Mapped[str] = mapped_column(String(128), nullable=False)
    weight: Mapped[float] = mapped_column(nullable=False)
    size: Mapped[float] = mapped_column(nullable=False)
    type: Mapped[int] = mapped_column(nullable=False)
    likes: Mapped[int] = mapped_column(nullable=False)
