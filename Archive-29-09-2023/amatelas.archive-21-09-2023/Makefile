
pre-push: format lint build

lint:
	yarn lint

format:
	yarn format

build-lib-server:
	yarn build:server
build-lib-client:
	yarn build:client
build-lib: build-lib-server build-lib-client
build-docs:
	yarn build:docs
build-storybook:
	yarn build:storybook
build: build-lib-server build-lib-client build-docs build-storybook

auto-push-main:
	git add .
	git commit -m "auto-commit"
	git push origin main

auto-push:
	git add .
	git commit -m "auto-commit"
	git push origin HEAD

npm-version-patch:
	npm version patch
npm-version-minor:
	npm version minor
npm-version-major:
	npm version major
