from domain.models.base import Base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, DateTime
from sqlalchemy.sql import func
from sqlalchemy import ForeignKey
from uuid import uuid4
from sqlalchemy.dialects.postgresql import UUID


class Comment(Base):
    __tablename__ = "comments"

    id: Mapped[UUID] = mapped_column(UUID(as_uuid=True),
                                 primary_key=True,
                                 default=uuid4)

    catch_id: Mapped[UUID] = mapped_column(ForeignKey("catch.id"),
                                            nullable=False)

    user_id: Mapped[UUID] = mapped_column(ForeignKey("user.id"),
                                            nullable=False)

    comment: Mapped[str] = mapped_column(String(512),
                                          nullable=False)

    def get_username(self):
        return self.username

    def get_biography(self):
        return self.biography

    def set_username(self, username):
        self.username = username

    def set_biography(self, biography):
        self.biography = biography
