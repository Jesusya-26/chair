"""
All product endpoints are defined here
"""

from typing import List, Literal, Optional

from fastapi import Depends, Path, Query
from sqlalchemy.ext.asyncio import AsyncConnection
from starlette import status

from chair_api.db.connection import get_connection
from chair_api.logic.products import (
    add_product_media_to_db,
    add_product_to_db,
    add_product_type_to_db,
    get_all_product_media_from_db,
    get_all_product_types_from_db,
    get_all_products_from_db,
    get_product_by_id_from_db,
)
from chair_api.schemas import (
    ProductMediaPost,
    ProductMediaResponse,
    ProductPost,
    ProductResponse,
    ProductsResponse,
    ProductTypePost,
    ProductTypeResponse,
)

from .routers import products_router


@products_router.get("/products", response_model=ProductsResponse, status_code=status.HTTP_200_OK)
async def get_all_products(
    name: Optional[str] = Query(None, description="To filter by name"),
    product_type_id: Optional[int] = Query(None, description="To filter by product type"),
    manufacture: Optional[str] = Query(None, description="To filter by manufacture"),
    min_price: Optional[int] = Query(None, description="To filter by minimal price"),
    max_price: Optional[int] = Query(None, description="To filter by maximum price"),
    order_by: Optional[Literal["rating", "price"]] = Query(None, description="To order by rating or price"),
    session: AsyncConnection = Depends(get_connection),
    ordering: Optional[Literal["asc", "desc"]] = Query("asc", description="To order by asc or desc"),
) -> ProductsResponse:
    """
    API endpoint for listing all products resources
    """

    products = await get_all_products_from_db(
        name, product_type_id, manufacture, min_price, max_price, order_by, session, ordering
    )

    return ProductsResponse.from_dtos(products)


@products_router.get(
    "/products/{product_id}",
    response_model=ProductResponse,
    status_code=status.HTTP_200_OK,
)
async def get_product_by_id(
    product_id: int = Path(..., description="To get product by id"), session: AsyncConnection = Depends(get_connection)
) -> ProductResponse:
    """
    API endpoint for retrieving a product by its ID

    Returns:
        ProductResponse: The retrieved product
    """

    product = await get_product_by_id_from_db(session, product_id)

    return ProductResponse.from_dto(product)


@products_router.post(
    "/products",
    response_model=ProductResponse,
    status_code=status.HTTP_200_OK,
)
async def add_product(product: ProductPost, session: AsyncConnection = Depends(get_connection)) -> ProductResponse:
    """
    API endpoint for adding a product to database

    Returns:
        ProductResponse: The added product
    """

    product_dto = await add_product_to_db(product, session)

    return ProductResponse.from_dto(product_dto)


@products_router.get("/product_types", response_model=List[ProductTypeResponse], status_code=status.HTTP_200_OK)
async def get_all_product_types(
    name: Optional[str] = Query(None, description="To filter by name"),
    session: AsyncConnection = Depends(get_connection),
) -> List[ProductTypeResponse]:
    """
    API endpoint for listing all product type resources
    """

    product_types = await get_all_product_types_from_db(name, session)

    return [ProductTypeResponse.from_dto(product_type) for product_type in product_types]


@products_router.post(
    "/product_types",
    response_model=ProductTypeResponse,
    status_code=status.HTTP_200_OK,
)
async def add_product_type(
    product_type: ProductTypePost, session: AsyncConnection = Depends(get_connection)
) -> ProductTypeResponse:
    """
    API endpoint for adding a product type to database

    Returns:
        ProductResponse: The added product type
    """

    product_type_dto = await add_product_type_to_db(product_type, session)

    return ProductTypeResponse.from_dto(product_type_dto)


@products_router.get("/product_media", response_model=List[ProductMediaResponse], status_code=status.HTTP_200_OK)
async def get_all_products_media(
    product_id: Optional[int] = Query(None, description="To filter by product id"),
    media_type: Optional[Literal["image", "AR_model"]] = Query(None, description="To filter by media type"),
    session: AsyncConnection = Depends(get_connection),
) -> List[ProductMediaResponse]:
    """
    API endpoint for listing all product media resources
    """

    products_media = await get_all_product_media_from_db(product_id, media_type, session)

    return [ProductMediaResponse.from_dto(product_media) for product_media in products_media]


@products_router.post(
    "/product_media",
    response_model=List[ProductMediaResponse],
    status_code=status.HTTP_200_OK,
)
async def add_product(
    product_media: ProductMediaPost, session: AsyncConnection = Depends(get_connection)
) -> List[ProductMediaResponse]:
    """
    API endpoint for adding a products media to database

    Returns:
        ProductResponse: The added products media
    """

    product_media_dtos = await add_product_media_to_db(product_media, session)

    return [ProductMediaResponse.from_dto(media) for media in product_media_dtos]
