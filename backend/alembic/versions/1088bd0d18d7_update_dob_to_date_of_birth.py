"""Update dob to date_of_birth

Revision ID: 1088bd0d18d7
Revises: ac28efadd84c
Create Date: 2024-08-21 13:29:11.660383

"""
from typing import Sequence

from alembic import op
import sqlalchemy as sa
import sqlmodel


# revision identifiers, used by Alembic.
revision: str = '1088bd0d18d7'
down_revision: str | None = 'ac28efadd84c'
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('patient', sa.Column('date_of_birth', sa.Date(), nullable=False))
    op.drop_column('patient', 'dob')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('patient', sa.Column('dob', sa.DATE(), autoincrement=False, nullable=False))
    op.drop_column('patient', 'date_of_birth')
    # ### end Alembic commands ###