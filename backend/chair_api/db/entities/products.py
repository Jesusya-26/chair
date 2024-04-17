"""
Products table is defined here.
"""
from sqlalchemy import Table, Column, Integer, String, Sequence, ForeignKey, Numeric
from sqlalchemy.dialects.postgresql import JSONB

from chair_api.db import metadata

products_id_seq = Sequence("products_id_seq")

products = Table(
    "products",
    metadata,
    Column("id", Integer, primary_key=True, server_default=products_id_seq.next_value()),
    Column("type_id", Integer, ForeignKey("product_types.id")),
    Column("name", String, nullable=False),
    Column("description", String, nullable=False),
    Column("manufacture", String, nullable=False),
    Column("price", Numeric(2, 1), nullable=False),
    Column("characteristics", JSONB)
)

"""
Products.

Columns:
- `id` - product identifier, int serial, varchar
- `type_id` - product type identifier (product_types.id), int
- `name` - name of the product, varchar
- `description` - description of the product, varchar
- `manufacture` - name of the product manufacture, varchar
- `price` - price in rubles of the product, numeric(2, 1)
- `characteristics` - json file with characteristics of product, jsonb
"""