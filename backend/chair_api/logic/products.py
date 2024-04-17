"""
Notes endpoints logic of getting entities from the database is defined here.
"""
from sqlalchemy.ext.asyncio import AsyncConnection
from sqlalchemy import select

from chair_api.exceptions.logic.common import EntityNotFoundById
from chair_api.db.entities.products import products
from chair_api.dto import ProductDto


async def get_all_products(
        session: AsyncConnection
) -> list[ProductDto]:
    """
    Get all note objects from crud
    """

    statement = select(products).order_by(products.c.id)

    return [ProductDto(*data) for data in await session.execute(statement)]


async def get_product_by_id(
        session: AsyncConnection,
        product_id: int
) -> ProductDto:
    """
    Get product by id
    """
    statement = select(products).where(products.c.id == product_id)
    result = (await session.execute(statement)).first()

    if result is None:
        raise EntityNotFoundById(product_id, 'product')

    return ProductDto(*result[:-1])
