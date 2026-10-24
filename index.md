---
layout: default
redirect_from:
  - /blog/
---

<p class="intro-line muted">Writing on physics, science, education, and learning by <a href="/about/">{{ site.author.name }}</a>.</p>

{% assign posts = site.posts | where_exp: "p", "p.lang != 'gu'" %}
{% if posts.size > 0 %}
  {% assign years = posts | group_by_exp: "p", "p.date | date: '%Y'" %}
  {% for year in years %}
  <h2 class="year">{{ year.name }}</h2>
  <ul class="post-list">
    {% for post in year.items %}
    <li>
      <div>
        <a href="{{ post.url }}">{{ post.title }}</a>
        {% if post.description %}<p class="post-list-desc">{{ post.description }}</p>{% endif %}
      </div>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d" }}</time>
    </li>
    {% endfor %}
  </ul>
  {% endfor %}
{% else %}
  <p class="muted">No posts yet.</p>
{% endif %}
