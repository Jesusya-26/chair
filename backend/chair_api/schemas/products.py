"""
Notes responses and requests are defined here.
"""
from pydantic import BaseModel

from chair_api.dto import ProductDto


class ProductResponse(BaseModel):
    """
    Product with all its attributes.
    """

    id: int
    product_type: str
    name: str
    description: str
    manufacture: str
    price: str

    @classmethod
    def from_dto(cls, dto: ProductDto) -> "ProductResponse":
        """
        Construct from DTO.
        """
        return cls(
            id=dto.id,
            product_type=dto.product_type,
            name=dto.name,
            description=dto.description,
            manufacture=dto.manufacture,
            price=dto.price
        )


class ShortProductResponse(BaseModel):
    """
    Product with its main attributes.
    """

    id: int
    name: str
    price: str

    @classmethod
    def from_dto(cls, dto: ProductDto) -> "ShortProductResponse":
        """
        Construct from DTO.
        """
        return cls(
            id=dto.id,
            name=dto.name,
            price=dto.price
        )


class ProductsResponse(BaseModel):
    """
    List of products.
    """

    products: list[ShortProductResponse]

    @classmethod
    def from_dtos(cls, dtos: list[ProductDto]) -> "ProductsResponse":
        """
        Construct from DTOs list.
        """
        return cls(products=[ShortProductResponse.from_dto(dto) for dto in dtos])
