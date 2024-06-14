---
layout: page # The HTML template to use to render this page.
title: "Project 1B: ArrayDeque" # Title of page.
categories: proj
released: false
toc:
    h_max: 4
---


## [FAQ](faq.md)

Each assignment will have an FAQ linked at the top. You can also access it by adding "/faq" to the end of the URL. The
FAQ for Project 1B is located
[here](faq.md).

## Introduction

In Project 1A, we built `LinkedListDeque`. Now we'll see a different
implementation of the `Deque` interface that uses a *backing array*, rather
than linked nodes.

By the end of Project 1B, you will...

-   Gain an understanding of the implementation of a backing array in
    data structures.
-   Have more experience using testing and test-driven developoment to verify
    the correctness of these data structures.

{% include alert.html content="
Check out the [Project 1B slides](https://docs.google.com/presentation/d/1kjbO8X7-i63NwQ_9wIt4HXr6APp2qc9PkghD-GO7_is/edit#slide=id.g1094ff4355_0_466) for some additional visually oriented tips.
" %}

We will provide relatively little scaffolding. In other words, we'll say what
you should do, but not how.

{% include alert.html type="danger" content="
It should (still) go without saying that you may not use any of the built-in
`java.util` data structures in your implementation! The whole point is to build
your own versions! There are a few places where you may use specific data
structures outside of tests, and we will clearly say where.
" %}

### Style

As in Project 1A, **we will be enforcing style**. You must follow the
[style guide](https://cs61bl.org/su23/guides/style-guide), or you will be penalized on the
autograder.

You can and should check your style locally with the CS 61B plugin. **We will
not remove the velocity limit for failing to check style.**

### Getting the Skeleton Files

Follow the instructions in the
[Assignment Workflow guide](https://cs61bl.org/su23/guides/assignment-workflow)
to get the skeleton code and open it in IntelliJ. For this project, we will be
working in the **`proj1b`** directory.

You see a `proj1b` directory appear in your repo with the following structure:

```sh
 proj1b
├── src
│   └── Deque.java
└── tests
    └── ArrayDequeTest.java
```
If you get some sort of error, STOP and either figure it out by carefully
reading the [git WTFs](https://cs61bl.org/su23/guides/git-wtfs) or seek help at OH
or Ed. You'll potentially save yourself a lot of trouble vs. guess-and-check
with git commands. If you find yourself trying to use commands recommended by
Google like `force push`, don't.
**Don't use force push, even if a post you found on Stack Overflow says to do it!**

You can also watch Professor Hug's [demo](https://www.youtube.com/watch?v=tABtNcN5y0A)
about how to get started and this [video](https://www.youtube.com/watch?v=Squ8TmG5mX0)
if you encounter some git issues.



## `ArrayDeque`

As your second deque implementation, you'll build the `ArrayDeque` class. This
deque **must** use a Java array as the backing data structure.

You may add any private helper classes or methods in `ArrayDeque.java` if you
deem it necessary.

## Creating the File

Start by creating a file called `ArrayDeque`. This file should be created
in the `proj1b/src` directory. To do this, right-click on the `src` directory,
navigate to "New -> Java Class", and give it the name `ArrayDeque`. 

Make this class implement the Deque interface following a similar process to one described in the [Project 1a spec](../proj1a/index.md#creating-the-file). 

Now you're ready to get started!


### Writing Tests

Refer to the [Project 1A spec](../proj1a/index.md#writing-tests) for
a review of how to write tests. Similar to Project 1A, you will be scored on
the coverage of your unit tests for Project 1B. You might find some of your
tests from Project 1A to be reusable in this project; don't be afraid to 
copy them over!

### Constructor

You will need to somehow keep track of what array indices hold the deque's
front and back elements. We **strongly recommend** that you treat your array as
circular for this exercise. In other words, if your front item is at position
`0`, and you `addFirst`, the new front should loop back around to the end of
the array (so the new front item in the deque will be the last item in the
underlying array). This will result in far fewer headaches than non-circular
approaches.

{% include alert.html type="info" content="
See the [Project 1B demo slides](https://docs.google.com/presentation/d/1kjbO8X7-i63NwQ_9wIt4HXr6APp2qc9PkghD-GO7_is/edit#slide=id.g1094ff4355_0_466) 
for more details. In particular, note that
while the conceptual deque and the array contain the same elements, they do not
contain them in the same order.
" %}

{% include alert.html type="task" content="
**Task**: Declare the necessary instance variables, and implement the constructor.

***

The starting size of your backing array **must** be `8`.
" %}

### `addFirst` and `addLast`

As before, implement `addFirst` and `addLast`. These two methods **must not**
use looping or recursion. A single add operation must take "constant time,"
that is, adding an element should take approximately the same amount of time. This means that you cannot
use loops that iterate through all / most elements of the deque.

**Don't worry about resizing your array now, we'll get to that later.**

{% include alert.html type="task" content="
**Task**: Implement `addFirst` and `addLast` for deques with fixed size backing arrays.
" %}

### `get`

Unlike in `LinkedListDeque`, this method must take **constant time**.

As before, `get` should return `null` when the index is invalid (too large or
negative). You should disregard the skeleton code comments for `Deque.java`
for this case. 


{% include alert.html type="task" content="
**Task**: Implement `get`.
" %}


### `toList`

`toList` will continue to be useful to test your `Deque`.

Write the `toList` method. The first line of the method should be something
like `List<T> returnList = new ArrayList<>()`. **This is one location where you
are allowed to use a Java data structure.**

{% include alert.html type="warning" content="
Some later methods might seem easy if you use `toList`.
**You may not call `toList` inside `ArrayDeque`**; there is a test that
checks for this.
" %}

{% include alert.html type="task" content="
**Task**: Implement `toList`. You are not given tests this time, so you will
need to write them!
" %}

All that's left is to test and implement all the remaining methods. For the
rest of this project, we'll describe our suggested steps at a high level. We
**strongly encourage** you to follow the remaining steps in the order given.
In particular, **write tests before you implement the method's functionality.** 
This is called "test-driven development," and helps ensure that you know what 
your methods are supposed to do before you do them.

### `isEmpty` and `size`

These two methods must take **constant time**. That is, the time it takes to for
either method to finish execution should not depend on how many elements are in
the deque.

{% include alert.html type="task" content="
**Task**: **Write tests** for the `isEmpty` and `size` methods, and check that
they fail. Then, implement the methods.
" %}



### `removeFirst` and `removeLast`

Lastly, write some tests that test the behavior of `removeFirst` and
`removeLast`, and again ensure that the tests fail.

Do not maintain references to items that are no longer in the deque.


### Resizing

Before moving on to this section, you should test your code to make sure that everything works for Deques that don't need
to resize the backing array. 

#### Resizing Up

The exception to the "constant time" requirement is when the array fills, and
you need to "resize" to have enough space to add the element. In this case, you
can take "linear time" to resize the array before adding the element.

Correctly resizing your array is very tricky, and will require some deep
thought. Try drawing out various approaches by hand. It may take you quite some
time to come up with the right approach, and we encourage you to debate the big
ideas with your fellow students or TAs. Make sure that your actual
implementation is **by you (or your partner) alone**.

Make sure to resize by a geometric factor.

{% include alert.html type="danger" content="
We **do not** recommend using `arraycopy` with a circular implementation. It
will work, but results in a significantly more complex (and harder to debug!)
implementation than necessary.

Instead, we suggest thinking about using `get` and a `for` loop in some way.
" %}

{% include alert.html type="task" content="
**Task**: Modify `addFirst` and `addLast`, and verify that they are correct
using your tests and the Java visualizer. Make sure to add enough elements so that
your backing array resizes! For more info on resizing, check out [these slides](https://docs.google.com/presentation/d/1AUaNTKX0f-nFqmqEWEEecLxIQh9hrpTDtz_lWVMl5Fw/edit#slide=id.g625dc7e36_0943).
" %}


#### Resizing Down

The amount of memory that your program uses at any given time must be
proportional to the number of items. For example, if you add 10,000 items to
the deque, and then remove 9,999 items, you shouldn't still be using an array
that can hold 10,000 items. For arrays of length 16 or more, your usage factor
should always be at least 25%. This means that before performing a remove
operation that will bring the number of elements in the array under 25% the
length of the array, you should resize the size of the array down. For arrays
under length 16, your usage factor can be arbitrarily low.

{% include alert.html type="danger" content="
We, again, **do not** recommend using `arraycopy` with a circular
implementation. If you followed our advice above to use a `for` loop to resize
up, resizing down should look **very similar** to resizing up (perhaps a helper
method?).
" %}

{% include alert.html type="task" content="
**Task**: **After you've written tests and verified that they fail**, implement
`removeFirst` and `removeLast`.
" %}

{% include alert.html type="danger" content="
For the intended experience, follow these steps in order. If you do something
else and ask us for help, we will refer you back to these steps.
" %}


### Submit to the Autograder

Once you've written local tests and passed them, try submitting to the
autograder. You may or may not pass everything.

-   If you fail any of the coverage tests, it means that there is a case that
    your local tests did not cover. The autograder test name and the test
    coverage component will give you hints towards the missing case.
-   If you fail a correctness test, this means that there is a case that your
    local tests did not cover, despite having sufficient coverage for flags.
    This is **expected**. Coverage flags are an approximation! They also do not
    provide describe every single behavior that needs to be tested, nor do they
    guarantee that you assert everything.
-   If you fail any of the timing tests, it means that your implementation does
    not meet the timing constraints described above.

### Scoring

This project, similar to Project 0, is divided into individual components, each
of which you must implement *completely correctly* to receive credit.

1. **Adding (25%)**: Correctly implement `addFirst`, `addLast`, and `toList`.
2. **`isEmpty`, `size` (5%)**: Correctly implement `isEmpty` and `size` with
    add methods working.
3. **`get` (10%)**: Correctly implement `get`.
4. **Removing (30%)**: Correctly implement `removeFirst` and `removeLast`.
5. **Memory (20%)**: Correctly implement resizing so that you do not use
    too much memory.

Additionally, there is a **test coverage (10%)** component. We will run your
tests against a staff solution, and check how many scenarios and edge cases are
tested. You can receive partial credit for this component.

In total, Project 1b is worth 12 points.

### Next Section

Congrats on completing Project 1a! We really suggest that you take a break before you move 
on to [Project 1c](../proj1c).

