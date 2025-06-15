---
layout: home
nav_order: 0
---

{%- assign instructors = site.staffers | where: 'role', 'Instructor' | map: "name" -%}
{%- assign instructor_msg = "Instructor" -%}
{%- if instructors.size != 1 -%}
{%- assign instructor_msg = "Instructors" -%}
{%- endif -%}

{%- if site.under_construction -%}
<p class="warning">
This site is under construction. All dates and policies are tentative until this message goes away.
</p>
{%- endif -%}

{%- if site.waitlist_warning -%}
<p class="warning">
If you're currently on the waitlist, or have any other course-related logistics questions, please take a look at our <a href="{{ site.baseurl }}/resources/faqs">Course FAQs</a> prior to contacting course staff.
</p>
{%- endif -%}

{%- if site.outdated -%}
<p class="warning">
This website contains materials from a past semester. Information, assignments, and announcements may no longer be relevant. Please refer to the <a href="https://template.cs161.org">current semester's site</a> for up-to-date content.
</p>
{%- endif -%}


<!-- <img align="right" alt="161 lock logo" width="85px" src="{{ site.baseurl }}/assets/images/logo.png"> -->
<img align="right" alt="CS61Bee" width="150px" src="assets/images/bee.png">

<!-- hardcoded this so left top can say "Su25" for brevity -->
# CS 61BL Summer 2025

{% if instructors.size != 0 %}
<span style="white-space: nowrap;">
    <strong>{{instructor_msg}}</strong>: {{ instructors | join: ", " }}{%- if site.lecture.time != "" %} / {%- endif -%}
</span>
{% endif -%}
{%- if site.lecture.time != empty -%}
<span style="white-space: nowrap;">
    <strong>Lecture</strong>: {{ site.lecture.time }}
    {%- if site.lecture.location.name != empty and site.lecture.location.link != empty -%}
    , [{{site.lecture.location.name}}]({{site.lecture.location.link}})
    {%- elsif site.lecture.location.name != empty -%}
    , {{site.lecture.location.name}}
    {%- endif -%}
</span>
{% endif -%}
{%- if site.heading_links.size != 0 -%}
<span style="white-space: nowrap;">
    [
    {%- for link in site.heading_links -%}
    {%- unless forloop.first -%}, {% endunless -%}
    {%- if link.text != empty and link.url != empty -%}
    [{{link.text}}]({{link.url}})
    {%- elsif link.text != empty -%}
    {{link.text}}
    {%- endif -%}
    {%- endfor -%}
    ]
</span>
{% endif -%}

## Course Calendar

[Skip to current week](#week-{{ 'now' | date: '%U' }}){: .btn .btn-outline .fs-3 }

<div>
{%- include syllabus_test.html -%}
</div>
