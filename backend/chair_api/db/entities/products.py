"""
Products table is defined here.
"""

from sqlalchemy import Column, Float, ForeignKey, Integer, Sequence, String, Table
from sqlalchemy.dialects.postgresql import JSONB

from chair_api.db import metadata

products_id_seq = Sequence("products_id_seq")

products = Table(
    "products",
    metadata,
    Column("product_id", Integer, primary_key=True, server_default=products_id_seq.next_value()),
    Column("product_type_id", Integer, ForeignKey("product_types.product_type_id"), nullable=False),
    Column("name", String, nullable=False),
    Column("product_url", String, nullable=False),
    Column("description", String, nullable=False),
    Column("manufacture", String, nullable=True),
    Column("price", Float, nullable=False),
    Column("properties", JSONB),
    Column("rating", Float),
    Column("qty_califications", Integer),
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
