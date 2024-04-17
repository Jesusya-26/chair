# Chair API

This is an API for the Chair mobile application with the ability to receive information about products on request.

# Running locally

## preparation

1. To install python dependencies
  run `poetry install`. You may also want to use `venv` before that.
2. Prepare a PostgreSQL Server to store the database.
3. Go to ./test_fastapi/db and run `alembic upgrade head` to apply migrations. Do not forget to set environment variables
  `DB_ADDR`, `DB_PORT`, `DB_NAME`, `DB_USER` and `DB_PASS` (or list them in .env file) if they are different from
  default values.

## launching

Run backend locally with `poetry run launch_chair_api` or `poetry run launch_notes_api --debug`.

You can open [localhost:8000](http://localhost:8000) (or different host/port if you configured it) to get a redirect to Swagger UI with endpoints list.

# Running in docker 

1. Create .env file by copying and editing env.example (repeat the same thing with db.env and keycloak.env).
2. Run the command `docker-compose up -d --build`
3. You can open [localhost:8000](http://localhost:8000) (or different host/port if you configured it) to get a redirect to Swagger UI with endpoints list.
