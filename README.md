# Quantum Reflections

Mehul Desai's blog, poetry, and CV at [mehulphy.github.io](https://mehulphy.github.io). Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/): push to `main` and the site rebuilds within about a minute.

The design comes from a Claude Design mock-up ("Pastel minimalist Jekyll blog").

---

## Pages

| URL | Source | Contents |
|---|---|---|
| `/` | `index.html` | Home: welcome, Intellectual Rigour's latest interview, post cards (latest first) |
| `/writing/` | `writing.html` | Subject cards, year filter, and a compact list of every post |
| `/poetry/` | `poetry.html` | Poems from `_poems/`, newest first |
| `/cv/` | `cv.html` | CV, rendered from `_data/` |
| `/about/` | `about.html` | Short bio, motto, links |
| `/blog/YYYY/MM/DD/slug/` | `_posts/` | Individual posts |
| `/poetry/slug/` | `_poems/` | Individual poems |

Old URLs (`/blog/`, `/archive/`, `/contributions/`, `/work/`) redirect via `jekyll-redirect-from`.

### Choosing what appears on the home page

The home page always shows your newest post under **Latest**. To pick posts or poems for the **Selected writing** and **Selected poetry** sections, add this line to their front matter:

```yaml
featured: true
```

Remove the line (or set it to `false`) to take something off the home page. A section is hidden when nothing in it is featured; the latest post is never repeated under Selected writing.

### Latest interview on the home page

Edit `_data/youtube.yml` and paste the video link (either `youtube.com/watch?v=…` or `youtu.be/…`) plus its title and guest under `latest`. The video is embedded on the home page; leave `url` empty to show a card that links to the channel instead.

---

## Local development

**Prerequisites:** Ruby 3.x and Bundler (`brew install ruby`).

```bash
bundle install
bundle exec jekyll serve --livereload              # http://localhost:4000
bundle exec jekyll serve --livereload --unpublished # also show draft poems
```

`_site/` is generated output; never edit it directly. Restart the server after changing `_config.yml`.

---

## Writing a post

Create `_posts/YYYY-MM-DD-your-post-title.md`:

```yaml
---
title: "Your Post Title"
description: "One sentence, shown under the title on the home page and as the article's subtitle."
date: 2026-05-10
categories: [pedagogy, physics]   # subjects; colours come from _data/tags.yml
# Optional; each appears in the article's details bar when set:
updated: 2026-05-20
place: Gandhinagar
series: How people learn
---

Your content in Markdown.
```

Reading time and word count are calculated automatically. The first paragraph gets a drop cap; `>` blockquotes become pull quotes; Markdown footnotes (`[^1]`) are styled at the foot of the article.

To add a new subject, give it a label and one of the pastel colours (`p1` to `p7`) in `_data/tags.yml`.

### Gujarati translations

Give both versions the same `lang_ref` and set `lang: en` or `lang: gu`. Each version links to the other; only English posts are listed.

---

## Writing a poem

Create `_poems/your-poem.md`. Write one line per line and separate stanzas with a blank line:

```markdown
---
title: "We Were Scalars"
lang: en              # en or gu; poems are grouped by language
order: 1              # position in the list (lower comes first)
written: "2003"       # optional: any text, shown under the title
note: "Written for my teacher when I was in college."   # optional: shown after the poem
---

We were scalars,
you made us vectors,

In your classroom, the world came to life,
```

Don't end lines with two spaces; a plain line break is enough. Poems are numbered with Roman numerals within each language. Gujarati text uses Noto Serif Gujarati.

---

## Updating the CV

| File | Section |
|---|---|
| `_data/cv.yml` | Summary, headline numbers, workshops intro |
| `_data/experience.yml` | Experience |
| `_data/education.yml` | Education (`note` optional) |
| `_data/projects.yml` | Selected projects cards (`color` p1 to p7, `url` optional) |
| `_data/community.yml` | Community |
| `_data/trainings.yml` | Workshops delivered: one chip per year, expands to the full log |
| `_data/skills.yml` | Skills |

Replace `Mehul_Desai_Resume.pdf` to update the downloadable PDF. Printing the CV page hides the header and footer and expands every workshop log.

---

## Design

All styles live in `assets/css/main.css`; colour tokens are at the top. Type is Cormorant Garamond (display), Newsreader (body), and IBM Plex Mono (labels). The theme follows the visitor's system setting until they use the light/dark toggle, which is remembered. `assets/js/main.js` handles the toggle, the writing/archive filters, and the CV workshop chips; everything still renders without JavaScript.
