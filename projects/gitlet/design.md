---
layout: page
title: "Gitlet Design Document"
categories: proj
released: true
searchable: true
---

## Design Document Guidelines

<!-- Is there a reason we don't use Google Docs? Outside of version controlling.

Because it's *so* much easier for students to collaborate on.
-->

Please use the following format for your Gitlet design document. We suggest that your design
document be written in
[Markdown](https://www.markdownguide.org/basic-syntax/), a language that allows
you to nicely format and style a text file. We provided a starting off point for your design doc in `proj2/gitlet-design.md`. 
Organize your design document in a way that will make it easy for you
or a course-staff member to read.  

## Design Overview

Summarize the design of your system. Explain the major design choices you made,
written in a manner such that an average 61BL student could take it,
re-implement your project, and achieve a grade similar to yours by following
your design. As a part of your design document, answer the following questions
about your design in number-list format:

1.  How is your `.gitlet` directory structured? What files / classes are you
    using to represent your repository state, and what information is contained
    in these files / classes?
2.  What is the process of adding a file then committing? How does your
    `.gitlet` directory change after adding; then after committing?
3.  How does your design support operations that rely on branches? You should
    explicitly account for `branch`, `checkout [branch name]`, and
    `reset`. *Note: even though branches are not part of the checkpoint, we
    strongly encourage thinking about them earlier -- you have a
    default branch, so your branch representation does actually affect your
    checkpoint implementation!*

## Serialization and Persistence

<!-- 4 commands is init, add, commit + 1 meaningful  -->

Provide three (3) distinct sequences of commands.
You must make sure to provide:

- What are the specific commands?
- What happens in the file system between each command?
  (i.e. are files created? Updated? Deleted?)
- To execute each command, what persisted information is necessary? Where do
  you get it from?
- How does your program perform the logic of the command? Describe your
  *algorithm* in detail, and the updates you make to your data structures and
  objects.
- After the command finishes, what persisted information needs to be updated
  so that future commands work appropriately?

Try to cover a variety of sequences of commands here. Feel free to abbreviate
repetitive steps, though you should lay it out explicitly at least once.

## Example

<!-- I haven't rewritten this yet. -->

To illustrate all this, we've created a
[sample design document](capers-example.md) for the Capers lab.
The format is slightly different because Capers is not Gitlet.
