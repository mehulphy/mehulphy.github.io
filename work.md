---
layout: default
title: Work
description: Mehul Desai's professional experience, education, and skills.
---

<div class="work-page">
  <div class="container">

    <h1 class="page-title">Work</h1>
    <p style="margin-bottom: 3rem;">
      <a class="social-link" href="/Mehul_Desai_Resume.pdf" target="_blank" rel="noopener">Download CV (PDF)</a>
    </p>

    <p class="section-label">Experience</p>
    <div class="timeline">
      {% for job in site.data.experience %}
      <div class="timeline-item">
        <div class="timeline-period">
          {{ job.period }}{% if job.current %}<span class="badge-now">Now</span>{% endif %}
        </div>
        <div class="timeline-content">
          <h3>{{ job.title }}</h3>
          <p class="timeline-company">{{ job.company }} &middot; {{ job.location }}</p>
          <p class="timeline-desc">{{ job.description }}</p>
        </div>
      </div>
      {% endfor %}
    </div>

    <p class="section-label">Education</p>
    <div class="education-list">
      {% for edu in site.data.education %}
      <div class="education-item">
        <div class="education-period">{{ edu.period }}</div>
        <div class="education-content">
          <h3>{{ edu.degree }}</h3>
          <p class="education-meta">{{ edu.institution }} &middot; {{ edu.field }}</p>
        </div>
      </div>
      {% endfor %}
    </div>

    <p class="section-label">Skills</p>
    <div class="skills-wrap">
      {% for skill in site.data.skills.technical %}
      <span class="skill-tag">{{ skill }}</span>
      {% endfor %}
    </div>
    <ul class="domain-list">
      {% for skill in site.data.skills.domain %}
      <li>{{ skill }}</li>
      {% endfor %}
    </ul>

    <p class="section-label">Other</p>
    <ul class="other-list">
      {% for item in site.data.skills.other %}
      <li>{{ item }}</li>
      {% endfor %}
    </ul>

  </div>
</div>
