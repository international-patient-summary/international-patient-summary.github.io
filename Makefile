# International Patient Summary website.
#
# Thin wrappers over the pnpm scripts in package.json, so the common tasks
# have one short name each. Run `make help` to list them.

.DEFAULT_GOAL := help
.PHONY: help install sync sync-content sync-lily dev build preview lint format check test ci clean publish publish-dry-run

help: ## List the available targets
	@awk 'BEGIN {FS = ":.*## "} /^[a-zA-Z_-]+:.*## / {printf "  %-16s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies from the lockfile
	pnpm install --frozen-lockfile

sync: ## Vendor content and Lily themes
	pnpm run sync

sync-content: ## Vendor ../locales/*/index.md into content/
	pnpm run sync:content

sync-lily: ## Vendor Lily theme stylesheets into static/assets/themes/
	pnpm run sync:lily

dev: ## Run the development server
	pnpm run dev

build: ## Prerender the site into build/
	pnpm run build

preview: build ## Serve the built site locally
	pnpm run preview

lint: ## Check formatting (Prettier) and code (ESLint)
	pnpm run lint

format: ## Rewrite files with Prettier
	pnpm run format

check: ## Type-check Svelte and JavaScript (svelte-check)
	pnpm run check

test: lint check build ## Lint, type-check, and build

ci: install test ## What the GitHub Actions workflow runs

clean: ## Remove build output and caches
	rm -rf build .svelte-kit

publish: ## Push this folder to the site repository (runs ../bin/publish)
	../bin/publish

publish-dry-run: ## Show what publish would push, without pushing
	../bin/publish --dry-run
