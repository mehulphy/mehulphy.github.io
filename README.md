# Quantum Reflections

Mehul Desai's blog, poetry, and CV at [mehulphy.github.io](https://mehulphy.github.io). Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/): push to `main` and the site rebuilds within about a minute.

The design comes from a Claude Design mock-up ("Pastel minimalist Jekyll blog").

---

## Pages

| URL | Source | Contents |
|---|---|---|
| `/` | `index.html` | Home: welcome, Intellectual Rigour's latest interview, selected poetry, latest and selected reflections, disclaimer |
| `/reflections/` | `reflections.html` | Reflections: subject cards, year filter, and a compact list of every post |
| `/poetry/` | `poetry.html` | Poems from `_poems/`, newest first |
| `/cv/` | `cv.html` | CV, rendered from `_data/` |
| `/about/` | `about.html` | Short bio, motto, links |
| `/blog/YYYY/MM/DD/slug/` | `_posts/` | Individual posts |
| `/poetry/slug/` | `_poems/` | Individual poems |

Old URLs (`/blog/`, `/archive/`, `/writing/`, `/contributions/`, `/work/`) redirect via `jekyll-redirect-from`.

### Choosing what appears on the home page

The home page always shows your newest post under **Latest reflections**. To pick posts or poems for the **Selected reflections** and **Selected poetry** sections, add this line to their front matter:

```yaml
featured: true
```

Remove the line (or set it to `false`) to take something off the home page. A section is hidden when nothing in it is featured; the latest post is never repeated under Selected reflections.

### Latest interview on the home page

Edit `_data/youtube.yml` and paste the video link (either `youtube.com/watch?v=…` or `youtu.be/…`) plus its title and guest under `latest`. The video is embedded on the home page; leave `url` empty to show a card that links to the channel instead.

---

## Local development

**Prerequisites:** Ruby 3.x and Bundler. The Ruby that comes with macOS (2.6) is too old; install a current one once with `brew install ruby` and follow the PATH instructions Homebrew prints.

```bash
bundle install
bundle exec jekyll serve --livereload              # http://localhost:4000
bundle exec jekyll serve --livereload --drafts      # also show your private drafts
```

`_site/` is generated output; never edit it directly. Restart the server after changing `_config.yml`.

---

## Writing a post (a "reflection")

Every post is one Markdown file in the `_posts/` folder.

### 1. Create the file

Name it with the date and a short title, all lowercase, words joined by hyphens:

```
_posts/2026-11-02-why-questions-matter.md
```

The date in the file name becomes the post's date and part of its web address (`/blog/2026/11/02/why-questions-matter/`). A post dated in the future does not appear until that day.

### 2. Add the header block, then write

```markdown
---
title: "Why Questions Matter More Than Answers"
description: "One sentence, shown under the title on the home page and on the post."
categories: [pedagogy, reflections]
---

Your text starts here. Separate paragraphs with a blank line.

## A section heading

> A quote you want to stand out becomes a lavender pull quote.

- a bullet
- another bullet

**bold**, *italic*, [a link](https://example.com)

A footnote marker[^1] in the text.

[^1]: The footnote text, shown at the end of the post.
```

Reading time and word count are calculated automatically, and the first paragraph gets a large drop cap.

### Optional header lines

| Line | What it does |
|---|---|
| `featured: true` | Shows the post under **Selected reflections** on the home page |
| `place: Gandhinagar` | Shows "Written in Gandhinagar" in the post's details bar |
| `series: How people learn` | Shows a series name in the details bar |
| `coauthor: Sreejit Purushottaman` | Shows "Written with" in the details bar |
| `updated: 2026-11-10` | Shows an "Updated" date in the details bar |
| `lang: gu` and `lang_ref: some-name` | Gujarati version of a post (see below) |

### Subjects and colours

Subjects in `categories` get their pastel colour from `_data/tags.yml`. Already set up: physics, pedagogy, computer science, ai, curriculum, conversations, reflections, science, health, education. A new subject still works and gets a default colour; to choose its colour, add it to `_data/tags.yml` with a label and one of `p1` to `p7`.

### Images

Put the image in `assets/img/` and use `![Description of the image](/assets/img/your-image.jpg)` in the post. Remove location data from phone photos before adding them.

### Gujarati translations

Give the English and Gujarati files the same `lang_ref` and set `lang: en` in one and `lang: gu` in the other. Each version then links to the other; only the English version is listed on the home and Reflections pages.

### 3. Preview, then publish

Preview locally with `bundle exec jekyll serve --livereload` (see Local development) and open http://localhost:4000. Your newest post automatically becomes **Latest reflections** on the home page and appears on the Reflections page. Then publish it with the steps in **Publishing to GitHub** below.

---

## Drafts (private until you publish)

Two folders hold work in progress. Both are in `.gitignore`, so their files stay on your Mac and are never pushed to GitHub or shown on the live site.

| Folder | For | File name |
|---|---|---|
| `_drafts/` | Reflections | No date needed: `_drafts/why-questions-matter.md` |
| `_poem_drafts/` | Poems | Same as a poem: `_poem_drafts/my-new-poem.md` |

Write the file exactly as you would a finished post or poem, header block included.

**Preview:** run the local server with drafts switched on:

```bash
bundle exec jekyll serve --livereload --drafts
```

Drafts appear at http://localhost:4000 with a yellow **Draft** badge, so you can always tell what isn't public yet. A draft reflection takes today's date in the preview.

**Publish:** move the file into the public folder, then push.

- Reflection: move `_drafts/why-questions-matter.md` to `_posts/2026-11-02-why-questions-matter.md` (add the date to the name).
- Poem: move `_poem_drafts/my-new-poem.md` to `_poems/my-new-poem.md`.

Then follow **Publishing to GitHub** below; `git status` will now show the moved file as new.

---

## Writing a poem

Create `_poems/your-poem.md`. Write one line per line and separate stanzas with a blank line:

```markdown
---
title: "We Were Scalars"
lang: en              # en, gu or hi; poems are grouped by language
order: 1              # position among undated poems (lower comes first)
year: 2003            # optional: poems with a year are listed first, oldest first
written: "2003"       # optional: any text, shown under the title
note: "Written for my teacher when I was in college."   # optional: shown after the poem
---

We were scalars,
you made us vectors,

In your classroom, the world came to life,
```

Don't end lines with two spaces; a plain line break is enough. The Poetry page has All, Gujarati, Hindi and English tabs (in that order, set in `poetry.html`); `/poetry/?lang=hi` opens straight to one language. The intro text under the heading lives in `_data/home.yml` as `poetry_page`. Gujarati text uses Noto Serif Gujarati and Hindi text uses Noto Serif Devanagari.

---

## Updating the CV

| File | Section |
|---|---|
| `_data/cv.yml` | Opening line, summary, specialisations, profile snapshot, headline numbers, workshops intro |
| `_data/experience.yml` | Experience |
| `_data/education.yml` | Education (`details` list optional) |
| `_data/projects.yml` | Projects cards (`color` p1 to p7) |
| `_data/community.yml` | Community |
| `_data/trainings.yml` | Workshops delivered: the full log, grouped by year |
| `_data/skills.yml` | Skills |

There is no downloadable PDF. Printing the CV page hides the header and footer.

Your email is stored in `_config.yml` as `email_user` and `email_domain`, and `_includes/email-link.html` writes it into pages only in scrambled form; `assets/js/main.js` assembles the address when someone clicks an email link.

---

## Publishing to GitHub

The live site is built by GitHub Pages from the `main` branch. Whenever you push to `main`, it rebuilds and goes live in about a minute. Run these commands in Terminal from the repo folder (`cd ~/my-repos/mehulphy.github.io`).

### 1. See what changed

```bash
git status
```

Check the list before you commit. Files you have not changed should not appear, and private files must never appear (see the safety list below).

### 2. Stage the files you want to publish

Add only the files you mean to publish:

```bash
git add _posts/2026-11-02-why-questions-matter.md
```

or a whole folder, such as all posts:

```bash
git add _posts/
```

`git add -A` stages everything, which is convenient but easy to regret; run `git status` first if you use it.

### 3. Commit with a short message

```bash
git commit -m "New reflection: Why questions matter"
```

### 4. Push

```bash
git push
```

### 5. Check the live site

Open https://mehulphy.github.io after a minute or two. If you still see the old version, reload once with **Cmd+Shift+R**. To watch the build, open the repo on GitHub and look under **Actions** (or **Settings → Pages**); a red cross there means the build failed, usually because of a typo in a header block.

### If the push is rejected

If `git push` says the remote has changes you don't have (for example, after editing a file on github.com), bring them in first and push again:

```bash
git pull --rebase
git push
```

### Safety list: never publish these

These files contain personal details (address, phone, date of birth) and are listed in `.gitignore` and in `exclude` in `_config.yml`, so git and the site skip them. Keep it that way:

- `*.tex` (your LaTeX CV and resume)
- `*.pdf` (exported CVs and resumes)
- `*.zip` (design exports)

If `git status` ever shows one of these as a change to commit, stop and remove it with `git restore --staged <file>`.

### Writing rules for this site

No em dashes or en dashes anywhere: use commas, colons or parentheses in sentences, "2023 to now" for year ranges, and a plain hyphen for day ranges ("20-21 May"). In a header block, put quotes around any value that contains a colon, for example `description: "Notes: on learning"`; an unquoted colon breaks the page's layout.

---

## Design

All styles live in `assets/css/main.css`; colour tokens are at the top. Type is Cormorant Garamond (display), Newsreader (body), and IBM Plex Mono (labels). The theme follows the visitor's system setting until they use the light/dark toggle, which is remembered. `assets/js/main.js` handles the toggle and the reflections filters; everything still renders without JavaScript.
