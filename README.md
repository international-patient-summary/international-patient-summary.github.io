# international-patient-summary.github.io

The website for **[International Patient Summary](https://github.com/international-patient-summary/international-patient-summary)**: a one-page introduction to the International Patient Summary (IPS), the worldwide standard for sharing key health data across borders.

Published at <https://international-patient-summary.github.io/>.

## How it works

A [SvelteKit](https://svelte.dev/docs/kit) site built with [adapter-static](https://svelte.dev/docs/kit/adapter-static). Every page is prerendered to plain HTML at build time, so GitHub Pages serves files and nothing else: no server, no database, no tracking.

The content is Markdown written in the main repository as `locales/<code>/index.md`. It is **vendored** into `content/locales/<code>/index.md`, so a fresh clone builds on its own. Each locale becomes one page at `/<code>/`.

The interface is built from the [Lily Design System](https://github.com/LilyDesignSystem):

- `@lilydesignsystem/svelte-headless` provides the headless components, such as `Header`, `Footer`, `ArticleLayout`, and `ContentsNav`.
- `@lilydesignsystem/svelte-picker-bar` provides the header row of link, search, theme, language, text size, and share pickers.
- `@lilydesignsystem/themes` provides every Lily default theme, which `pnpm run sync:lily` copies into `static/assets/themes/` so the theme picker can load them by URL.

All three are ordinary npm dependencies. Only the theme stylesheets are vendored.

## Develop

Requires Node.js 26 and pnpm 11.

```sh
make install     # pnpm install --frozen-lockfile
make dev         # pnpm run dev
```

## Tasks

Run `make help` for the full list.

| Make                | pnpm                    | What it does                                                                                        |
| ------------------- | ----------------------- | --------------------------------------------------------------------------------------------------- |
| `make sync`         | `pnpm run sync`         | Vendor content and Lily themes                                                                      |
| `make sync-content` | `pnpm run sync:content` | Copy `../locales/*/index.md` into `content/`                                                        |
| `make sync-lily`    | `pnpm run sync:lily`    | Copy Lily themes into `static/assets/themes/`                                                       |
| `make build`        | `pnpm run build`        | Prerender into `build/`, then write `search-index.json`, `llms.txt`, `llms.json`, and `sitemap.xml` |
| `make preview`      | `pnpm run preview`      | Serve the built site                                                                                |
| `make lint`         | `pnpm run lint`         | Prettier check, then ESLint                                                                         |
| `make format`       | `pnpm run format`       | Rewrite files with Prettier                                                                         |
| `make check`        | `pnpm run check`        | svelte-check                                                                                        |
| `make test`         |                         | Lint, check, and build                                                                              |
| `make publish`      |                         | Push this folder to the site repository                                                             |

`sync:content` reads the parent directory by default. Point it elsewhere with `SOURCE`:

```sh
SOURCE=/path/to/international-patient-summary pnpm run sync:content
```

Files under `content/` and `static/assets/themes/` are generated. Change them upstream, then re-sync.

## Layout

```
bin/sync-content.mjs     vendor ../locales/*/index.md into content/
bin/vendor-lily.mjs      vendor theme stylesheets from @lilydesignsystem/themes
content/                 vendored Markdown (generated; do not edit)
scripts/                 post-build: search index, llms.txt/json, sitemap
src/lib/site.js          site name, URLs, repository links
src/lib/locales.js       locale labels and browser-language matching
src/lib/i18n.js          interface strings, with English fallback
src/lib/markdown.js      Markdown -> HTML with heading ids
src/lib/server/          content access (server-only, build time)
src/lib/SearchGate.svelte  search results for /?<query>
src/routes/              home, /<locale>/, /about/, error page
static/assets/style.css  the site's own styling; Lily ships none
static/assets/themes/    vendored Lily themes
```

## Publish

This folder lives inside the main repository, which is the source of truth. It is published to its own repository, `international-patient-summary/international-patient-summary.github.io`, as a `git subtree split`:

- **By hand:** `make publish` (or `../bin/publish`). Add `--dry-run` to check first.
- **Automatically:** the main repository's `.github/workflows/publish-site.yml` runs the same split on every push to `main` that changes this folder.

The site repository's `.github/workflows/pages.yml` then lints, type-checks, builds, and deploys to GitHub Pages. In that repository's settings, set **Pages → Source** to **GitHub Actions**. Pull requests run the same checks without deploying.

The configuration follows the SvelteKit guidance for [GitHub Pages](https://svelte.dev/docs/kit/adapter-static#GitHub-Pages):

- **`fallback: '404.html'`** gives GitHub Pages this site's own 404 page.
- **`static/.nojekyll`** stops Jekyll from hiding `_app/`.
- **`paths.base`** stays empty, because a repository named `<org>.github.io` is served from the domain root. To deploy under a subpath, run `BASE_PATH=/some-subpath pnpm run build`.
