# Quantum Reflections

Mehul Desai's blog and CV — [mehulphy.github.io](https://mehulphy.github.io). Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/): push to `main` and the site rebuilds within about a minute.

---

## Pages

| URL | Source | Contents |
|---|---|---|
| `/` | `index.md` | The blog — every English post, grouped by year |
| `/about/` | `about.md` | Short bio and links |
| `/cv/` | `cv.md` | Full CV, rendered from `_data/` |
| `/blog/YYYY/MM/DD/slug/` | `_posts/` | Individual posts |

Old URLs (`/blog/`, `/contributions/`, `/work/`) redirect via `jekyll-redirect-from`.

---

## Local development

**Prerequisites:** Ruby 3.x and Bundler.

```bash
bundle install
bundle exec jekyll serve --livereload
# open http://localhost:4000
```

`_site/` is generated output — never edit it directly. Restart the server after changing `_config.yml`.

---

## Writing a post

Create `_posts/YYYY-MM-DD-your-post-title.md`:

```yaml
---
title: "Your Post Title"
description: "One sentence — shown under the title on the home page and in the post header."
date: 2026-05-10
categories: [education]
---

Your content in Markdown.
```

The `post` layout is applied automatically. Posts dated in the future don't appear until that date.

### Gujarati translations

Give both versions the same `lang_ref` and set `lang`:

```yaml
lang: en          # or gu
lang_ref: the-science-of-sleep
```

Each version then links to the other. Only English posts are listed on the home page.

---

## Updating the CV

The CV page reads everything from `_data/`:

| File | Section |
|---|---|
| `experience.yml` | Experience |
| `projects.yml` | Projects & Programs (`url` optional) |
| `education.yml` | Education (`note` optional) |
| `skills.yml` | `domain` → Expertise, `technical` → Technical skills (`"Label: items"` renders the label in bold), `other` → Other |
| `trainings.yml` | Trainings conducted — one collapsible group per period |

The summary bullets at the top are written directly in `cv.md`. Replace `Mehul_Desai_Resume.pdf` to update the downloadable PDF. Printing the CV page from a browser gives a clean, nav-free version with all training groups expanded.

---

## Design

All styles live in `assets/css/main.css`. Colours are tokens at the top of the file:

- Off-white background (`#FAF9F6`), charcoal text (`#2B2B2B`)
- One pastel accent — powder blue (`#A7C7E7`) — used for link underlines, section rules, tags, and selection
- Dark mode follows the visitor's system setting; there is no toggle and no JavaScript

---

## File structure

```
_config.yml          site title, author, social links, plugins
_data/               CV data (see above)
_includes/           nav.html, footer.html
_layouts/            default.html (base), post.html
_posts/              blog posts
assets/css/main.css  all styles
assets/img/          favicon and images for posts
index.md             home / blog listing
about.md             about page
cv.md                CV page
Mehul_Desai_Resume.pdf
```
