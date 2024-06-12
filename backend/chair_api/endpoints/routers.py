"""
Api routers are defined here.

It is needed to import files which use these routers to initialize endpoints.
"""

from fastapi import APIRouter

products_router = APIRouter(tags=["products"], prefix="/v1")

system_router = APIRouter(tags=["system"])

routers_list = [products_router, system_router]

__all__ = [
    "routers_list",
]
