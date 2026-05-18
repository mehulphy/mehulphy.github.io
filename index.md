---
layout: default
description: Mehul Desai — physicist, educator, and learning designer based in Gandhinagar, India.
---

<div class="home-page">
  <div class="container">

    <div class="home-hero">
      <div class="home-hero-text">
        <h1 class="home-name">Mehul Desai</h1>
        <p class="home-tagline">Physicist &middot; Educator &middot; Learning Designer</p>
        <p class="home-intro">With over 20 years in science education, I design learning experiences that make complex ideas accessible and enduring. I am currently Chief Learning Officer at <a href="https://qubitsedu.com" target="_blank" rel="noopener">Qbits Learning</a> and the creator of <a href="https://intellectualrigour.org" target="_blank" rel="noopener">Intellectual Rigour</a> — a biographical interview series with leading mathematicians, physicists, and computer scientists.</p>
        <a class="home-about-link" href="/about/">About Me &rarr;</a>
      </div>

      <div class="home-hero-image">
        <img src="/assets/img/mehul_at_ias.jpg" alt="Mehul Desai at the Institute for Advanced Study, Princeton">
        <p class="home-image-caption">Institute for Advanced Study, Princeton</p>
      </div>
    </div>

    {% assign recent_posts = site.posts | where_exp: "p", "p.lang != 'gu'" %}
    {% assign recent = recent_posts | first %}
    {% if recent %}
    <div class="home-latest">
      <p class="section-label">Latest Writing</p>
      <a class="home-article-card" href="{{ recent.url }}">
        <div class="home-article-meta">
          <time>{{ recent.date | date: "%B %-d, %Y" }}</time>
          {% for cat in recent.categories %}<span class="post-category">{{ cat }}</span>{% endfor %}
        </div>
        <h2 class="home-article-title">{{ recent.title }}</h2>
        {% if recent.description %}<p class="home-article-desc">{{ recent.description }}</p>{% endif %}
        <span class="home-article-read">Read &rarr;</span>
      </a>
    </div>
    {% endif %}

  </div>
</div>
