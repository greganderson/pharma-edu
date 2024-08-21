"""Add links

Revision ID: 843ccec608b6
Revises: 3e86fcd3a4be
Create Date: 2024-08-17 20:39:23.521079

"""
from typing import Sequence

from alembic import op
import sqlalchemy as sa
import sqlmodel


# revision identifiers, used by Alembic.
revision: str = '843ccec608b6'
down_revision: str | None = '3e86fcd3a4be'
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('patientdoctorlink',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('patient_id', sa.Integer(), nullable=False),
    sa.Column('doctor_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['doctor_id'], ['doctor.id'], ),
    sa.ForeignKeyConstraint(['patient_id'], ['patient.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('prescribedrx',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rx_id', sa.Integer(), nullable=False),
    sa.Column('dosage', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
    sa.Column('sig_code_id', sa.Integer(), nullable=False),
    sa.Column('patient_id', sa.Integer(), nullable=False),
    sa.Column('prescribed_date', sa.Date(), nullable=False),
    sa.Column('refills', sa.Integer(), nullable=False),
    sa.Column('count', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['patient_id'], ['patient.id'], ),
    sa.ForeignKeyConstraint(['rx_id'], ['rx.id'], ),
    sa.ForeignKeyConstraint(['sig_code_id'], ['sigcode.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('prescribed_prescriptions')
    op.drop_table('patient_doctor_link')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('patient_doctor_link',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('patient_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('doctor_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['doctor_id'], ['doctor.id'], name='patient_doctor_link_doctor_id_fkey'),
    sa.ForeignKeyConstraint(['patient_id'], ['patient.id'], name='patient_doctor_link_patient_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='patient_doctor_link_pkey')
    )
    op.create_table('prescribed_prescriptions',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('rx_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('dosage', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.Column('sig_code_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('patient_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('prescribed_date', sa.DATE(), autoincrement=False, nullable=False),
    sa.Column('refills', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('count', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['patient_id'], ['patient.id'], name='prescribed_prescriptions_patient_id_fkey'),
    sa.ForeignKeyConstraint(['rx_id'], ['rx.id'], name='prescribed_prescriptions_rx_id_fkey'),
    sa.ForeignKeyConstraint(['sig_code_id'], ['sigcode.id'], name='prescribed_prescriptions_sig_code_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='prescribed_prescriptions_pkey')
    )
    op.drop_table('prescribedrx')
    op.drop_table('patientdoctorlink')
    # ### end Alembic commands ###
