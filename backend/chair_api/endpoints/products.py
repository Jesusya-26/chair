"""
get_all_products, get_product_by_id
"""
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncConnection
from starlette import status

from chair_api.db.connection import get_connection
from chair_api.logic import get_all_products, get_product_by_id
from chair_api.schemas import ProductResponse, ProductsResponse


from .routers import products_router


@products_router.get(
    "/",
    response_model=ProductsResponse,
    status_code=status.HTTP_200_OK
)
async def get_all_notes(
    session: AsyncConnection = Depends(get_connection)
) -> ProductsResponse:
    """
    API endpoint for listing all products resources
    """

    products = await get_all_products(session)

    return ProductsResponse.from_dtos(products)


@products_router.get(
    "/{note_id}",
    response_model=ProductResponse,
    status_code=status.HTTP_200_OK,
)
async def get_note_by_id(
        note_id: int,
        session: AsyncConnection = Depends(get_connection)
) -> ProductResponse:
    """API endpoint for retrieving a product by its ID

    Returns:
        ProductResponse: The retrieved product
    """

    note = await get_product_by_id(session, note_id)

    return ProductResponse.from_dto(note)
