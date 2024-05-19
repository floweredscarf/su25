---
layout: page
title: IntelliJ WTFS
author: Brandon Lee
tags: [Guide]
released: true
searchable: true
---

This document is intended to help you through frequently encountered weird
technical failure scenarios (WTFS) in IntelliJ. It will be populated as
questions arise.

## I can't run my Java files

![IntelliJ Import Error](img/intellij-import-error.png)

If your files look like this then you might have opened a subdirectory of the assignment.
When starting an assignment for the first time, make sure you **open** the whole assignment.
After you make sure you have opened the whole assignment, right-click on the folder for the assignment, e.g. `lab02`, then **Mark as -> Sources Root**.

## Variables show up as red in IntelliJ

![IntelliJ Missing Jar Files](img/intellij-missing-javalib.png)

This means that you forgot to add `library-su22` as a library for this project!
Every time you start a new assignment you must re-add the `.jar` files. To do this,
under the "File" menu, choose "Project Structure" and "Libraries", and then add
the `library-su22` inside your repo.

## Everything looks right but it still doesn't work!

Sometimes the easiest thing is to simply do it all over again. Even if you know
you just did everything correctly, starting over very often just fixes the
problem. First close the project (from the "File" menu, choose "Close Project")
and then reopen the project from the beginning.
