# mehulphy.github.io

Personal portfolio and blog built with [Jekyll](https://jekyllrb.com/), hosted on [GitHub Pages](https://pages.github.com/). Push to `main` and the site deploys automatically — no CI pipeline needed.

---

## Local development

**Prerequisites:** Ruby 3.x and Bundler.

```bash
# Install dependencies (first time only)
bundle install

# Start the dev server with live reload
bundle exec jekyll serve --livereload

# Open http://localhost:4000
```

Changes to files rebuild the site automatically. The `_site/` directory is generated output — never edit it directly.

---

## Writing a blog post

Create a file in `_posts/` named `YYYY-MM-DD-your-post-title.md`:

```
_posts/2026-05-10-learning-by-doing.md
```

Every post needs this front matter at the top:

```yaml
---
layout: post
title: "Your Post Title"
description: "A one-sentence summary shown in the post header and meta tags."
date: 2026-05-10
categories: [education]
---

Your content in markdown goes here.
```

- `title` — shown in the browser tab and post header
- `description` — shown as a subtitle under the title; also used for SEO
- `date` — must match the filename date; posts with future dates won't appear until that date
- `categories` — optional list; shown as a tag on the post

Push to `main` and the post goes live within ~60 seconds.

### Markdown quick reference

```markdown
## Heading 2
### Heading 3

**bold**, _italic_, `inline code`

[Link text](https://example.com)

![Alt text](/assets/img/your-image.jpg)

> Blockquote

- Bullet list
- Item

1. Numbered list
2. Item

    ```python
    # fenced code block
    print("hello")
    ```
```

---

## Updating resume content

All resume data lives in `_data/`. Edit the relevant YAML file and push — the site regenerates automatically.

### Experience — `_data/experience.yml`

```yaml
- title: Job Title
  company: Company Name
  location: City, Country
  period: Jan 2024 – Present
  current: true        # shows a "Now" badge; omit or set false for past roles
  description: >-
    Your description here. The >- block style lets you write across
    multiple lines without needing quotes.
```

### Education — `_data/education.yml`

```yaml
- degree: Master of Science
  institution: University Name
  field: Subject — Specialization
  period: 2003 – 2005
```

### Skills — `_data/skills.yml`

```yaml
technical:
  - Python
  - Git / GitHub

domain:
  - Curriculum design
  - Teacher professional development

other:
  - "Volunteer, Some Organization (2010–2015)"
```

---

## Adding images

Put images in `assets/img/` and reference them in posts or pages:

```markdown
![Description](/assets/img/your-image.jpg)
```

For the profile photo, replace `assets/img/profile.jpeg`.

---

## Updating site-wide settings

Edit `_config.yml` for the site title, description, author info, and social links. Restart `jekyll serve` after editing this file — it's the only file that doesn't hot-reload.

```yaml
title: Mehul Desai
description: Your site description for SEO.

author:
  name: Mehul Desai
  email: you@example.com
  linkedin: your-handle
  github: your-handle
  twitter: your-handle
```

---

## Updating the CV PDF

Replace `Mehul_Desai_Resume.pdf` in the root of the repo. The Work page links to it at `/Mehul_Desai_Resume.pdf`.

---

## File structure reference

```
_config.yml          ← site-wide settings (restart server to apply)
_data/
  experience.yml     ← work history
  education.yml      ← degrees
  skills.yml         ← technical, domain, and other skills
_layouts/
  default.html       ← base HTML template
  post.html          ← blog post template
_includes/
  nav.html           ← navigation bar
  footer.html        ← footer
_posts/              ← blog posts (YYYY-MM-DD-title.md)
assets/
  css/main.css       ← all styles (no Bootstrap)
  js/main.js         ← dark/light mode toggle
  img/               ← images
index.md             ← About page (home)
work.md              ← Work page (experience + CV)
blog/index.html      ← Blog listing page
Mehul_Desai_Resume.pdf
```

---

## Deployment

Push any branch changes to `main`:

```bash
git add .
git commit -m "your message"
git push
```

GitHub Pages picks up the push and rebuilds the site. Changes are live within about a minute.
