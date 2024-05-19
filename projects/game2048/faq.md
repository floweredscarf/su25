---
layout: page
title: "FAQ - Project 0: 2048"
categories: proj
released: false
searchable: true
---

The instructors will add to this page as you all ask questions about the
project! If you have a question that isn't answered here, ask in lab or
by [submitting a ticket](../../guides/ticketing-system.md)!

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
[Lab 1](../../labs/lab01/index.md#task-creating-projects).

### I pass all the tests, but when I play the game, I can't make any moves.

If your computer was bought outside the US, this is a known issue that was
fixed after the initial release of the project. Merge the skeleton again
to get the update!

## Getting Started

### I haven't modified anything yet, but I'm getting a `NullPointerException`

This is expected. Until you implement a specific piece of the `Model`
constructors, you will get `NullPointerException`s when you run the tests
or `Main::main`.

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

## `Model` Constructors

### How do we refer to an instance variable in our constructor?

You can simply refer to it by name, as long as the instance variable has a
different name from a provided argument. Generally, we name instance variables
starting with an underscore to avoid this. If they have a name conflict, then
you'll have to use the `this.` prefix to specify that we're talking about the
instance variable. For example:

```java
public class Tester {
    int _test;
    public Tester(int test) {
        // The underscore prevents a name conflict
        _test = test
    }
}
```

vs.

```java
public class Tester {
    int test;
    public Tester(int test) {
        // The name conflict means we *must* use this.test to be specific
        this.test = test
    }
}
```

<cite>Paraphrased from Shreyas Kallingal.</cite>

## `TestAtLeastOneMoveExists`

### I pass everything in `TestAtLeastOneMoveExists` except for `testAnyDir`. If my code works for each direction, why would it break for any direction?

In this test, the relevant moves are on the border (specifically, the
upper-right corner). If you are looping over the coordinates in the board,
make sure that you are considering *every possible comparison*. For example,
your boundary condition in the for loop may be off by one.

## `TestUpOnly`

### I don't understand why the score doesn't change in "`TestUp`: Up merge" (`testUpBasicMerge`), or in other tests. Is this a bug with the provided tests / autograder tests?

This test and many others use the `checkModel` function, which has the
following line of code:

```java
Model expected = new Model(values, score, maxScore, false);
```

Even though this is a function that we use to construct the "expected" state,
**it calls a `Model` constructor you wrote**. If your `Model` constructor is
incomplete, then the tests that rely on that constructor will have
**incorrect expectations**. Take a look at the warning in the
[constructors section of the spec](index.md#constructors) for more information.

In this specific case, make sure that your 4-argument `Model` constructor
passess all the tests in `TestArgsConstructor`.

## `tilt`

### For `tilt`, my code works in the up direction, but doesn't in any of the other directions.

There are two possibilities here:

1.  Make sure that you're setting the viewing perspective, and *resetting* it
    back to north after you're done.
1.  Make sure that you don't use `Tile::row` or `Tile::col`. The `Tile` class
    doesn't know anything about the `Board`'s `viewPerspective`!

### Am I allowed to modify `Tile`? I want to store whether a tile has been merged or not, to prevent multiple merges.

Unfortunately, any modifications you make to other files will not make it to
the autograder. This includes modifications to `Tile.java`.

Rather than storing this information as an instance variable of the tile,
consider the following question. Let's assume that we're handling `tilt` column
by column. If we process a tile that merges and ends on row R, then what is
the highest row that any lower tile could end on?
