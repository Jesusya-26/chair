"""
Products table is defined here.
"""
from sqlalchemy import Table, Column, Integer, String, Sequence, ForeignKey, Enum

from chair_api.db import metadata

from .enums import ProductMediaType

product_media_id_seq = Sequence("product_media_id_seq")

product_media = Table(
    "product_media",
    metadata,
    Column("id", Integer, primary_key=True, server_default=product_media_id_seq.next_value()),
    Column("product_id", Integer, ForeignKey("products.id")),
    Column("s3_url", String, nullable=False),
    Column("media_type", Enum(ProductMediaType, name="media_type"), nullable=False),
)

"""
Product media.

Columns:
- `id` - product type identifier, int serial, varchar
- `product_id` - product identifier (product.id), int
- `s3_url` - the path to the object in S3 file storage, varchar
- `media_type` - type of the media file, ProductMediaType enumeration
"""