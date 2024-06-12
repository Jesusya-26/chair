"""
Product DTO is defined here.
"""

from dataclasses import dataclass
from typing import Any, Dict, List, Literal, Optional


@dataclass(frozen=True)
class ProductTypeDto:
    """
    Product type Dto used to transfer product type data
    """

    product_type_id: int
    name: str
    parent_id: Optional[int]


@dataclass(frozen=True)
class ProductDto:
    """
    Product Dto used to transfer product data
    """

    product_id: int
    product_type_id: int
    product_type_name: str
    product_url: str
    name: str
    description: str
    manufacture: Optional[str]
    price: float
    properties: Optional[Dict[str, Any]]
    rating: Optional[float]
    qty_califications: Optional[int]
    images_url: Optional[List[str]]


@dataclass(frozen=True)
class ProductMediaDto:
    """
    Product media Dto used to transfer product media data
    """

    product_media_id: int
    product_id: int
    s3_url: str
    media_type: Literal["image", "AR_model"]
