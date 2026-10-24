---
layout: default
title: CV
description: Curriculum vitae of Mehul Desai — experience, projects, education, skills, and trainings.
permalink: /cv/
redirect_from:
  - /contributions/
  - /work/
---

<header>
  <h1 class="page-title">{{ site.author.name }}</h1>
  <p class="cv-contact">
    Physicist · Educator · Learning designer · Gandhinagar, India<br>
    <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a> ·
    <a href="https://linkedin.com/in/{{ site.author.linkedin }}">linkedin.com/in/{{ site.author.linkedin }}</a>
    <span class="no-print"> · <a href="/Mehul_Desai_Resume.pdf" target="_blank" rel="noopener">Download PDF</a></span>
  </p>
</header>

<h2 class="section-title">Summary</h2>
<ul class="cv-summary">
  <li>Designed and implemented five inquiry-based science learning programs aligned to NGSS, British National Curriculum, Cambridge International Examinations, CBSE, and CISCE.</li>
  <li>Created a comprehensive K–12 computer science curriculum aligned to ISTE and CSTA standards.</li>
  <li>Led non-profit initiatives improving foundational literacy, numeracy, and scientific thinking in government schools across four Indian states.</li>
  <li>Delivered teacher professional development workshops at 50+ schools across India.</li>
  <li>Built an adaptive learning system using Revised Bloom's Taxonomy for question tagging and personalised remediation.</li>
  <li>Creator of <em>Intellectual Rigour</em>, a long-form interview series with leading mathematicians, physicists, and computer scientists.</li>
</ul>

<h2 class="section-title">Experience</h2>
{% for job in site.data.experience %}
<div class="entry">
  <div class="entry-period">{{ job.period }}</div>
  <div>
    <h3>{{ job.title }}</h3>
    <p class="entry-org">{{ job.company }} · {{ job.location }}</p>
    <p class="entry-desc">{{ job.description }}</p>
  </div>
</div>
{% endfor %}

<h2 class="section-title">Projects &amp; Programs</h2>
{% for project in site.data.projects %}
<div class="entry">
  <div class="entry-period">{{ project.period }}</div>
  <div>
    <h3>{% if project.url %}<a href="{{ project.url }}" target="_blank" rel="noopener">{{ project.name }}</a>{% else %}{{ project.name }}{% endif %}</h3>
    <p class="entry-org">{{ project.org }}</p>
    <p class="entry-desc">{{ project.description }}</p>
  </div>
</div>
{% endfor %}

<h2 class="section-title">Education</h2>
{% for edu in site.data.education %}
<div class="entry">
  <div class="entry-period">{{ edu.period }}</div>
  <div>
    <h3>{{ edu.degree }}</h3>
    <p class="entry-org">{{ edu.institution }} · {{ edu.field }}</p>
    {% if edu.note %}<p class="entry-desc">{{ edu.note }}</p>{% endif %}
  </div>
</div>
{% endfor %}

<h2 class="section-title">Expertise</h2>
<ul class="plain-list">
  {% for skill in site.data.skills.domain %}<li>{{ skill }}</li>{% endfor %}
</ul>

<h2 class="section-title">Technical skills</h2>
<ul class="plain-list">
  {% for skill in site.data.skills.technical %}
  {% assign parts = skill | split: ": " %}
  <li>{% if parts.size > 1 %}<strong>{{ parts[0] }}:</strong> {{ parts[1] }}{% else %}{{ skill }}{% endif %}</li>
  {% endfor %}
</ul>

<h2 class="section-title">Trainings conducted</h2>
<div class="trainings">
  {% for group in site.data.trainings %}
  <details>
    <summary><strong>{{ group.period }}</strong><span class="muted">{{ group.context }} · {{ group.events.size }} sessions</span></summary>
    <ul>
      {% for event in group.events %}
      <li>{{ event.school }} <span class="muted">— {{ event.location }}{% if event.date %}, {{ event.date }}{% endif %}</span></li>
      {% endfor %}
    </ul>
  </details>
  {% endfor %}
</div>

<h2 class="section-title">Other</h2>
<ul class="plain-list">
  {% for item in site.data.skills.other %}<li>{{ item }}</li>{% endfor %}
</ul>

<script>
  // Expand all training groups when printing the CV.
  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('.trainings details').forEach(function (d) { d.open = true; });
  });
</script>
