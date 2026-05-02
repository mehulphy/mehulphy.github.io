---
layout: default
title: Contributions
description: Mehul Desai's projects, professional experience, education, skills, and trainings.
permalink: /contributions/
---

<div class="work-page">
  <div class="container">

    <h1 class="page-title">Contributions</h1>
    <p style="margin-bottom: 3rem;">
      <a class="social-link" href="/Mehul_Desai_Resume.pdf" target="_blank" rel="noopener">Download CV (PDF)</a>
    </p>

    <p class="section-label">Projects &amp; Programs</p>
    <div class="timeline">
      {% for project in site.data.projects %}
      <div class="timeline-item">
        <div class="timeline-period">{{ project.period }}</div>
        <div class="timeline-content">
          <h3>{% if project.url %}<a href="{{ project.url }}" target="_blank" rel="noopener">{{ project.name }}</a>{% else %}{{ project.name }}{% endif %}</h3>
          <p class="timeline-company">{{ project.org }}</p>
          <p class="timeline-desc">{{ project.description }}</p>
          {% if project.youtube %}<a class="project-link" href="{{ project.youtube }}" target="_blank" rel="noopener">YouTube &rarr;</a>{% endif %}
        </div>
      </div>
      {% endfor %}
    </div>

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
          {% if edu.note %}<p class="education-note">{{ edu.note }}</p>{% endif %}
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

    <p class="section-label">Trainings Conducted</p>
    {% for group in site.data.trainings %}
    <div class="training-group">
      <div class="training-group-header">
        <span class="training-year">{{ group.period }}</span>
        {% if group.context %}<span class="training-context">{{ group.context }}</span>{% endif %}
      </div>
      <ul class="training-list">
        {% for event in group.events %}
        <li class="training-event">
          <span class="training-school">{{ event.school }}</span>
          <span class="training-meta">{{ event.location }}{% if event.date %} &middot; {{ event.date }}{% endif %}</span>
        </li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}

    <p class="section-label">Other</p>
    <ul class="other-list">
      {% for item in site.data.skills.other %}
      <li>{{ item }}</li>
      {% endfor %}
    </ul>

  </div>
</div>
