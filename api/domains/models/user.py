from domain.models.base import Base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String
from uuid import uuid4
from sqlalchemy.dialects.postgresql import UUID


class User(Base):
    __tablename__ = "users"

    id: Mapped[UUID] = mapped_column(UUID(as_uuid=True),
                                 primary_key=True,
                                 default=uuid4)

    username: Mapped[str] = mapped_column(String(64),
                                          nullable=False,
                                          unique=True)

    biography: Mapped[str] = mapped_column(String(512),
                                          nullable=True)

    def get_username(self):
        return self.username

    def get_biography(self):
        return self.biography

    def set_username(self, username):
        self.username = username

    def set_biography(self, biography):
        self.biography = biography
