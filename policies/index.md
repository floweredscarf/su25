---
layout: page
title: Course Info
nav_order: 2
has_right_toc: true
has_children: true
description: >-
    Course policies and information.
released: true
---

{%- if site.under_construction -%}
<p class="warning">
This site is under construction. All dates and policies are tentative until this message goes away.
</p>
{%- endif -%}

{%- if site.outdated -%}
<p class="warning">
This website contains materials from a past semester. Information, assignments, and announcements may no longer be relevant. Please refer to the <a href="https://template.cs161.org">current semester's site</a> for up-to-date content.
</p>
{%- endif -%}

*This document provides an overview of the policies for this course as taught
at UC Berkeley.*

# Policies
{:.no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## General Background Information

### Welcome to CS 61BL

The CS 61 series is an introduction to computer science, with particular
emphasis on software and machines from a programmer’s point of view. In CS 61A,
students are exposed to a diverse set of mental models for computational
problems and solutions through programming paradigms like functional
programming, object-oriented programming, and declarative programming. In CS
61BL, we refine those mental representations by focusing particularly on the
efficiency of writing programs (design) and running programs (runtime). Further,
we aim to achieve a basic understanding of fundamental topics in theoretical
computer science, as part of our work on improving performance.

### Hours and Workload

This is a summer course, which means it is run at twice the speed of a course
during the normal semester. In addition, CS 61B naturally has more involved
programming than CS 61A, and CS 61BL has even more, so expect there to be a lot
of work. **We strongly recommend not taking any other courses alongside CS
61BL.**

While we can’t predict how many hours you will spend on the course, here is a
brief breakdown of what you will have to do in this course.

- Four 2 hour practical labs per week on Monday - Thursday.
- Two one-hour live lectures per week on Monday and Wednesday, with pre-recorded lecture videos to watch before class.
- One homework per week (total of 6).
- Two exams (one midterm, one final) in the 8 weeks of the course.
- Four projects in the 8 weeks of the course.

### Prerequisites

CS 61A is an important prerequisite. We expect to build heavily on
data-oriented and object-oriented design approaches introduced in this course
and on algorithms for recursive list and tree manipulation. Engineering 7 / CS
88 / Data 8 students may find the beginning of the course to be a bit
scarier, particularly when it comes to object-oriented programming and
recursion. We assume you are coming in with zero Java experience, but we will
move through basic Java syntax very quickly.

### Alternatives

This is a course about data structures and programming methods. For those who
may have already had a data structures course and simply want to learn Java,
self-study may be a better option.
Students with “sufficient partial credit” in CS 61B should consider taking CS
47B to complete the CS 61B requirement without taking the full course. Both of
these self-paced courses are only offered during the fall and spring semesters.

### Goals and Class Norms

We are committed to creating a learning environment welcoming of all students that supports a diversity of thoughts, perspectives and experiences and respects your identities and backgrounds (including race, ethnicity, nationality, gender identity, socioeconomic class, sexual orientation, language, religion, ability, and more.) To help accomplish this:

- If your name and/or pronouns differ from those that appear in your official records, please let us know.
- In scheduling exams, we have attempted to avoid conflicts with major religious holidays. If, however, we have inadvertently scheduled an exam or major deadline that creates a conflict with your religious observances, please let us know as soon as possible so that we can make other arrangements.
- If you feel like your performance in the class is being affected by your experiences outside of class (e.g., family matters, current events), please don’t hesitate to come and talk with us. We want to be resources for you.

Professionalism and respect for diversity are not just matters between students; they also apply to how the course staff treat the students. The staff of this course will treat you in a way that respects our differences. However, despite our best efforts, we might slip up, hopefully inadvertently. We (like many people) are still in the process of learning about diverse perspectives and identities. If you are concerned about classroom environment issues created by the overall class dynamic or by the staff, please feel free to talk to us about it.

If something was said in class (by anyone—staff member or fellow student) that made you feel uncomfortable, please talk to us about it. Sometimes, you may not be comfortable bringing this up directly to us. Here are some options:
- via the [61BL SU25 Incident Reporting Form.](https://forms.gle/kvTnbkvhYPZdiKbY6)
- via email to our instructors, head TAs, or another member of staff you're comfortable with.
- via the department's [Student Climate and Incident Reporting Form.](https://docs.google.com/forms/d/e/1FAIpQLSc4NYHdUJ8IzYA1SoiTinWBybGWkj0mfmdnHAeygAxkZajelQ/viewform)

### Remote Policy

This is, per university policy, an in-person course. **However, we will make at least one 
lab section online, though we have no guarantees about meeting online demand.**
Please note, however, that our ability to support those in other timezones will be 
limited by our need to sleep at night. That means that, if you are on the other side 
of the world, you may have to be up at night to attend our offerings. We thus do 
not recommend that you take the course if you will not be physically located in an 
amenable timezone, although we will not prevent you. **You must take the exams in person.** Everything other than exams can be done remotely.

### Mental Health & Wellness

As a student you may experience a range of issues that can cause barriers to
learning, such as strained relationships, increased anxiety, alcohol/drug problems,
depression, difficulty concentrating and/or lack of motivation. Your mental health is more important than this course. **Seriously.** UC Berkeley offers services to assist you with addressing mental health concerns or stressful events:

- [Counseling and Psychological Services](https://uhs.berkeley.edu/caps) has multiple free, confidential services. An on campus counselor or after-hours clinician is available 24/7.
  - [UHS Casual Consulting](https://uhs.berkeley.edu/counseling/lets-talk)
  - [UHS Crisis Management Counseling](https://uhs.berkeley.edu/counseling/urgent)
- [UHS's mental health resources](https://uhs.berkeley.edu/health-topics/mental-health) offers guides, handbooks, and more.
- The National Suicide Prevention Lifeline is a 24-hour number any student or faculty/staff person can call to speak with someone about suicide: +1-800-273-TALK (+1-800-273-8255).
- Support is also available for survivors of sexual violence or harassment. Note that course staff are [Responsible Employees](https://svsh.berkeley.edu/responsible-employee) for such incidents. Campus also has free, confidential services available:
  - [UC Berkeley Sexual Violence Services](https://svsh.berkeley.edu/)
  - [PATH to Care Center: Reporting and Privacy](https://survivorsupport.berkeley.edu/Confidential-Resources-Anonymous-Reporting-and-Privacy)

If you're in need of laptops, Wi-Fi hotspots, or other required technologies, check out the [Student Technology Equity Program.](https://technology.berkeley.edu/STEP)

{% include alert.html type="info" content="If you’re experiencing extenuating circumstances impacting your mental health and would like to meet with a member of course staff to work out accommodations within the course, or would like to be connected to more resources, fill out our [Extenuating Circumstances form](#extenuating-circumstances). " %}

### Accommodation

UC Berkeley is committed to creating a learning environment that meets the
needs of its diverse student body including students with disabilities. If you
anticipate or experience any barriers to learning in this course, please feel
free to email [cs61bl@berkeley.edu](mailto:cs61bl@berkeley.edu).

If you have a disability, or think you may have a disability, you can work with
the Disabled Students' Program (DSP) to request an official accommodation. The
Disabled Students' Program (DSP) is the campus office responsible for
authorizing disability-related academic accommodations, in cooperation with the
students themselves and their instructors. You can find more information about
DSP, including contact information and the application process [here][DSP]. If
you have already been approved for accommodations through DSP, please schedule
a meeting with the instructors so we can develop an implementation plan
together.

[DSP]: https://dsp.berkeley.edu

### Land Statement

We recognize that Berkeley sits on the territory of Huichin, the ancestral and
unceded land of the Chochenyo Ohlone, the successors of the historic and
sovereign Verona Band of Alameda County. This land was and continues to be of
great importance to the Ohlone people. We recognize that every member of the
Berkeley community has, and continues to benefit from the use and occupation of
this land, since the institution's founding in 1868. Consistent with our values
of community and diversity, we have a responsibility to acknowledge and make
visible the university's relationship to Native peoples. By offering this Land
Acknowledgment, we affirm Indigenous sovereignty and will work to hold
University of California Berkeley more accountable to the needs of American
Indian and Indigenous peoples.

---

## Course Format

### Lecture

This summer, we will be using a _flipped classroom_ format. Students are **expected** to watch pre-recorded lecture videos from previous semesters before attending class (except for the first lecture). Live lecture sessions will focus on deepening your understanding of the material through conceptual reviews, interactive problem-solving, and Q&A.
Lecture will be held on **Mondays and Wednesdays from 9–10am in Evans 10**. Because the classroom cannot accommodate all enrolled students, lectures will also be webcast live over Zoom to ensure full access. Whether attending in person or virtually, active participation is encouraged to make the most of our collaborative in-class time.

### Labs

Lab sections meet Monday through Thursday. You may only attend the lab section which you signed up for.
In-person labs will be held in a lab room in Soda Hall. Remote labs will be held over 
Zoom where you will be working primarily in breakout rooms (TAs / Tutors will join the breakout room when you need assistance).

These labs are practical labs that emphasize hands-on experience with the course material.
They involve coding assignments that are submitted for credit. Labs will also have a small attendance credit (see grading breakdown below).

If you would like to swap to a lab section that you are not officially enrolled
in you must email [cs61bl@berkeley.edu](mailto:cs61bl@berkeley.edu). **Attending a lab that you are not officially
enrolled in or have not received permission to attend may result in you being 
de-prioritized for help.**

### Homeworks

Homeworks are designed to reinforce your **conceptual understanding** of the material each week. They will include a mix of multiple-choice, short answer, and coding questions, and will be released on **Gradescope** every **Wednesday**, due the following **Tuesday at 11:59 PM**.
Regardless of length, all homeworks will be worth **2.5** points. The maximum number of homework points you can get is 15.

**No extensions** will be granted for homework assignments for any reason, so please plan accordingly and start early.

### Projects

There are four projects in this course. Projects are larger and more
challenging assignments than you would typically find in a lab. There will be some in lab time to work on these projects,
but they are largely meant to be completed outside of lab. This semester, **we will not be having explicit TA office hours**, so please come to lab to get the best help.

### Exams

This course has a midterm exam and a final exam.

- The Midterm will be on **Friday, July 18th from 7-9 PM in Dwinelle 155**.
- The Final Exam will be on **Tuesday, August 12th from 3-6 PM in Dwinelle 155**.

We will offer **in-person exams only**.

Students with DSP accommodations that require alternate exam timing
will be accounted for, so long as you can make a time that overlaps the official
time. If you have a disability that prevents your ability to make such a time,
we will discuss alternate arrangements with you directly.

If you have a time conflict with the midterm exam, or if you
are unable to make the final exam, please email <cs61bl@berkeley.edu> as soon as possible explaining your needs.

#### Final Exam Clobbering

We have a **partial clobber policy** on the midterm exam. If you do significantly better on the final exam than on the midterm, we will adjust your midterm score to reflect that improvement—but only **partially**. This is intended to account for situations where students improve over the course or have an off day on the midterm.
Specifically, if it helps your overall grade, we will **replace your midterm exam z-score** with the **average** of your midterm and final exam z-scores. Your final exam score will **never** be clobbered.

As an example, suppose you are in the following situation (all numbers are in terms of raw scores):
-   **Midterm Exam:** Your Score = 60, Mean Score = 70, Standard Deviation = 10
-   **Final Exam:** Your Score = 85, Mean Score = 75, Standard Deviation = 10

In this case, you will have the following z-scores:
-   **Midterm Exam**: (60 - 70) / 10 = -1
-   **Final Exam**: (85 - 75) / 10 = 1

Under the partial clobber policy, your adjusted midterm z-score will be (-1 + 1) / 2 = 0. Your new midterm score will correspond to the mean score, or 70. The final exam score remains unchanged.

Z-scores will be based on the grades before this policy is applied. In other words, we will not recalculate the statistics for the midterm for the purposes of implementing this policy.

The final exam z-score clobbering policy will only be applied if it helps your score. For example, if you score around the average on the midterm, but then have a bad day and do poorly on the final, we will not change your midterm scores.

While this mechanism introduces a bit of curving to the class, it does not turn the class into a competition. Our grading bins are still fixed, a vast majority of the points are not subject to this mechanism, and the impact tends to be relatively small for most students.

In theory, it would be nice to have a mechanism that avoids using any statistics, e.g., simply replacing your midterm score with the final grade if it’s higher. In practice, it is very difficult to get both the exam means (and variances) to line up. Therefore, we use a z-score partial clobbering policy as described above.

### Surveys

After most weeks, we will send out a weekly survey in the weekly announcements.
We will have 6 weekly surveys. Completing each weekly survey will give half of
an **extra credit** point! In addition to the weekly surveys, we will send out
presemester, midsemester, and end-of-semester surveys. The presemester, midsemester, and end-of-semester surveys will earn 1 extra
credit point each. Completing all three will give 3 points. So, if you complete
every survey in this class, you can get a total of 6 extra credit points!


## Grading

Your course grade is computed using a point system with a total of 300 points.

<div class="table-responsive">
  <table>
    <caption>Grade breakdown</caption>
    <thead>
      <tr>
        <th scope="col">Category</th>
        <th scope="col">Percentage</th>
        <th scope="col">Points</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Lab Assignments</th>
        <td>13%</td>
        <td>40</td>
      </tr>
      <tr>
        <th scope="row">Lab Attendance</th>
        <td>5%</td>
        <td>15</td>
      </tr>
      <tr>
        <th scope="row">Homeworks</th>
        <td>5%</td>
        <td>15</td>
      </tr>
      <tr>
        <th scope="row">Project 0</th>
        <td>5%</td>
        <td>15</td>
      </tr>
      <tr>
        <th scope="row">Project 1</th>
        <td>10%</td>
        <td>30</td>
      </tr>
      <tr>
        <th scope="row">Project 2</th>
        <td>12%</td>
        <td>36</td>
      </tr>
      <tr>
        <th scope="row">Project 3</th>
        <td>12%</td>
        <td>36</td>
      </tr>
      <tr>
        <th scope="row">Midterm</th>
        <td>18%</td>
        <td>54</td>
      </tr>
      <tr>
        <th scope="row">Final Exam</th>
        <td>20%</td>
        <td>59</td>
      </tr>
      <tr>
        <th scope="row">Total</th>
        <td>100%</td>
        <td>300</td>
      </tr>
    </tbody>
  </table>
</div>

Each letter grade for the course corresponds to a range of
scores:

<div class="table-responsive">
  <table>
    <caption>Grade bins</caption>
    <thead>
      <tr>
        <th scope="col">A+</th>
        <th scope="col">A</th>
        <th scope="col">A-</th>
        <th scope="col">B+</th>
        <th scope="col">B</th>
        <th scope="col">B-</th>
        <th scope="col">C+</th>
        <th scope="col">C</th>
        <th scope="col">C-</th>
        <th scope="col">D+</th>
        <th scope="col">D</th>
        <th scope="col">D-</th>
        <th scope="col">F</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>295</td>
        <td>280</td>
        <td>265</td>
        <td>245</td>
        <td>225</td>
        <td>205</td>
        <td>195</td>
        <td>185</td>
        <td>175</td>
        <td>170</td>
        <td>165</td>
        <td>160</td>
        <td>0</td>
      </tr>
    </tbody>
  </table>
</div>

**There is no curve.** Your grade will depend only on how well you do, and not
on how well everyone else does. These bins were designed based on past semester
student performance with the intention of complying with [departmental grading
guidelines][].

[departmental grading guidelines]: https://eecs.berkeley.edu/resources/faculty-staff/academic-personnel/grading-guidelines-undergrad

Incomplete grades will be granted only for dire medical or personal emergencies
that cause you to miss the final, and only if your work up to that point has
been satisfactory. You must complete all coursework before the drop deadline to
be considered for an incomplete grade. Per university policy, you will **not** be able to request for an incomplete on assignments that were involved in academic misconduct. For more information, please email the instructors.

There are a total of 21 graded lab exercises, each worth 2 points.
Thus, while the total point value for labs is 42 points, lab grades are capped
at 40 points. This means that **you can miss up to 1 lab without penalty** if you get a full score on every other lab. 
It also means that you can get full credit for labs in this class if you do not get a full score on every lab assignment.
In other words, getting more than 40 points on lab is equivalent to
getting 40 points for your lab score.

For the lab attendance, you will need to attend 15 labs in order to receive full attendance credit. Each attendance is worth 1 point, with a point cap of 15 points.

### Late Policy

You will receive a total of 8 slip days for the entire semester that can be used for lab assignments. Each slip day extends your deadline by 24 hours. Slip days may only be applied retroactively, and you may **not** use a fraction of a slip day.

#### Lab Lateness

For lab assignments, you can use at most one slip day per lab assignment. Lab assignments turned in late without using a slip day will receive no credit.

You should only be using a slip day on a lab assignment if you have made
significant progress on the lab prior to the original deadline for the
assignment. The intention of a slip day is to give you enough time to put the
last finishing touches on the lab assignment before turning it in (for example,
if you have been facing a bug for awhile, you should use a slip day, which buys
you time to get some sleep before asking your TA for the last bit of help you
need the next day). We recommend that slip days are not be used if significant
progress wasn't made on the lab before the deadline, such as if you couldn't
make a lab section and are trying to complete the entire lab the day after. In
this situation, it may be better for you to consider skipping the assignment and
proceeding with the more current ones to keep pace with the course. Remember,
you don't need to get all points in the lab category to still get full credit
for labs. Please see the Grading section above for more information.

**To use a lab slip day, go to the Extensions tab on Beacon. If you have enough
slip days remaining, you may select your assignment and your new due date**.
Note that you can only request at most 1 slip day per lab, and once you apply a slip day to an assignment, you cannot later extend it by even more time.

#### Project Lateness

For projects, you can use slip days to extend your deadline. Each slip day extends your deadline by 24 hours. If you turn in your project late without using a slip day, you will receive no credit.

**To use a project slip day, go to the Extensions tab on Beacon. If you have enough
slip days remaining, you may select your assignment and your new due date**.

**No extensions will be granted for project checkpoints and Project 3** (with the 
exception of DSP extension accommodations).

#### DSP Accommodations

We will be honoring DSP accommodations for extensions on assignments. For any assignment,
students with extension accommodations can receive an automatic extension
on any assignment in accordance with your accommodation letter.

**To request for a DSP-related extension, go to the "DSP Extensions" section under the Extensions tab on Beacon. We will check your DSP record for extensions related accommodations.**

#### Extenuating Circumstances

We define extenuating circumstances as circumstances outside of the student's control that 
directly inhibits the student's ability to complete assignments in a timely manner. Some 
examples include unforeseen physical/mental health crises, technical issues (broken laptop), 
family emergency, etc.

If you're experiencing extenuating circumstances impacting your mental health and would like
to meet with a member of course staff to work out accommodations within the course, or would 
like to be connected to more resources, you can set up a meeting with us 
[**here**](https://forms.gle/QnYufRchWc7dFdKZ8).

{% include alert.html type="danger" content=" We will not be considering retroactive 
submissions to the extenuating circumstances form. **This means that you should proactively submit to the form before the assignment's deadline to be considered.** Exceptions will only be made in extreme cases. " %}

The last day to submit any assignment is **Monday, August 11th, 11:59 PM PT.** 
This is a hard deadline, and we will not accept any submissions made after this deadline.

## Resources

### Online Forum

Our discussion forum this semester is Edstem (Ed for short). For most questions about the course, Ed
is the right place to ask them. The course staff read it regularly, so you will get a
quick answer. Furthermore, by posting online as opposed to emailing us directly, other
students benefit by seeing the question and the answer.

#### Ed Etiquette

-   **Search before posting**: Your question may have already been answered by us or other students in the past. Reading other  students' posts will let you refine your question, and gives us more time to answer new questions.
-   **Try to avoid open-ended or vague questions such as**: "How does Java work?" or "How come the solution to a discussion      problem is this?". If you walk us through your thoughts and reference specific lines that you find confusing, we can better address the problem you are facing. Being specific helps us uncover any misunderstandings that you may have.
-   **Post questions about assignments as public follow-ups on the corresponding assignment post**: For example, post your questions about Lab 1 under the Lab 1 post. If your question is too detailed or revealing to fit as a follow-up, your question would be better answered during lab. 
-   **No follow-up +1's**:  Instead, you should use the heart button on a question/follow-up. Excessive +1 follow-ups clutter the post and make it more difficult to get to the unresolved follow-ups.
-   **If you want a reply on a follow-up, mark it as unresolved**, or we may not see it.

For more detailed information, please read over the [Ed policies and guidelines.](guides/ed/index.md)

### Staff Email

The email address <cs61bl@berkeley.edu> will send a message to the instructors.
**Only the current instructors and select Head TAs have access to this email.**
You can use it for correspondence that you don't want to send to all TAs through Ed.
**Please do not email the instructors directly** since your message may be
misplaced that way. You will get a faster response from the course email.

### Reading

You are expected to read each lab's contents.  There are also related textbooks
that belong to CS 61B, which you may read if you please. The first text we use
is Josh Hug's [free, online course notes][Hug61B] written in collaboration with past and current TAs. If you find these notes
insufficient, you might consider consulting Paul Hilfinger's (free) [Java
Reference][AJR] or Head First Java, 2nd Edition by Sierra and Bates (O'Reilly,
2005). The optional textbook for the latter half of the course is Algorithms,
4th Edition by Wayne and Sedgewick.

[Hug61B]: https://cs61b-2.gitbook.io/cs61b-textbook/
[AJR]: http://www-inst.eecs.berkeley.edu/~cs61b/fa14/book1/java.pdf

## Collaboration and Academic Misconduct

Plagiarism on any lab or project will result in a score of zero on that
assignment, along with academic sanctions. A second instance of plagiarism 
on a lab or project will result in an F in the course. All incidents of 
plagiarism will be referred to the Center for Student Conduct, including 
carelessly leaving code up on GitHub. Further details about our academic 
misconduct policy can be found [here][AM].

Deadlines can be stressful, and we know that under extreme pressure, it becomes
tempting to start rationalizing actions that you would otherwise would consider
inappropriate. If you find yourself in this situation, **please talk to a staff
member immediately!** See the late policy above. We **want** to work with you!

During the Spring 2017 semester, we compiled a series of [incident reports
written by students who were caught plagiarizing][incident reports]. If you
find yourself tempted to cheat, consider turning to the words of others who
have made the wrong choice for guidance.

[incident reports]: https://sp18.datastructur.es/materials/guides/incident-reports-2017.html
[AM]: guides/academic-misconduct.md

### Lab Collaboration

The entire point of labs is to learn, so we emphasize active learning and pair
programming. For labs, you can work with anyone *in your lab section*, including sharing code. However, each student is expected to write up their own solutions and submit to their own Gradescope. If you work with others, note who you collaborated with.
If you decide to work alone, you are able to submit individually.

### Project Collaboration

Projects are designed for learning and evaluating your mastery of the course material. As such, they are intended to be completed primarily **independently** of any other student, particularly when it comes to
writing actual code. However, we do encourage collaboration through discussing high-level strategies, specific syntax issues,
and solutions to bugs with other students. **You should never be in direct possession of code that was not written entirely by you alone.**

For Project 2, we will allow, but not require partnerships. Details will be released in the project spec. 

Project 3 will be the only project where formal partnerships are required. Details related to partnerships will be released in the project spec. 

### Exam Misconduct

**For exams, we will be absolutely unforgiving.** Any incident will result in a
failing grade for the course, though Berkeley will let you retake CS 61B next
semester. All incidents of academic misconduct on exams will be referred to the
Center for Student Conduct.

### Academic Misconduct

You can obey the letter of this entire policy while completely violating its
spirit. However, this policy is not a game to be defeated, and such
circumventions will be seen as plagiarism.

**The golden rule of academic misconduct is that you should not claim to be
responsible for work that is not yours.** To help (but not entirely define) the
bounds of acceptable behavior, we have three important rules for projects:

-   **By You (and Your Partner) Alone**: All code that you submit (other
    than skeleton code) should be written by you (and your partner) alone, except
    for small snippets that solve tiny subproblems (examples in the Permitted
    section below).
-   **Do Not Possess or Share Code**: Before you've submitted your final work for
    a project, you should never be in possession of solution code that you (or
    your partner) did not write. You will be equally culpable if you distribute
    such code to other students or future students of CS 61BL (within reason). **DO
    NOT GIVE ANYONE YOUR CODE! EVEN IF THEY ARE DESPERATELY ASKING. DO NOT POST
    SOLUTIONS TO PROJECTS ONLINE (on GitHub or anywhere else)!** If you're not sure
    what you're doing is OK, please ask.
-   **Cite Your Sources**: When you receive significant assistance on a project
    from someone else or an online source, you should cite that assistance somewhere in your source
    code. We leave it to you to decide what constitutes "significant".

#### Permitted

-   Discussion of approaches for solving a problem. Such help should be cited as
    comments in your code. For the sake of others' learning experience, we ask
    that you try not to give away anything juicy, and instead try to lead people
    to such solutions.
-   Discussion of specific syntax issues and bugs in your code, without showing
    another student your code. Verbally discussing syntax issues is permitted, but
    Zoom screen sharing your code, for example, is not permitted. Cite any
    non course staff (course staff meaning Tutor, TA, or Instructor) person
    you received advice from.
-   Using small snippets of code that you find online for solving tiny problems such as math operations (finding the distance between two points, etc), or basic Java syntax (how to capitalize a String, how to iterate a list, etc). Nontrivial usages must be cited in comments in your code.

#### Absolutely Forbidden

-   Typing or dictating code into someone else's computer is a violation of the "By You Alone" rule.
-   Looking at someone else's project code to understand a particular idea or
    part of a project. This is not allowed due to the danger of
    plagiarism. We are very serious about the "By You Alone" rule!
-   Possessing project solution code that you did not write yourself or another
    student's project code in any form before a final deadline, be it electronic
    or on paper. This includes the situation where you're trying to help someone
    debug. Distributing such code is equally forbidden.
-   Posting solution code to any assignment in a public place (e.g. a public git
    repository, Google Drive, Discord, etched into stones above the Mediterranean, etc). This
    applies even after the semester is over.
-   Working in lock-step with other students. Your workflow should not involve a
    group of people identifying, tackling, and effectively identically solving a
    sequence of subproblems.

#### LLM/AI Policy

This course (and many others) serves to better your programming skills, and using LLM/AI tools such as ChatGPT, Copilot, Gemini, Deepseek, Cursor, etc. to generate code will not help you learn. Doing the work yourself gives you the ability to discern when LLMs (or other people) generate bad code. Copying code from LLMs is a form of plagiarism, and will be treated as such.

Thus, using these tools to generate code is **forbidden** unless otherwise stated. If you are completely stuck with debugging, using LLM tools to *debug code that you've written yourself* is permitted with extreme caution (cite your sources). In any case, you should understand what the LLM is suggesting and be able to explain it in your own words. Be wary that these tools are often confidently incorrect!

## A Parting Thought

Grades and penalties aren't the purpose of this course; we really just want you
to learn and be successful.

The entire staff is very excited to be teaching CS 61BL this semester and we're
looking forward to meeting such a large and enthusiastic group of students.
Welcome to CS 61BL!

## Auditing 61BL

We welcome those who are interested in auditing 61BL. We will provide access to our assignments and autograders, but you will not have access to anything that requires manual human effort (e.g. staff support, exam grading, lab sections, etc.). We cannot provide staff support for auditors.

61BL SU25 lectures will be made available to those with a Berkeley email. (If you are a non-Berkeley student, see [the SP25 audit policy](https://sp25.datastructur.es/policies/#auditing-cs61b).)

We cannot add auditors to private platforms (e.g. bCourses, Ed, SU25 student Gradescope). All the information we can publicly share is available on this course website.

Note: If you're auditing the course, you will not be able to access Beacon. Instead, you can directly clone the [skeleton repo](https://github.com/cs61bl/skeleton-su25) to get a copy of the starter code.

To get everything set up, go to Gradescope and select the "Add a course" button. Enter course code **KDR8BZ** to be added. You will not be given a student repo, so you will have to create your own on GitHub in order to submit assignments. After you complete setup and Lab 1, you should have access to all the code for the class.

### Acknowledgments

Some course information ideas derived from:

- [Josh Hug's CS 61B syllabus][Hug],
- [Brian Harvey's CS 61A handout][BH],
- [David Malan's CS50][CS50]
- [Zephyr Omaly's guide to inclusive classrooms][ZB], and
- [CS 61C Spring 2024's course policies][CS61C].

---
