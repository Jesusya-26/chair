"""
Products table is defined here.
"""

from sqlalchemy import Column, ForeignKey, Integer, Sequence, String, Table

from chair_api.db import metadata

product_types_id_seq = Sequence("product_types_id_seq")

product_types = Table(
    "product_types",
    metadata,
    Column("product_type_id", Integer, primary_key=True, server_default=product_types_id_seq.next_value()),
    Column("parent_id", ForeignKey("product_types.product_type_id")),
    Column("name", String, nullable=False),
)

"""
Product types.

Columns:
- `id` - product type identifier, int serial, varchar
- `manufacture` - name of the product type, varchar
"""
