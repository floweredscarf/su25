---
layout: page
title: Staff
nav_order: 4
description: A listing of all the course staff members.
---

# Staff
{% if site.staff_email and site.staff_email != '' and site.staff_email != 'None' %}
For logistics and administrative questions, please email <a href="mailto:{{site.staff_email}}">{{site.staff_email}}</a>.
Access to these emails is denoted by the `Staff Email Access` tag. Future instructors and
head TAs may also be able to read emails here, but we can delete emails upon request.

If you have a non-course related question, you can view staff emails by pressing the button below:

<div id="staffButtonContainer">
  <button id="email-trigger" class="btn btn-outline-primary">Show Emails</button>
</div>
{% endif %}

## Instructors

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Head TA' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
## Head TAs

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

{% assign teaching_assistants = site.staffers | where: 'role', 'TA with role' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
## TAs

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

{% assign teaching_assistants = site.staffers | where: 'role', 'TA' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Tutor' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
## Tutors

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Reader' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
## Readers

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

{% assign teaching_assistants = site.staffers | where: 'role', 'TI' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
## Teaching Interns (TIs)

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

{% if site.staff_email and site.staff_email != '' and site.staff_email != 'None' %}
<script>
  var visible = false;
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("email-trigger");
    var emails = document.getElementsByClassName("staff-email");
    button.addEventListener("click", () => {
      if (visible) {
        button.innerHTML = "Show Emails"
      } else {
        button.innerHTML = "Hide Emails"
      }

      var i = 0;
      for (i; i < emails.length; i++) {
        if (visible) {
          emails[i].style.display = "";
        } else {
          emails[i].style.display = "inline";
        }
      }

      visible = !visible;
    })
  });
</script>
{% endif %}
