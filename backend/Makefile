CODE := chair_api

lint:
	poetry run pylint $(CODE)

format:
	poetry run isort $(CODE)
	poetry run black $(CODE)

run:
	poetry run launch_chair_api

install:
	pip install .

install-dev:
	poetry install --with dev

install-dev-pip:
	pip install -e . --config-settings editable_mode=strict

clean:
	rm -rf ./dist

build:
	poetry build

install-from-build:
	python -m wheel install dist/chair_api-*.whl

prepare-migration:
	cd chair_api/db
	poetry run alembic revision --autogen

apply-migrations:
	cd chair_api/db; poetry run alembic upgrade head