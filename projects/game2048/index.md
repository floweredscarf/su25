---
layout: page
title: "Project 0: 2048"
tags: [Project]
released: true
searchable: true
---

## [FAQ](faq.md)

This assignment has an [FAQ page](faq.md).

## Introduction

### Due Dates

Project 0 Checkpoint is worth 1 point and due **Thursday, June 20th, 11:59pm**.

We encourage everyone to threat the project as if it is officially due **Friday, June 21st, 11:59pm**. We host office hours, project parties, and answer questions on Edstem Monday through Friday.

We are allowing everyone to turn in the project as late as **Sunday, June 23rd, 11:59pm**. However, understand that over the weekend there is **no** office hour or project party support, and limited Edstem support.

For turning in the project after Sunday, please see our [lateness policy][].

### Learning Goals

The goal of this project is to give you a crash course in Java. Since CS 61BL
is not intended to be a course about Java, we will be moving quickly, learning
fundamental aspects of the Java language in just two weeks.

Before starting this project, we are assuming that you either have prior Java
experience, or have done the first few labs and also (ideally) completed [Java
Crash Course][]. In addition, [Chapter 1][] of our online
textbook can also be of help if you'd like a refresher on the material, or if
you find yourself stuck anywhere.

[Java Crash Course]: ../../java/index.md
[Chapter 1]: https://cs61b-2.gitbook.io/cs61b-textbook/1.-introduction
[lateness policy]: ../../about#project-lateness
The main purpose of this project is to help you build some comfort with the
material in these first few weeks of the course, so it's not necessary to have
a deep understanding of everything just yet.

Unlike later projects, this assignment has a great deal of scaffolding. Future
assignments will require significantly more independence. For this project, we
recommend that you work in pairs with a partner from your lab section.

### Overview

A high level overview of this project can be found at
[https://youtu.be/Xzihuj_JZBI](https://youtu.be/Xzihuj_JZBI).

The intent of this project is to give you a chance to get familiar with Java
and the various tools used in the course like the IntelliJ IDE and JUnit
for writing and running unit tests. Though you'll find many files and lots of
code in the `proj0` folder, your task only resides in `Model.java` and is
constrained to just four methods and two constructors.

{% include alert.html content="
We will be grading *solely* on whether you manage to get your program to work
(according to our tests) and to hand in the assigned pieces. **There are no
hidden tests**.
" %}

The spec for this assignment is quite long, and there is a lot of starter code.
We recommend that you read the entire spec before you start doing any
programming. It will probably feel overwhelming at first. You'll probably need
to reread sections of the spec several times to fully digest it, and some of
the later parts might not make total sense until you've finished earlier parts
of the project. Ultimately, we hope you leave this experience with a sense of
empowerment that you were able to navigate such a large task.

## Prerequisites

{% capture alertContent %} To get credit on this project please complete the [Being a good classmate assignment](https://www.gradescope.com/courses/545060/assignments/2943575/)  on Gradescope.{% endcapture %} {% include alert.html type="warning" content=alertContent%}

Before proceeding, make sure you have completed [Lab 1][] and any required
setup if using your own computer.

[Lab 1]: ../../labs/lab01/index.md

## Partnerships

If you're working with a partner make sure you have submitted the 
[partner registration][] form and read through the [partnership guide](../../guides/partnership-guide.md) so
that your submission will not be flagged by the cheating detection software.

[partner registration]: https://beacon.datastructur.es/partnerships/

The above link will give you the ability to create a partnership.

## Getting the Project Files

Now, as with the Labs, follow the [assignment workflow](../../guides/assignment-workflow.md), make sure you have the latest copy of the skeleton files and Intellij set up correctly. 
If you have everything set up correctly your Intellij window should look similar to the screenshot below:
![Project 0 Intellij](img/Intellij_proj0.png)

## Project Background

### The 2048 Game

You've probably seen and perhaps played the game "2048," a single-player
computer game written by Gabriele Cirulli, and based on an earlier game "1024"
by Veewo Studio (see his
[on-line version of 2048](http://gabrielecirulli.github.io/2048)).

In this project, you'll be building the core logic of this game. That is,
we've already put together all the GUI code, handle key-presses, and a ton
of other scaffolding. Your job will be to do the most important and interesting
part.

Specifically, you will fill out 4 methods in the `Model.java` file which governs what
happens after certain key-presses from the user and you will create the
constructors that set the starting state.

The game itself is quite simple. It's played on a $$4\times 4$$ grid of squares,
each of which can either be empty or contain a tile bearing an integer--a
power of 2 greater than or equal to 2. Before the first move, the application
adds a tile containing either 2 or 4 to a random square on the initially empty
board. The choice of 2 or 4 is random, with a 75% chance of choosing 2 and a
25% chance of choosing 4.

The player then chooses a direction via their arrow keys to *tilt* the board:
north, south, east, or west. All tiles slide in that direction until there is
no empty space left in the direction of motion (there might not be any to start
with). A tile can possibly *merge* with another tile which earns the player
points.

The below GIF is an example to see what the result of a few moves looks like.

![2048 Examples](img/example-2048.gif)

Here are the full rules for when merges occur that are shown in the image above.

1.  Two tiles of the same value *merge* into one tile containing double
the initial number.

2.  A tile that is the result of a merge will not merge again on that tilt. For
example, if we have `[X, 2, 2, 4]`, where `X` represents an empty space, and we
move the tiles to the left, we should end up with `[4, 4, X, X]`, not `[8, X, X, X]`.
This is because the leftmost 4 was already part of a merge so should not merge
again.

3.  When three adjacent tiles in the direction of motion have the same number,
then the leading two tiles in the direction of motion merge, and the trailing
tile does not. For example, if we have `[X, 2, 2, 2]` and move tiles left,
we should end up with `[4, 2, X, X]` not `[2, 4, X, X]`.

As a corollary of these rules, if there are four adjacent tiles with the same
number in the direction of motion, they form two merged tiles. For example, if
we have `[4, 4, 4, 4]`, then
if we move to the left, we end up with `[8, 8, X, X]`. This is because
the leading two tiles will be merged as a result of Rule 3, then the trailing
two tiles will be merged, but because of Rule 2 these merged tiles (8 in our example) will
not merge themselves on that tilt.
You'll find applications of each of the 3 rules listed above in the animated GIF above,
so watch through it a few times to get a good understanding of these rules.

To test your understanding, you should complete this
[Google Form quiz](https://forms.gle/fiP89yrQJmTpuzs79).
This quiz (and the following quizzes) are completely optional (i.e. not graded)
but **highly suggested** as it'll find any conceptual misunderstandings you might have
about the game mechanics. You may attempt this quiz as many times as you'd like
and can optionally email the results to yourself.

If the tilt did not change the board state, then no new tiles will be randomly
generated. Otherwise, a single randomly generated tile will be added to the
board on an empty square. Note: Your code will not be adding any new tiles! We've
already done that part for you.

You might also notice that there is a field "Score" at the bottom of the screen
that is being updated with each move. The score will not always change every
move, but only when two tiles merge. Your code will need to update the score.

Each time two tiles merge to form a larger tile, the player earns the number of
points on the new tile. The game ends when the current player has no available
moves (no tilt can change the board), or a move forms a square containing 2048.
Your code will be responsible for detecting when the game is over.

The "Max Score" is the maximum score the user
has achieved in that game session. It isn't updated until the game is over, so
that is why it remains 0 throughout the animated GIF example.

### Assignment Philosophy

A video introduction to (a slightly different version of) this project can be
found at
[https://youtu.be/3YbIOga6ZdQ](https://youtu.be/3YbIOga6ZdQ).

In this project, we're giving you a TON of starter code that uses many
pieces of Java syntax that we have not covered yet, and even some syntax
that we'll never cover in our class.

The idea here is that in the real world, you'll often work with codebases
that you don't fully understand and will have to do some tinkering and
experimentation to get the results you want. Don't worry, when we get to
project 1 next week, you'll have a chance to start from scratch.

### Program Design

Below, we describe some of the ideas behind the architecture of the
given skeleton code, which was created by Paul Hilfinger. It is not
important that you understand every detail, but you might find it interesting.

The skeleton exhibits two *design patterns* in common use:
the Model-View-Controller Pattern (MVC), and the Observer Pattern.

The MVC pattern divides our problem into three parts:

-   The **model** represents the subject matter being represented and acted
    upon -- in this case incorporating the state of a board game and the
    rules by which it may be modified. Our model resides in the `Model`,
    `Side`, `Board`, and `Tile` classes. The instance variables of `Model` fully
    determine what the state of the game is. Note: You'll only be
    modifying the `Model` class.
-   A **view** of the model, which displays the game state to the user.
    Our view resides in the `GUI` and `BoardWidget` classes.
-   A **controller** for the game, which translates user actions into
    operations on the model. Our controller resides mainly in the `Game` class,
    although it also uses the GUI class to read keystrokes.

The MVC pattern is not a topic of 61B(L), nor will you be expected to know or
understand this design pattern on exams or future projects.

The second pattern utilized is the "Observer pattern". Basically this means
that the **model** doesn't actually report changes to the **view**. Instead,
the **view** *registers* itself as an *observer* of the `Model` object. This is
a somewhat advanced topic so we will provide no additional information here.

### Classes

We'll now go over the different classes that you will interact with.

#### `Tile`

This class represents numbered tiles on the board. If a variable of type `Tile`
is `null`, it's treated as an empty tile on the board. You will not need to
create any of these objects, though you will need have an understanding of them
since you will be using them in the `Model` class. The only method of this class
you'll need to use is `.value()` which returns the value of the given tile. For
example if `Tile t` corresponds to a tile with the value 8, then `t.value()`
will return `8`.

#### `Side`

The `Side` class is a special type of class called an `Enum`. An enum
is similar but has restricted functionality. Specifically, enums may take on only one of a finite
set of values. In this case, we have a value for each of the 4 sides: `NORTH`,
`SOUTH`, `EAST`, and `WEST`. You will not need to use any of
the methods of this class nor manipulate the instance variables.

Enums can be assigned with syntax like `Side s = Side.NORTH`. Note that rather
than using the `new` keyword, we simply set the `Side` value equal to one of
the four values. Similarly if we have a function like `public static void
printSide(Side s)`, we can call this function as follows:
`printSide(Side.NORTH)`, which will pass the value `NORTH` to the function.

If you're curious to learn more about Java enums, see
<https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html>.

#### `Model`

This class represents the entire state of the game. 
It has instance variables for the state of the board (i.e.
where all the `Tile` objects are, what the score is, etc) as well as a variety
of methods. You will be responsible for writing two constructors: an empty,
base constructor that creates an empty Board and a copy constructor, which
creates a Board from a supplied setting. One of the challenges when you get to
the fourth and final task of this project (writing the `tilt` method) will be to
figure out which of these methods and instance variables are useful.

#### `Board`

This class represents the board of tiles itself. It has three methods that you'll
use: `setViewingPerspective`, `tile`, and `move`. Optionally, for experimentation,
you can use `getRandomNonNullTile`.

## Your Assignment

Your job for this project is to modify and complete the `Model` class,
specifically the two constructors, `emptySpaceExists`, `maxTileExists`,
`atLeastOneMoveExists` and `tilt` methods. Everything else has been
implemented for you. We recommend completing them in this order. The constructors and first
two methods are relatively straightforward. The third (`atLeastOneMoveExists`) is
harder, and the final method `tilt` will probably be quite difficult. We
anticipate that `tilt` will take you longer than the other methods. The first three
methods will handle the game over conditions, and the final method `tilt` will
modify the board after key-presses from the user. You can read the very
short body of the `checkGameOver` method to get an idea of how your methods
will be used to check if the game is over.

## The `Model` Class

You'll start by completing the `Model` class.

All of the numbers for this project will be integers. We'll go over what exactly
an integer is later in the course, but for now, think of it as a whole number, so
`int x = 3`.

### Instance Variables

Begin by reading through the Model class and understanding the role of the associated
instance variables.

{% include alert.html type="warning" content="
**You should NOT modify the name or type of the provided instance variables in
Model.java, but you may add any additional instance variables of any type that
you desire.**
" %}

### Constructors

#### `public Model(int size)`

{% capture alertContent %}
**Please be aware that the constructor tests provided to you are (unfortunately)
not comprehensive.** This means there is a possibility you might pass these tests while
missing certain elements that need to be initialized or otherwise set up.

Take this as an opportunity to consider the "real world" implications of testing -- our
understanding of the correctness of our program is entirely limited by the robustness of our
tests! We will *not* be updating the AG, meaning the credit you receive from
these tests will not change, but
in order to get more familiar with testing (and to make your testing output more helpful)
consider which elements of the constructor are and are not being tested (what information
is being passed in) and how this could affect later methods!
{% endcapture %}
{% include alert.html type="danger" content=alertContent %}

This constructor should create a board of size `size` and set the instance
variables for the start of the game.

Note: We've designed the `Board` class using a special keyword `private` that disallows
you from using the instance variables of `Board` from outside `Board`. For
example, if you try to access `_board.values[0][0]`, this will not work. This is a
good thing! It forces you to learn to use the `tile` method, which you'll use
throughout the rest of the project. You can open `Board.java` to see the `tile`
method and `Tile.java` to get an understanding of the `.value()` function.

Try opening `TestEmptyConstructor` and run the tests. You should
see all 4 tests fail due to a `NullPointerException` in `Model::tile`. After
you've correctly written the `Model(int size)` constructor, all 4 tests in
`TestEmptyConstructor` should pass.

{% include alert.html content="
Note: For parameter names which are the same as the
corresponding instance variable name, make
sure to [use the `this` keyword][using this keyword] appropriately.

[using this keyword]: https://docs.oracle.com/javase/tutorial/java/javaOO/thiskey.html
" %}

#### `public Model(int[][] rawValues, int score, int maxScore, boolean gameOver)`

This constructor creates a new instance of the game with a `Board` state that
reflects the given `rawValues` array. The instance variables of the object
should be updated based on the provided input.
Note that `rawValues` is in row major form, meaning it is indexed (row, column)
and (0, 0) refers to the bottom left corner.

This constructor is vital for our testing files! Once you've completed it,
check out the provided testing files to see where it is used (hint, look at the
first method of `TestEmptySpace.java`).

After you've written the constructor, the tests in `TestArgsConstructor.java`
should pass.

If you pass this test, you're ready to move on to the next step. **Do not
proceed until you have passed this test.**

### Methods: `Board` Information

Now, let's look at the first three methods, which we can use to check certain
properties of the board.

#### `public static boolean emptySpaceExists(Board b)`

This method should return true if any of the tiles in the given board are null.
**You should NOT modify the Board.java file in any way for this project**. For
this method, you'll want to use the
`tile(int col, int row)` method of the `Board` class. No other board methods
are necessary.

After you've written the method, the tests in `TestEmptySpace.java` should pass.

A quick overview of how to get started writing this method is provided in
[this video](https://youtu.be/13rdFndFNXc).

#### `public static boolean maxTileExists(Board b)`

This method should return true if any of the tiles in the board are equal to the
winning tile value 2048. Note that rather than hard coding the constant 2048 into your
code, you should use MAX_PIECE, which is a constant that is part of the `Model` class.
In other words, you shouldn't do `if (x == 2048)` but rather `if (x == MAX_PIECE)`.

Leaving in hard coded numbers like `2048` is a bad programming practice sometimes
referred to as a "[magic number][]". The danger of such magic numbers is that if you change
them in one part of your code but not another, you might get unexpected results. By
using a variable like `MAX_PIECE` you can ensure they all get changed together.

[magic number]: <https://en.wikipedia.org/wiki/Magic_number_(programming)>

After you've written the method, the tests in `TestMaxTileExists.java` should pass.

#### `public static boolean atLeastOneMoveExists(Board b)`

This method is more challenging. It should return true if there are any valid moves. By a
"valid move", we mean that if there is a button (UP, DOWN, LEFT, or RIGHT) that a user can
press while playing 2048 that causes at least one tile to move, then such a keypress is
considered a valid move.

Think about what properties of the board state would allow at least on tile to
move. Conversely, what properties of the board state would mean that there
are no moves left?

<details markdown="block">
  <summary markdown="block">
##### Existence of Valid Moves - Explanation
  </summary>
There are two ways that there can be valid moves:

 1. There is at least one empty space on the board.
 2. There are two adjacent tiles with the same value.

For example, for the board below, we should return true because there is at
least one empty space.

```text
|   2|    |   2|    |
|   4|   4|   2|   2|
|    |   4|    |    |
|   2|   4|   4|   8|
```

For the board below, we should return false. No matter what button you press in
2048, nothing will happen, i.e. there are no empty spaces, and there are
no two adjacent tiles with equal values.

```text
|   2|   4|   2|   4|
|  16|   2|   4|   2|
|   2|   4|   2|   4|
|   4|   2|   4|   2|
```

For the board below, we would return true since a move to the right or left
would merge the two 64 tiles, and also a move up or down would merge the 32
tiles. Or in other words, there exist at least two adjacent tiles with equal
values.

```text
|   2|   4|  64|  64|
|  16|   2|   4|   8|
|   2|   4|   2|  32|
|   4|   2|   4|  32|
```

</details>

After you've written the method, the tests in `TestAtLeastOneMoveExists.java`
should pass.

### Methods: `tilt`

The fourth and final part of the assignment is to implement `tilt`. You should
only start this method once you're passing all the tests in `TestEmptySpace`,
`TestMaxTileExists` and `TestAtLeastOneMoveExists`.

{% include alert.html type="warning" content="
`tilt` is a complex method! You will likely make multiple attempts at it
before implementing it completely correctly. Don't worry if your first
attempts don't pan out. Those attempts are **not** useless, and **not** wasted
effort -- learning that certain approaches don't work is just
as valuable as finding the one that ultimately does. Use your attempts as
learning opportunities: why did this implementation fail, and how can I improve
it next time?
" %}

Before we start talking about how `tilt` should work, let's try running the game.

Open the `Main` class and click the run button. You should see the game pop up.
Try pressing the arrow keys. You should see that nothing is happening. This is because
you have not implemented the `tilt` method yet. When you're done writing `tilt`,
you'll be able to play the game.

#### `public boolean tilt(Side side)`

The tilt method does the work of actually moving all the tiles around. For example,
if we have the board given by:

```text
|   2|    |   2|    |
|   4|   4|   2|   2|
|    |   4|    |    |
|   2|   4|   4|   8|
```

And press up, `tilt` will modify the `_board` instance variable so that the
state of the game is now:

```text
|   2|   8|   4|   2|
|   4|   4|   4|   8|
|   2|    |    |    |
|    |    |    |    |
```

In addition to modifying the board, two other things must happen:

1.  The `_score` instance variable must be updated to reflect the total value of all tile
    merges (if any). For the example above, we merged two 4s into an 8, and two 2s into a 4, so the
    score should be incremented by 8 + 4 = 12.
2.  If anything about the board changes, we must set the `changed` **local variable**
    to `true`. That's because at the end of the skeleton code for `tilt`, you can
    see we call a `setChanged()` method: this informs the GUI that there is something
    to draw. You will not make any calls to `setChanged` in the code you write; you
    will only modify the `changed` local variable.

All movements of tiles on the board must be completed using the `move` method provided
by the `Board` class. All tiles of the board must be accessed using the `tile` method
provided by the `Board` class. **Due to some details in the GUI implementation,
you should only call `move` on a given tile once per call to `tilt`**. We'll discuss
this constraint further in the Tips section of this document.

A quick overview of how to get started writing this method is provided in
[this video](https://youtu.be/abFbbK1QY2k).

### `tilt` Implementation Guide

We strongly recommend starting by thinking only about the up direction, i.e. when
the provided `side` parameter is equal to `Side.NORTH`. To support you in this,
we provide a `TestUpOnly` class that has four tests: `testUpNoMerge`,
`testUpBasicMerge`, `testUpTripleMerge`, and `testUpTrickyMerge`. You'll note
that these tests involve only a single move up.

When considering how to implement the up direction, consider the following:

In a given column, the piece on the top row (row 3) stays put. The piece on
row 2 can move up if the space above it is empty, or it can move up one if
the space above it has the same value as itself. In other words,
when iterating over rows, it is safe to iterate starting from row 3 down, since
there's no way a tile will have to move again after moving once.

While this sounds like it's not going to be very hard, it really is. Be ready
to bust out a notepad and work out a bunch of examples. Strive for elegant code, though
elegance is hard to achieve with this problem. We strongly recommend the creation
of one or more helper methods to keep your code clean.
For example, you might have a helper function that processes a single column of
the board, since each column is handled independently. Or you might have a helper
function that can return a desired row value.

Reminder: You should only call `move` on a given tile once. In other words, suppose
you have the board below and press up.

```text
|    |    |    |    |
|    |    |    |    |
|    |    |    |    |
|    |    |    |   2|
```

One way we could accomplish this would be as follows:

```java
Tile t = board.tile(3, 0);
board.move(3, 1, t);
board.move(3, 2, t);
board.move(3, 3, t);
setChanged();
return true;
```

However, the GUI will get confused because the same tile is not supposed to
move multiple times with only one call to setChanged. Instead, you'll need to
complete the entire move with one call to `move`, e.g.

```java
Tile t = board.tile(3, 0);
board.move(3, 3, t);
```

{% include alert.html content="
In a sense, the hard part is figuring out which row each tile should end up on.
" %}

To test your understanding, you should complete this
[Google Form quiz](https://forms.gle/2fU5VZbyAr5CgWFk7).
This quiz will not factor into your CS61BL grade.

To know when you should update the score, note that the `board.move(c, r, t)` method
returns `true` if moving the tile `t` to column `c` and row `r` would replace
an existing tile (i.e. you have a merge operation).

To make matters seemingly much worse, even after you get `tilt` working for the
`NORTH` direction, you'll have to do the same thing for the other
three directions. If you do so naively, you'll get a *lot* of repeated,
slightly modified code, with ample opportunity to introduce obscure errors.

For this problem, we've given away a clean solution. This will allow you to
handle the other three directions with only two additional lines of code!
Specifically, the `Board` class has a `setViewingPerspective(Side s)` function that will
change the behavior of the `tile` and `move` classes so that they *behave as if
the given side was `NORTH`*.

For example, consider the board below:

```text
|    |    |    |    |
|  16|    |  16|    |
|    |    |    |    |
|    |    |    |   2|
```

If we call `board.tile(0, 2)`, we'll get `16`, since 16 is in column 0, row 2. If we call
`board.setViewingPerspective(s)` where `s` is `WEST`, then the board will behave as if WEST
was NORTH, i.e. you had your head turned 90 degrees to the left, as shown below:

```text
|    |    |  16|    |
|    |    |    |    |
|    |    |  16|    |
|   2|    |    |    |
```

In other words, the `16` we had before would be at `board.tile(2, 3)`. If we were to call
`board.tilt(Side.NORTH)` with a properly implemented `tilt`, the board would become:

```text
|   2|    |  32|    |
|    |    |    |    |
|    |    |    |    |
|    |    |    |    |
```

To get the board to go back to the original viewing perspective, we simply call
`board.setViewingPerspective(Side.NORTH)`, which will make the board behave as if
`NORTH` was `NORTH`. If we do this, the board will now behave as if it were:

```text
|    |    |    |    |
|  32|    |    |    |
|    |    |    |    |
|   2|    |    |    |
```

Observe that this is the same thing as if you'd slid the tiles of the original board
to the `WEST`.

Important: Make sure to use `board.setViewingPerpsective` to set the perspective back to `Side.NORTH`
before you finish your call to `tilt`, otherwise weird stuff will happen.

To test your understanding, try this third and final ungraded
[Google Form quiz](https://forms.gle/mJDwER46qkRAV6bc7).
You may attempt this quiz as many times as you'd like.

## Tests Overview

While in the future we expect you to be able to test your own programs, for
this project we've given you the full test suite.

The tests are split over 7 files: `TestEmptyConstructor`, `TestArgsConstructor`, `TestEmptySpace`, `TestMaxTileExists`,
`TestAtLeastOneMoveExists`, `TestUpOnly`, and `TestModel`. Each file tests a
specific portion of the code with the exception of `TestModel` which tests all
the things you write in coordination with each other. Such a test is called an
*integration test* and are incredibly important in testing. While unit tests
run things in isolation, integration tests run things all together and are
designed to catch obscure bugs that occur as a result of the interaction
between different functions you've written.

So do not attempt to debug `TestModel` until you're passing the rest of the
tests! In fact, the order in which we discuss the tests is the order you should
attempt them in.

We'll now take a look at each of these tests and show you how to read the error
messages.

### `TestConstructors`

These two testing files contain tests to assess the correctness of your constructor
implementations.

These tests create a `Model` instance by invoking the associated constructor. They then loop
through the newly created object to ensure 1. the object exists and 2. the object contains the
data we expect it to.

### `TestEmptySpace`

These tests will check the correctness of your `emptySpaceExists` method. Here
is what the error message would look like if you failed tests:

![TestEmptySpace all fail](img/test-empty-space-all-fail.png)

On the left-hand side, you'll see the list of all tests that were run. The
yellow X means we failed a test while the green check means we passed it. On
the right, you'll see some useful error messages. To look at a single test and
its error message in isolation, click the test on the left-hand side. For
example, let's say we want to look at the `testCompletelyEmpty` test.

![testCompletelyEmpty](img/test-completely-empty.png)

The right-hand side is now the isolated error message for this test. The top
line has a useful message: `"Board is full of empty space"` followed by a
String representation of the board. You'll see that it's clearly empty, yet
our `emptySpaceExists` method is returning `false` and causing this test to
fail. The javadoc comment at the top of the code for the test also has some
useful information in case you're failing a test.

You can navigate to the test method by clicking on the blue text, in this case,
`TestEmptySpace.java:27`.

### `TestMaxTileExists`

These tests will check the correctness of your `maxTileExists` method. The error
messages will be similar to those for `TestEmptySpace`, and you can still click
on each individual test to look at them in isolation. Remember that your
`maxTileExists` method should **only** look for the max tile and not anything
else (i.e. shouldn't look for empty space). If yours does, you will not pass
all of these tests.

### `TestAtLeastOneMoveExists`

These tests will check the correctness of your `atLeastOneMoveExists` method.
The error messages are similar to the above two. Since the
`atLeastOneMoveExists` method depends on the `emptySpaceExists` method, you
shouldn't expect to pass these tests until you are passing all of the tests
in `TestEmptySpace`.

### `TestUpOnly`

These tests will check the correctness of your `tilt` method, but only in the
up (`Side.NORTH`) direction. The error messages for these are different, so
let's look at one. Say we run all the tests, notice we're failing the
`testUpTrickyMerge` test. After clicking that test, we'll see this:

![testUpTrickyMerge Error Message](img/test-up-error-msg.png)

The first line tells us the direction that was tilted (for these tests it'll
always be North), then what your board looked like before the tilt, then what
we expected the board to look like, and finally what your board actually looked
like.

You'll see that we're merging a tile twice on a single call to tilt which
results in a single tile with value 8 instead of two tiles both with value 4.
As a result, our `score` is also incorrect as you can see in the bottom of the
representation of the board.

For other tests it might be difficult to notice the difference between the
expected and actual boards right away; for those, you can click the blue
`Click to see difference` text at the very bottom of the error message to
get a side-by-side comparison of the expected (on the left) and actual (on the
right) boards in a separate window. Here is what it looks like for this test:

![testUpTrickyMerge Comparison](img/comparison.png)

Debugging these can be a bit tricky because it's hard to tell what you're doing
wrong. First, you should identify which of the 3 rules listed above you're
violating. In this case, we can see that it's rule 2 since a tile is merging
more than once. The javadoc comments on these methods are good resources for
this as they specifically lay out what rule/configuration they're testing. You
might also be able to figure out what rule you're violating by just looking at
the before and after boards. Then, comes the tricky party: refactoring your
existing code to properly account for that rule. We suggest writing out on pen
and paper the steps your code takes so you can first understand why your board
looks the way it does, then coming up with a fix. These tests only call `tilt`
once, so you don't need to worry about debugging multiple calls to tilt.

### `TestModel`

These tests will check the correctness of everything together. The majority of
these tests are similar to the tests in `TestUpOnly` as they only call `tilt`
once, but we also have tests for `gameOver` (which test all of your
`emptySpaceExists`, `maxTileExists`, and `atLeastOneMoveExists` methods
together) and tests that make many calls to `tilt` in a sequence.

The error messages for these look exactly the same as those in `TestUpOnly`,
and the javadoc comments are similarly useful in figuring out what the test
is testing.

Don't worry about the actual code for the tests: you're not required to
understand or modify any of these, though you're welcome to read through and
get an idea for how test writing works and even add some of your own if you
are feeling really ambitious.

## Submission and Version Control

As always, make sure to save, add, commit, and push all of your java files.

We said this in lab 1, but it is so important that we will say it again here:

{% include alert.html typ="danger" content="
It is important that you commit work to your repository *at frequent
intervals*. Version control is a powerful tool for saving yourself when you
mess something up or your dog eats your project, but you must use it regularly
if it is to be of any use.
" %}

The command `git status` will tell you what files you have modified,
removed, or possibly added since the last commit.  It will also tell you
how much you have not yet sent to your GitHub repository.

The typical commands would look something like this:

```shell
git status                          # To see what needs to be added or committed.
git add <filepath>                  # To add, or stage, any modified files.
git commit -m "Commit message"      # To commit changes.
git push                            # To get the work to GitHub or other remote.
```

Then you can carry on working on the project until you're ready to commit and
push again, in which case you'll repeat the above. It is in your best interest
to get into the habit of comitting frequently with informative commit messages
so that in the case that you need to revert back to an old version of code, it
is not only possible but easy. We suggest you commit every time you add a
significant portion of code or reach some milestone (passing a new test, for
example).

Once you've pushed your code to GitHub (i.e. ran `git push`), then you can
submit to Gradescope. Keep in mind that the version of code that Gradescope uses is the most recent commit
you've pushed, so if you do not run `git push` before you submit on Gradescope,
old code will be tested instead of the most recent code you have on your
computer. To see the code that was submitted to Gradescope, you can click on
the "code" tab:

![Gradescope code](img/gradescope_code.png)

If you pass all the tests, you get all the points. Hoorah!

You may submit every half an hour. If you have multiple submissions,
select the one you wish for us to grade by pressing activate. One partner should
submit and add the other to the submission. 

{% include alert.html content="
We've set up a file called `.gitignore` that will
restricts you to only adding `.java` and `.txt` files.

This is to keep your repository small so that the autograder moves quickly.
We ask that you do not force-add other types of files to your repository,
especially if they are large. The autograder has failed in the past when testing
extremely large repositories.
" %}

## Ungraded Quiz Index

Here is an index of the ungraded quizzes in this spec:

1.  [2048 Basic Mechanics](https://forms.gle/fiP89yrQJmTpuzs79), in
    [The 2048 Game](#the-2048-game)
2.  [2048 Move Calls](https://forms.gle/2fU5VZbyAr5CgWFk7), in the first half of
    [`tilt` Implementation Guide](#tilt-implementation-guide).
3.  [2048 SetViewingPerspective](https://forms.gle/mJDwER46qkRAV6bc7), in the
    second half of [`tilt` Implementation Guide](#tilt-implementation-guide).

## Getting Help

While a little struggle and debugging is normal and even healthy, if you find
yourself stuck for hours with no progress after doing all of the suggestions
above, please get help from staff!

You can get help in CS 61BL by coming to lab, or by making a Gibugs post on the course Ed.

Remember that TAs have many other students to help during lab, and may not be
able to spend a large amount of time with you. **As a rule of thumb, try to
limit your requests to 10 minutes.**

To speed things up, we ask that you bring a clear problem that you can
voice to a TA rather than just telling us a test isn't passing. For example, if
a test isn't passing, figure out which part isn't passing and why there is a
discrepancy. Maybe the `score` isn't updating properly, or perhaps things don't
merge the way they should be. This helps speed things up and might even lead
you to find your own bug.

Remember to search for your issue in the [FAQ](faq.md) before making a post!

## Acknowledgements

This project was created by Professors Paul Hilfinger and Josh Hug. It was
modified by Omar Khan and Zephyr Omaly.
