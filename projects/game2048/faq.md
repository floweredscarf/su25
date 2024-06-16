---
layout: page
title: "FAQ - Project 0: 2048"
categories: proj
released: true
searchable: true
---

## Setup

### In IntelliJ, I get "release version 18 not supported"

Go into File > Project Structure > Project Settings > Project, and make sure
that your Language level is set to 17. Additionally, head over to Modules
and make sure that the `proj0` Language level is 17.

### I can't use `javac` to compile and run my project, because it tells me it can't find symbols

`javac` is much more complicated to use for this larger project that uses
libraries and packages.

We *highly* recommend using IntelliJ to work on this project. It will handle
the compilation step for you, if you've imported all the libraries (see
[Lab 1](../../labs/lab01/index.md#task-creating-projects).)

### I pass all the tests, but when I play the game, I can't make any moves.

If your computer was bought outside the US, this is a known issue that was
fixed after the initial release of the project. Merge the skeleton again
to get the update!

## Getting Started

### This seems like a lot of code to write. How do we check along the way if we're doing it correctly?

This is called testing! There are 2 main ways we can test our code: unit
testing and acceptance /
integration testing. Unit testing aims to test the individual pieces of code of
your program—generally, individual methods. Acceptance / integration testing
tests how your program as a whole works, including how classes interface with
each other and how user input is handled.

Here's the [section about testing in the spec](index.md#tests-overview).
For this project, we have provided you all the tests we'll use to grade the
assignment. You'll run these tests via JUnit. You can run each of the test
classes in IntelliJ, and it will show you which tests pass or fail, including
expected values vs. your actual output. This is very, very useful for
debugging. A general workflow would be to take a look at the tests you're
failing, understand the expected values, compare them with your actual output,
and use the debugger to walk through the test case if you're stuck. You can
even write your own tests, following the format of the provided ones! This is
good practice as we'll expect you to do this in later assignments (and you'll
have to write your own tests in the real world). Lab 4, on Monday, will
dive deeper into this, so don't worry if not all this makes sense just yet.
You'll get plenty of practice with it starting with this project though!

<cite>Paraphrased from Shreyas Kallingal.</cite>

## `atLeastOneMoveExists`

### I pass everything in `TestTask1` except for `testAnyDir`. If my code works for each direction, why would it break for any direction?

In this test, the relevant moves are on the border (specifically, the
upper-right corner). If you are looping over the coordinates in the board,
make sure that you are considering *every possible comparison*. For example,
your boundary condition in the for loop may be off by one.

## `tilt`

### I don't know how to get started on `tilt`.

Please watch [Josh's intro video to this method](https://youtu.be/abFbbK1QY2k)! However, the methods in the intro video might be different that current skeleton code since a lot changed.

### Am I allowed to modify `Tile`? I want to store whether a tile has been merged or not, to prevent multiple merges.

Unfortunately, any modifications you make to other files will not make it to
the autograder. This includes modifications to `Tile.java`.

Rather than storing this information as an instance variable of the tile,
consider the following question. Let's assume that we're handling `tilt` column
by column. If we process a tile that merges and ends on row R, then what is
the highest row that any lower tile could end on?
