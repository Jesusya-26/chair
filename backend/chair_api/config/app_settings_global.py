"""
Application settings singleton is defined here.
"""
from chair_api.config import AppSettings


app_settings = AppSettings.try_from_env()
