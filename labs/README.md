# labs

[CS 61B]: https://sp19.datastructur.es/
[CS 61BL]: https://cs61bl.org/su22/
[CSM 61B]: https://csmberkeley.github.io/csm-61b/
[Guerrilla]: https://sp18.datastructur.es/resources.html
[Textbook]: https://joshhug.gitbooks.io/hug61b/content/chap1/chap11.html

The labs for CS 61BL. Each lab is numbered within its own subdirectory, and
contains at least an `index.md` file.

Labs should build on the strengths of past [CS 61BL][] labs while integrating
ideas from the latest iteration of [CS 61B][]. Each lab includes a series of
activities:

- A quiz from last lab, stored separately in the course materials repository.
  Quizzes are usually completed individually and graded by the staff. The staff
  then provide targeted, specific feedback to students in the same lab where
  they first took the quiz.
- Web text, or guided instructional text stored in each lab's Markdown files.
  - Demos such as embedded Java Visualizer examples.
  - Exercises for students to complete with their partner.
  - Submission and grading of exercises is normally autograded online through
    Gradescope.
- Self-assessment activities hosted on Gradescope for students to verify
  their understanding of the material.
- Larger group design/defend discussion questions with potential for open-ended
  discussion.
- Explicit reflection questions for students to commit their learning to paper
  or whichever other media is appropriate.

## Creating and Editing Labs

To create a new lab, we first start with the most recent semester's copy of the
lab (as a Markdown file) and update the front matter so that it's compatible
with the new format.

    ---
    layout: page
    title: "Lab 1: Java, Git"
    tags: [Lab, Java, Git]
    ---

We then walk through each step of the lab and integrate new materials and
activities. Sources to pull information and activites from include,

- Labs from [CS 61BL][] and [CS 61B][].
- Lecture, discussion, and [guerrilla][] section material from [CS 61B][].
- Study guides from [CS 61B][].
- Projects from [CS 61B][].
- Past exam questions.
- [Textbook][] exercises.

### Quizzes

**Quizzes** are written and compiled in LaTeX using the course's stylesheet in
the course materials repository.

### Web text

**Web text** can be composed directly in the `index.md` Markdown file.
Additional Markdown or HTML files can be included in the lab directory and will
also be copied over to the final compiled website.

- [Kramdown](https://kramdown.gettalong.org/syntax.html) is the current
  Markdown engine used for the website. Kramdown supports additional syntax for
  features such as [definition lists][] and [math expressions][] rendered in
  [KaTeX][].

[definition lists]: https://kramdown.gettalong.org/syntax.html#definition-lists
[math expressions]: https://kramdown.gettalong.org/syntax.html#math-blocks
[KaTeX]: https://khan.github.io/KaTeX/

- The [Online Java Visualizer][] can be embedded by including the
  `java_visualizer.html` template. Usage example is documented in
  `_includes/java_visualizer.html`.

[Online Java Visualizer]: https://cscircles.cemc.uwaterloo.ca/java_visualize/

- Coding exercises are stored in the course materials repository alongside the
  autograder, tests, and solutions. Skeleton code is distributed to students
  separately through the skeleton repository.

  Coding exercise material can be found in past [CS 61BL][] labs, and more
  recent [CS 61B][] labs, homeworks, and even projects (such as Deques). Some
  of the activities normally thought of as take-home activities like building
  Deques and testing code is formally allocated time in CS 61BL lab.

### Assessments

**Assessments** are small Gradescope online student submission assignments
intended to help students verify mastery of course material and content. The
assessment can contain a variety of different fields and response types,
including short answer, free response, multiple choice, and select-all.

As a learning tool, students can resubmit their assessment as many times as
they like, same as coding exercises in lab. The questions aren't designed to be
particularly difficult, but they do require a working understanding of the lab
material up to that point.

Assessment material can be found from past [CS 61BL][] labs, as well as study
guide and in-lecture questions from the latest offering of [CS 61B][].

### Discussion

**Discussion** is an activity that "encourages the evaluation and refinement
regarding design"[^1]. These smaller group discussions are reminiscent of the
experience students would normally get in standard discussion sections, but in
smaller groups and focused in on their current progress and understanding of
the lab material, rather than operating separately.

Discussion material can be found in past [CS 61B][] discussions, [guerrilla][],
and [CSM 61B][] worksheets.

Students found the following kinds of questions particularly beneficial[^2]:

**Collaborative response**
- Supply a solution to an exercise with several "right" answers.
- Supply a suggestion for understanding a given topic or technique.
- Explain how you got an answer.

**Discussion**
- Comment on mistakes you made.
- Suggest tips for understanding a given topic or technique.
- Explain productive techniques for understanding larger programs.

[^1]: https://people.eecs.berkeley.edu/~clancy/ucwise/CS_Ed.pdf
[^2]: https://dl.acm.org/citation.cfm?id=611951

### Reflection

**Reflection** is an activity rarely done by students, but a practice we should
add to the labs where possible. These questions will need to be generated fresh
from the surrounding lab context. Another good place to integrate these
activities is in the self-assessment or the quiz where we can provide targeted
feedback and support students in their reflection.
