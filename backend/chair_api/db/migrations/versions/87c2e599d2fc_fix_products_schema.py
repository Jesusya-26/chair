"""fix products schema

Revision ID: 87c2e599d2fc
Revises: 2b88f2d8bd8c
Create Date: 2024-06-12 13:50:59.126073

"""

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = "87c2e599d2fc"
down_revision: Union[str, None] = "2b88f2d8bd8c"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # drop constraints

    op.drop_constraint("products_fk_type_id__product_types", "products", type_="foreignkey")
    op.drop_constraint("product_types_pk", "product_types", type_="primary")
    op.drop_constraint("product_media_fk_product_id__products", "product_media", type_="foreignkey")
    op.drop_constraint("products_pk", "products", type_="primary")
    op.drop_constraint("product_media_pk", "product_media", type_="primary")

    # columns

    op.add_column(
        "product_types",
        sa.Column(
            "product_type_id", sa.Integer(), server_default=sa.text("nextval('product_types_id_seq')"), nullable=False
        ),
    )
    op.add_column("product_types", sa.Column("parent_id", sa.Integer(), nullable=True))
    op.drop_column("product_types", "id")

    op.add_column(
        "products",
        sa.Column("product_id", sa.Integer(), server_default=sa.text("nextval('products_id_seq')"), nullable=False),
    )
    op.add_column(
        "products",
        sa.Column("product_type_id", sa.Integer(), nullable=False),
    )
    op.add_column("products", sa.Column("product_url", sa.String(), nullable=False))
    op.add_column("products", sa.Column("rating", sa.Float(), nullable=True))
    op.add_column("products", sa.Column("qty_califications", sa.Integer(), nullable=True))
    op.add_column("products", sa.Column("properties", postgresql.JSONB(astext_type=sa.Text()), nullable=True))
    op.alter_column("products", "manufacture", existing_type=sa.VARCHAR(), nullable=True)
    op.alter_column(
        "products", "price", existing_type=sa.NUMERIC(precision=2, scale=1), type_=sa.Float(), existing_nullable=False
    )
    op.drop_column("products", "characteristics")
    op.drop_column("products", "type_id")
    op.drop_column("products", "id")

    op.add_column(
        "product_media",
        sa.Column(
            "product_media_id", sa.Integer(), server_default=sa.text("nextval('product_media_id_seq')"), nullable=False
        ),
    )
    op.alter_column("product_media", "product_id", existing_type=sa.INTEGER(), nullable=False)
    op.drop_column("product_media", "id")

    # create constraints

    op.create_primary_key(op.f("product_types_pk"), "product_types", ["product_type_id"])

    op.create_primary_key(op.f("products_pk"), "products", ["product_id"])

    op.create_primary_key(op.f("product_media_pk"), "product_media", ["product_media_id"])
    op.create_foreign_key(
        op.f("product_types_fk_parent_id__product_types"),
        "product_types",
        "product_types",
        ["parent_id"],
        ["product_type_id"],
    )
    op.create_foreign_key(
        op.f("products_fk_type_id__product_types"),
        "products",
        "product_types",
        ["product_type_id"],
        ["product_type_id"],
    )
    op.create_foreign_key(
        op.f("product_media_fk_product_id__products"), "product_media", "products", ["product_id"], ["product_id"]
    )


def downgrade() -> None:
    # drop constraints

    op.drop_constraint(op.f("product_types_fk_parent_id__product_types"), "product_types", type_="foreignkey")
    op.drop_constraint(op.f("products_fk_type_id__product_types"), "products", type_="foreignkey")
    op.drop_constraint("product_types_pk", "product_types", type_="primary")
    op.drop_constraint(op.f("product_media_fk_product_id__products"), "product_media", type_="foreignkey")
    op.drop_constraint("products_pk", "products", type_="primary")
    op.drop_constraint("product_media_pk", "product_media", type_="primary")

    # columns

    op.add_column(
        "products",
        sa.Column(
            "id",
            sa.INTEGER(),
            server_default=sa.text("nextval('products_id_seq')"),
            nullable=False,
        ),
    )
    op.add_column(
        "products",
        sa.Column(
            "characteristics",
            postgresql.JSONB(astext_type=sa.Text()),
        ),
    )
    op.add_column(
        "products",
        sa.Column("type_id", sa.INTEGER()),
    )
    op.alter_column("products", "manufacture", existing_type=sa.VARCHAR(), nullable=False)
    op.alter_column(
        "products", "price", existing_type=sa.Float(), type_=sa.NUMERIC(precision=2, scale=1), existing_nullable=False
    )
    op.drop_column("products", "properties")
    op.drop_column("products", "qty_califications")
    op.drop_column("products", "rating")
    op.drop_column("products", "product_url")
    op.drop_column("products", "product_type_id")
    op.drop_column("products", "product_id")

    op.add_column(
        "product_types",
        sa.Column(
            "id",
            sa.INTEGER(),
            server_default=sa.text("nextval('product_types_id_seq')"),
            nullable=False,
        ),
    )
    op.drop_column("product_types", "parent_id")
    op.drop_column("product_types", "product_type_id")

    op.add_column(
        "product_media",
        sa.Column(
            "id",
            sa.INTEGER(),
            server_default=sa.text("nextval('product_media_id_seq')"),
            nullable=False,
        ),
    )
    op.alter_column("product_media", "product_id", existing_type=sa.INTEGER(), nullable=True)
    op.drop_column("product_media", "product_media_id")

    # create constraints

    op.create_primary_key(op.f("product_types_pk"), "product_types", ["id"])

    op.create_primary_key(op.f("products_pk"), "products", ["id"])

    op.create_primary_key(op.f("product_media_pk"), "product_media", ["id"])
    op.create_foreign_key("products_fk_type_id__product_types", "products", "product_types", ["type_id"], ["id"])
    op.create_foreign_key("product_media_fk_product_id__products", "product_media", "products", ["product_id"], ["id"])
