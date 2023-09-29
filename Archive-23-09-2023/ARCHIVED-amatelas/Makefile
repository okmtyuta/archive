
pre-push: typecheck fmt lint build

lint:
	yarn run lint
	yarn run typecheck

typecheck:
	yarn typecheck

fmt:
	yarn fmt

build-lib:
	yarn build:lib
build-docs:
	yarn build:docs
build-storybook:
	yarn build:storybook
build: build-lib build-docs build-storybook

auto-push-main:
	git add .
	git commit -m "auto-commit"
	git push origin main

auto-push-docs-dev:
	git add .
	git commit -m "auto-commit"
	git push origin dev
auto-push-storybook-dev:
	git add .
	git commit -m "auto-commit"
	git push origin storybook-dev

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

npm-publish-sh:
	yarn build:lib-server
	yarn build:lib-client
	npm version patch
	npm publish --access=public

npm-publish:
	@./.npm-publish.sh

auto-deploy: auto-push-main npm-publish
