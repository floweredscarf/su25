---
layout: page
title: Resources
navbar: true
released: true
---

{% for section in site.data.resources %}
<h2 id="{{ section.title | slugify }}">{{ section.title }}</h2>
{%- if section.groups -%}
{% for group in section.groups %}
<h3 id="{{ section.title | slugify }}">{{ group.heading }}</h3>

{{ group.body | markdownify }}
{% endfor %}
{%- else -%}
{{ section.body | markdownify }}
{%- endif -%}
{% endfor %}
