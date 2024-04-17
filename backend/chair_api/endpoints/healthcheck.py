"""
healthcheck endpoint is defined here.
"""
from starlette import status

from chair_api.schemas import PingResponse

from .routers import system_router


@system_router.get(
    "/healthcheck/ping",
    response_model=PingResponse,
    status_code=status.HTTP_200_OK,
)
async def health_check():
    """
    Return health check response.
    """
    return PingResponse()
