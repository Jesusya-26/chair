"""
Products endpoints logic of getting entities from the database is defined here.
"""

from typing import List, Literal, Optional

from sqlalchemy import and_, insert, select
from sqlalchemy.ext.asyncio import AsyncConnection

from chair_api.db.entities import product_media, product_types, products
from chair_api.dto import ProductDto, ProductMediaDto, ProductTypeDto
from chair_api.exceptions.logic.common import EntityNotFoundById
from chair_api.schemas import ProductMediaPost, ProductPost, ProductTypePost


async def get_all_products_from_db(
    name: Optional[str],
    product_type_id: Optional[int],
    manufacture: Optional[str],
    min_price: Optional[int],
    max_price: Optional[int],
    order_by: Optional[Literal["rating", "price"]],
    session: AsyncConnection,
    ordering: Optional[Literal["asc", "desc"]] = "asc",
) -> List[ProductDto]:
    """
    Get all product objects
    """

    statement = select(products, product_types.c.name.label("product_type_name")).select_from(
        products.join(product_types, products.c.product_type_id == product_types.c.product_type_id)
    )

    if name is not None:
        statement = statement.where(products.c.name.ilike(f"%{name}%"))
    if product_type_id is not None:
        statement = statement.where(products.c.product_type_id == product_type_id)
    if manufacture is not None:
        statement = statement.where(products.c.manufacture == manufacture)
    if min_price is not None:
        statement = statement.where(products.c.price >= min_price)
    if max_price is not None:
        statement = statement.where(products.c.price <= max_price)

    if order_by is not None:
        order = products.c.rating if order_by == "rating" else products.c.price
        if ordering == "desc":
            order = order.desc()
        statement = statement.order_by(order)
    else:
        statement = statement.order_by(products.c.product_id)

    result = (await session.execute(statement)).mappings().all()

    requested_products = []
    for product in result:
        statement = select(product_media.c.s3_url).where(
            and_(product_media.c.product_id == product.product_id, product_media.c.media_type == "image")
        )
        media_files = (await session.execute(statement)).scalars()

        requested_products.append(ProductDto(**product, images_url=list(media_files)))

    return requested_products


async def get_product_by_id_from_db(session: AsyncConnection, product_id: int) -> ProductDto:
    """
    Get product by id
    """

    statement = select(products).where(products.c.product_id == product_id)
    result = (await session.execute(statement)).one_or_none()

    if result is None:
        raise EntityNotFoundById(product_id, "product")

    statement = (
        select(products, product_types.c.name.label("product_type_name"))
        .select_from(products.join(product_types, product_types.c.product_type_id == products.c.product_type_id))
        .where(products.c.product_id == product_id)
    )
    product = (await session.execute(statement)).mappings().one()

    statement = select(product_media.c.s3_url).where(
        and_(product_media.c.product_id == product.product_id, product_media.c.media_type == "image")
    )
    media_files = (await session.execute(statement)).scalars()

    result = ProductDto(**product, images_url=list(media_files))

    return result


async def add_product_to_db(product: ProductPost, session: AsyncConnection) -> ProductDto:
    statement = select(product_types).where(product_types.c.product_type_id == product.product_type_id)
    result = (await session.execute(statement)).one_or_none()
    if result is None:
        raise EntityNotFoundById(product.product_type_id, "product type")

    statement = (
        insert(products)
        .values(
            product_type_id=product.product_type_id,
            product_url=product.product_url,
            name=product.name,
            description=product.description,
            manufacture=product.manufacture,
            price=product.price,
            rating=product.rating,
            qty_califications=product.qty_califications,
            properties=product.properties,
        )
        .returning(products.c.product_id)
    )

    product_id = (await session.execute(statement)).scalar_one()

    await session.commit()

    return await get_product_by_id_from_db(session, product_id)


async def get_all_product_types_from_db(name: Optional[str], session: AsyncConnection) -> List[ProductTypeDto]:
    """
    Get all product type objects
    """

    statement = select(product_types).order_by(product_types.c.product_type_id)

    if name is not None:
        statement = statement.where(product_types.c.name.ilike(f"%{name}%"))

    result = (await session.execute(statement)).mappings().all()

    return [ProductTypeDto(**product_type) for product_type in result]


async def add_product_type_to_db(product_type: ProductTypePost, session: AsyncConnection) -> ProductTypeDto:

    if product_type.parent_id is not None:
        statement = select(product_types).where(product_types.c.product_type_id == product_type.parent_id)
        result = (await session.execute(statement)).one_or_none()
        if result is None:
            raise EntityNotFoundById(product_type.parent_id, "product type")

    statement = (
        insert(product_types)
        .values(
            name=product_type.name,
            parent_id=product_type.parent_id,
        )
        .returning(product_types)
    )

    product_type = (await session.execute(statement)).mappings().one()

    await session.commit()

    return ProductTypeDto(**product_type)


async def get_all_product_media_from_db(
    product_id: Optional[int], media_type: Optional[Literal["image", "AR_model"]], session: AsyncConnection
) -> List[ProductMediaDto]:
    """
    Get all product media objects
    """

    statement = select(product_media).order_by(product_media.c.product_media_id)

    if product_id is not None:
        statement = select(products).where(products.c.product_id == product_id)
        product = (await session.execute(statement)).one_or_none()
        if product is None:
            raise EntityNotFoundById(product_id, "product")
        statement = statement.where(product_media.c.product_id == product_id)
    if media_type is not None:
        statement = statement.where(product_media.c.media_type == media_type)

    result = (await session.execute(statement)).mappings().all()

    return [ProductMediaDto(**media) for media in result]


async def add_product_media_to_db(
    product_media_post: ProductMediaPost, session: AsyncConnection
) -> List[ProductMediaDto]:
    statement = select(products).where(products.c.product_id == product_media_post.product_id)
    result = (await session.execute(statement)).one_or_none()
    if result is None:
        raise EntityNotFoundById(product_media_post.product_id, "product")

    added_products_media = []
    for url in product_media_post.s3_urls:
        statement = (
            insert(product_media)
            .values(product_id=product_media_post.product_id, s3_url=url, media_type=product_media_post.media_type)
            .returning(product_media)
        )
        product_media_dto = (await session.execute(statement)).mappings().one()
        added_products_media.append(ProductMediaDto(**product_media_dto))

    await session.commit()

    return added_products_media
