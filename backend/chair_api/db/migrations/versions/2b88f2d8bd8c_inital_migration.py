"""inital migration

Revision ID: 2b88f2d8bd8c
Revises: 
Create Date: 2024-04-17 18:21:42.865568

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = '2b88f2d8bd8c'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # sequences

    op.execute(sa.schema.CreateSequence(sa.Sequence("product_types_id_seq")))
    op.execute(sa.schema.CreateSequence(sa.Sequence("products_id_seq")))
    op.execute(sa.schema.CreateSequence(sa.Sequence("product_media_id_seq")))

    # tables

    op.create_table('product_types',
    sa.Column('id', sa.Integer(), server_default=sa.text("nextval('product_types_id_seq')"), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id', name=op.f('product_types_pk'))
    )

    op.create_table('products',
    sa.Column('id', sa.Integer(), server_default=sa.text("nextval('products_id_seq')"), nullable=False),
    sa.Column('type_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.Column('manufacture', sa.String(), nullable=False),
    sa.Column('price', sa.Numeric(precision=2, scale=1), nullable=False),
    sa.Column('characteristics', postgresql.JSONB(astext_type=sa.Text()), nullable=True),
    sa.ForeignKeyConstraint(['type_id'], ['product_types.id'], name=op.f('products_fk_type_id__product_types')),
    sa.PrimaryKeyConstraint('id', name=op.f('products_pk'))
    )

    op.create_table('product_media',
    sa.Column('id', sa.Integer(), server_default=sa.text("nextval('product_media_id_seq')"), nullable=False),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('s3_url', sa.String(), nullable=False),
    sa.Column('media_type', sa.Enum('image', 'ar_model', name='media_type'), nullable=False),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], name=op.f('product_media_fk_product_id__products')),
    sa.PrimaryKeyConstraint('id', name=op.f('product_media_pk'))
    )


def downgrade() -> None:
    # tables

    op.drop_table('product_media')
    op.drop_table('products')
    op.drop_table('product_types')

    # sequences

    op.execute(sa.schema.DropSequence(sa.Sequence("product_media_id_seq")))
    op.execute(sa.schema.DropSequence(sa.Sequence("products_id_seq")))
    op.execute(sa.schema.DropSequence(sa.Sequence("product_types_id_seq")))

    # types

    op.execute(sa.text("DROP TYPE media_type"))
