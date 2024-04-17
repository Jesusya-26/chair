"""
Product DTO is defined here.
"""
from dataclasses import dataclass
from typing import Optional


@dataclass(frozen=True)
class ProductDto:
    """
    Products Dto used to transfer Note data
    """
    id: int
    product_type: str
    name: str
    description: str
    manufacture: str
    price: str
    # rating: int
    # characteristics: dict
