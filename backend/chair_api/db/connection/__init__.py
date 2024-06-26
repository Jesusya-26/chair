"""
Module responsible for managing database connections.
"""

from chair_api.db.connection.session import SessionManager, get_connection

__all__ = [
    "get_connection",
    "SessionManager",
]
