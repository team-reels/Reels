from domains.models.base import Base
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
    user_id: Mapped[UUID] = mapped_column(ForeignKey("users.id"),
                                            nullable=False)
    species: Mapped[str] = mapped_column(String(128), nullable=False)
    weight: Mapped[float] = mapped_column(nullable=False)
    size: Mapped[float] = mapped_column(nullable=False)
    type: Mapped[int] = mapped_column(nullable=False)
    likes: Mapped[int] = mapped_column(nullable=False)

    def get_post_time(self):
        return self.post_time

    def get_user_id(self):
        return self.user_id

    def get_species(self):
        return self.species

    def get_weight(self):
        return self.weight

    def get_size(self):
        return self.size

    def get_likes(self):
        return self.likes

    def set_species(self, species):
        self.species = species

    def set_weight(self, weight):
        self.weight = weight

    def set_size(self, size):
        self.size = size

    def set_type(self, fish_type):
        self.fish_type = fish_type

    def set_likes(self, likes):
        self.likes = likes
