"""
Product responses and requests are defined here.
"""

from enum import Enum
from typing import Any, Dict, List, Literal, Optional

from pydantic import BaseModel, Field, field_validator

from chair_api.dto import ProductDto, ProductMediaDto, ProductTypeDto


class ProductTypeResponse(BaseModel):
    """
    Product type with its main attributes.
    """

    product_type_id: int = Field(..., description="Product type id", example=1)
    name: str = Field(..., description="Product type name", example="Тумбочки")
    parent_id: Optional[int] = Field(
        None, description="Product type parent id, should be null for high level", example=1
    )

    @classmethod
    def from_dto(cls, dto: ProductTypeDto) -> "ProductTypeResponse":
        """
        Construct from DTO.
        """
        return cls(product_type_id=dto.product_type_id, name=dto.name, parent_id=dto.parent_id)


class ProductTypePost(BaseModel):
    """
    Schema of product type for POST request
    """

    name: str = Field(..., description="Product type name", example="Тумбочки")
    parent_id: Optional[int] = Field(
        None, description="Product type parent id, should be null for high level", example=1
    )


class ProductResponse(BaseModel):
    """
    Product with all its attributes.
    """

    product_id: int = Field(..., description="Product id", example=1)
    product_type: ProductTypeResponse = Field(..., example={"product_type_id": 1, "name": "Тумбочки"})
    product_url: str = Field(
        ...,
        description="Product external url",
        example="https://market.yandex.ru/product--tumba-ofisnaia-ikea-bekant/1810713700?sku=101915941888&wprid=1718210758713872-10658695819889095088-balancer-l7leveler-kubr-yp-vla-159-BAL&utm_source_service=web&clid=703&src_pof=703&icookie=yLR9%2B7jKGQ8YN94aF2PiszlqanYHlkvWW6hpk5O5lmFKVGL6uhXbeUwetAkceKc0QuL9sHGZ%2F2FnxLdLF2FNLV1blSw%3D&baobab_event_id=lxc2bovtqv",
    )
    name: str = Field(..., description="Product name", example="Тумбочка BEKANT")
    description: str = Field(
        ...,
        description="Product description",
        example="Раскладной винный столик-менажница от Welovewood - самое универсальное решения для отдыха дома или на природе. ",
    )
    manufacture: Optional[str] = Field(None, description="The manufacture of product", example="BEKANT")
    price: float = Field(..., description="Product price", example=6499)
    rating: Optional[float] = Field(None, description="Product average rating", example=4.7)
    qty_califications: Optional[int] = Field(None, description="Quantity of reviews", example=122)
    images_url: List[str] = Field(
        ...,
        description="List of product images url",
        example=[
            "https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album"
        ],
    )
    properties: Optional[Dict[str, Any]] = Field(
        default_factory=dict,
        description="Product additional properties",
        example={"additional_attribute_name": "additional_attribute_value"},
    )

    @classmethod
    def from_dto(cls, dto: ProductDto) -> "ProductResponse":
        """
        Construct from DTO.
        """
        return cls(
            product_id=dto.product_id,
            product_type=ProductTypeResponse(product_type_id=dto.product_type_id, name=dto.product_type_name),
            product_url=dto.product_url,
            name=dto.name,
            description=dto.description,
            manufacture=dto.manufacture,
            price=dto.price,
            rating=dto.rating,
            qty_califications=dto.qty_califications,
            images_url=dto.images_url,
            properties=dto.properties,
        )


class ShortProductResponse(BaseModel):
    """
    Product with its main attributes.
    """

    product_id: int = Field(..., description="Product id", example=1)
    product_type: ProductTypeResponse = Field(..., example={"product_type_id": 1, "name": "Тумбочки"})
    name: str = Field(..., description="Product name", example="Тумбочка BEKANT")
    price: float = Field(..., description="Product price", example=6499)
    rating: Optional[float] = Field(None, description="Product average rating", example=4.7)
    qty_califications: Optional[int] = Field(None, description="Quantity of reviews", example=122)
    images_url: List[str] = Field(
        ...,
        description="List of product images url",
        example=[
            "https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album"
        ],
    )

    @classmethod
    def from_dto(cls, dto: ProductDto) -> "ShortProductResponse":
        """
        Construct from DTO.
        """
        return cls(
            product_id=dto.product_id,
            product_type=ProductTypeResponse(product_type_id=dto.product_type_id, name=dto.product_type_name),
            name=dto.name,
            price=dto.price,
            rating=dto.rating,
            qty_califications=dto.qty_califications,
            images_url=dto.images_url,
        )


class ProductsResponse(BaseModel):
    """
    List of products.
    """

    products: List[ShortProductResponse]

    @classmethod
    def from_dtos(cls, dtos: list[ProductDto]) -> "ProductsResponse":
        """
        Construct from DTOs list.
        """
        return cls(products=[ShortProductResponse.from_dto(dto) for dto in dtos])


class ProductPost(BaseModel):
    """
    Schema of product for POST request
    """

    product_type_id: int = Field(..., example=1)
    product_url: str = Field(
        ...,
        description="Product external url",
        example="https://market.yandex.ru/product--tumba-ofisnaia-ikea-bekant/1810713700?sku=101915941888&wprid=1718210758713872-10658695819889095088-balancer-l7leveler-kubr-yp-vla-159-BAL&utm_source_service=web&clid=703&src_pof=703&icookie=yLR9%2B7jKGQ8YN94aF2PiszlqanYHlkvWW6hpk5O5lmFKVGL6uhXbeUwetAkceKc0QuL9sHGZ%2F2FnxLdLF2FNLV1blSw%3D&baobab_event_id=lxc2bovtqv",
    )
    name: str = Field(..., description="Product name", example="Тумбочка BEKANT")
    description: str = Field(
        ...,
        description="Product description",
        example="Раскладной винный столик-менажница от Welovewood - самое универсальное решения для отдыха дома или на природе. ",
    )
    manufacture: Optional[str] = Field(None, description="The manufacture of product", example="BEKANT")
    price: float = Field(..., description="Product price", example=6499)
    rating: Optional[float] = Field(None, description="Product average rating", example=4.7)
    qty_califications: Optional[int] = Field(None, description="Quantity of reviews", example=122)
    properties: Optional[Dict[str, Any]] = Field(
        default_factory=dict,
        description="Product additional properties",
        example={"additional_attribute_name": "additional_attribute_value"},
    )


class ProductMediaResponse(BaseModel):
    """
    Product type with its main attributes.
    """

    product_media_id: int = Field(..., description="Product media id", example=1)
    product_id: int = Field(..., description="Product id with this media", example="1")
    s3_url: str = Field(
        ...,
        description="Path to s3 storage",
        example="https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album",
    )
    media_type: Literal["image", "AR_model"] = Field(..., description="Product media type", example="image")

    @field_validator("media_type", mode="before")
    @staticmethod
    def media_type_to_string(media_type: Any) -> str:
        if isinstance(media_type, Enum):
            return media_type.value
        return media_type

    @classmethod
    def from_dto(cls, dto: ProductMediaDto) -> "ProductMediaResponse":
        """
        Construct from DTO.
        """
        return cls(
            product_media_id=dto.product_media_id,
            product_id=dto.product_id,
            s3_url=dto.s3_url,
            media_type=dto.media_type,
        )


class ProductMediaPost(BaseModel):
    """
    Schema of product media for POST request
    """

    product_id: int = Field(..., description="Product id with this media", example="1")
    s3_urls: List[str] = Field(
        ...,
        description="List of paths to s3 storage",
        example=[
            "https://sun9-13.userapi.com/impg/rzU1B7MRyLIe-PA-PUfDLk7xvNGJdIQ62EbGJw/3Yaibp_fwNo.jpg?size=367x432&quality=96&sign=6ac73dee73ca6984faa5bb09216a538f&type=album"
        ],
    )
    media_type: Literal["image", "AR_model"] = Field(..., description="Product media type", example="image")
