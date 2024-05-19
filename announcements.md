---
layout: page
no_toc: true
title: Past Announcements
released: true
---

<ul>
{%- for post in site.posts -%}
  <li>
  {{ post.date | date: "%b %d, %Y" }}: <a href="{{site.baseurl}}{{ post.url }}">{{ post.title | escape }}</a>
  </li>
  {%- endfor -%}
</ul>
