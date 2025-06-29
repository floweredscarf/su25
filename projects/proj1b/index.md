---
# layout: page # The HTML template to use to render this page.
# title: "Project 1B: ArrayDeque" # Title of page.
# categories: proj
# released: true
# toc:
#   h_max: 4

layout: page
title: "Project 1B: ArrayDeque61B"
nav_order: 2
parent: Projects
has_children: true
has_toc: false
has_right_toc: true
nav_exclude: false
description: >-
  Project 1B.
released: true  
---

## Due: Wednesday, July 9th at 11:59 PM PT

{: .no_toc}

## [FAQ](faq)

Each assignment will have an FAQ linked at the top. You can also access it by adding "/faq" to the end of the URL. The
FAQ for Project 1B is located
[here](faq).

{: .warning}
> **Warning:** this assignment is not officially released yet. This spec is subject to change until this warning disappears.

Note that this project has limited submission tokens. Please see [Submit to the Autograder](#submit-to-the-autograder) for more details.

## Introduction

In Project 1A, we built `LinkedListDeque61B`. Now we'll see a different
implementation of the `Deque61B` interface that uses a _backing array_, rather
than linked nodes.

By the end of Project 1B, you will...

- Gain an understanding of the implementation of a backing array in
  data structures.
- Have more experience using testing and test-driven development to verify
  the correctness of these data structures.

{: .info}
Check out the [Project 1B slides](https://docs.google.com/presentation/d/1kjbO8X7-i63NwQ_9wIt4HXr6APp2qc9PkghD-GO7_is/edit#slide=id.g1094ff4355_0_466) for some additional visually oriented tips.


{: .info}
Check out the [Getting Started Video](https://www.youtube.com/watch?v=m1zy1tuA6o8) for an overview of this project.

We will provide relatively little scaffolding. In other words, we'll say what
you should do, but not how.

{: .info}
>This section assumes you have watched and fully digested the lectures up till
>the `ADTs and Inheritance` lecture, Lecture 5.


{: .task}
>For this project, you must work alone! Please carefully read the
>[Policy on Collaboration and Cheating](../../policies/index.md#collaboration-and-academic-misconduct)
>to see what this means exactly. In particular, do not look for solutions online.

{: .danger}
>It should (still) go without saying that you may not use any of the built-in
>`java.util` data structures in your implementation! The whole point is to build
>your own versions! There are a few places where you may use specific data
>structures outside of tests, and we will clearly say where.

### Style

As in Project 1A, **we will be enforcing style**. You must follow the
[style guide](../../resources/guides/style/index.md), or you will be penalized on the
autograder. Note that style penalties do **not** apply to test files.

You can and should check your style locally with the CS 61B plugin. **We will
not remove the velocity limit for failing to check style.**

### Getting the Skeleton Files

Follow the instructions in the
[Assignment Workflow guide](../../resources/guides/assignment-workflow/index.md/#assignment-workflow)
to get the skeleton code and open it in IntelliJ. For this project, we will be
working in the **`proj1b`** directory.

You see a `proj1b` directory appear in your repo with the following structure:

```sh
 proj1b
├── src
│   └── deque
│       └── Deque61B.java
└── tests
    ├── ArrayDeque61BPreconditionTest.java
    └── ArrayDeque61BTest.java
```

Note that you'll also see a `gh2` directory and the related test file `TestGuitarString.java`. 
These are related to an optional [Guitar Hero](#guitar-hero-optional) section, which you can read about further down.

If you get some sort of error, STOP and either figure it out by carefully
reading the [Git WTFs](../../resources/guides/git/wtfs.md) or seek help at OH
or Ed. You'll potentially save yourself a lot of trouble vs. guess-and-check
with git commands. If you find yourself trying to use commands recommended by
Google like `force push`,
[don't](https://twitter.com/heathercmiller/status/526770571728531456).
**Don't use force push, even if a post you found on Stack Overflow says to do it!**

You can also watch Professor Hug's [demo](https://www.youtube.com/watch?v=tABtNcN5y0A)
about how to get started and this [video](https://www.youtube.com/watch?v=Squ8TmG5mX0)
if you encounter some git issues.

## Deque: ADT and API

If you need a refresher on `Deque61B`s, refer to the
[Project 1A spec](../proj1a/index.md#deque-adt-and-api)
and the `Deque61B.java` file.

## Creating the File

Start by creating a file called `ArrayDeque61B`. This file should be created
in the `proj1b/src/deque` directory. To do this, right-click on the `deque` directory,
navigate to "New -> Java Class", and give it the name `ArrayDeque61B`.

Just like you did in Project 1A We want our `ArrayDeque61B` to be able to hold several different types. To enable this, you should edit the declaration of your class so that it reads:

```java
public class ArrayDeque61B<T>
```

Recall from lecture that it doesn't actually matter if we use `T` or some other
string like `ArrayDeque61B<Glerp>`. However, we recommend using `<T>` for
consistency with other Java code.

We also want to tell Java that every `ArrayDeque61B` is a `Deque61B`, so that users can write code like `Deque61B<String> lld1 = new ArrayDeque61B<>();`. To enable this, change the declaration of your class so that it reads:

```java
public class ArrayDeque61B<T> implements Deque61B<T>
```

Once you've done this step, you'll likely see a squiggly red line under the
entire class declaration. This is because you said that your class implements
an interface, but you haven't actually implemented any of the interface methods
yet.

Hover over the red line with your mouse, and when the
IntelliJ pop-up appears, click the "Implement methods" button. Ensure that all the
methods in the list are highlighted, and click "OK". Now, your class should
be filled with a bunch of empty method declarations. These are the methods that you'll
need to implement for this project!



Lastly, you should create an empty constructor. To do this, add the following
code to your file, leaving the constructor blank for now.

```java
public ArrayDeque61B() {
}
```

Note: You can also generate the constructor by clicking "Code", then "Generate"
then "Constructor", though I prefer the typing the code yourself approach.

Now you're ready to get started!

## `ArrayDeque61B`

As your second deque implementation, you'll build the `ArrayDeque61B` class. This
deque **must** use a Java array as the backing data structure.

You may add any private helper classes or methods in `ArrayDeque61B.java` if you
deem it necessary.

### Constructor

You will need to somehow keep track of what array indices hold the deque's
front and back elements. We **strongly recommend** that you treat your array as
circular for this exercise. In other words, if your front item is at position
`0`, and you `addFirst`, the new front should loop back around to the end of
the array (so the new front item in the deque will be the last item in the
underlying array). This will result in far fewer headaches than non-circular
approaches.

{: .info}
>See the [Project 1B demo slides](https://docs.google.com/presentation/d/1kjbO8X7-i63NwQ_9wIt4HXr6APp2qc9PkghD-GO7_is/edit#slide=id.g1094ff4355_0_466)
>for more details. In particular, note that
>while the conceptual deque and the array contain the same elements, they do not
>contain them in the same order.

We recommend using the `floorMod(int a, int b)` method from Java's built-in `Math` class to assist you in 
designing a circular approach. Whereas `a % b` might return negative numbers when a is negative, `floorMod(int a, int b)` always return non-negative numbers. In practice, this means that the output will have the same sign as the divisor. Here are a few examples
using the `floorMod(int a, int b)` method:

```java
    int value1 = Math.floorMod(16, 16); // value1 == 0
    int value2 = Math.floorMod(-1, 16); // value2 == 15
    int value3 = Math.floorMod(20, 16); // value3 == 4
```

You can use the `floorMod(int a, int b)` method by adding the following import statement to the top of your file: 
`import java.lang.Math;`.

{: .warning}
You cannot create an array of generics (e.g. `new T[1000]`) in Java for [reasons beyond the scope of this course](https://openjdk.org/projects/valhalla/). You will instead need to use the syntax `(T[]) new Object[1000]`.

{: .task}
>Declare the necessary instance variables, and implement the constructor.
>
>The starting size of your backing array **must** be `8`.

### `addFirst` and `addLast`

As before, implement `addFirst` and `addLast`. These two methods **must not**
use looping or recursion. A single add operation must take "constant time,"
that is, adding an element should take approximately the same amount of time no
matter how large the deque is (with one exception). This means that you cannot
use loops that iterate through all / most elements of the deque.


### `get`

Unlike in `LinkedListDeque61B`, this method must take **constant time**.

As before, `get` should return `null` when the index is invalid (too large or
negative). You should disregard the skeleton code comments for `Deque61B.java`
for this case.

{: .task}
>**After you've written tests and verified that they fail**, implement
>`get`.


### `isEmpty` and `size`

These two methods must take **constant time**. That is, the time it takes to for
either method to finish execution should not depend on how many elements are in
the deque.

{: .task}
>**Write tests** for the `isEmpty` and `size` methods, and check that
>they fail. Then, implement the methods.

### `toList`

`toList` will continue to be useful to test your `Deque61B`.

Write the `toList` method. The first line of the method should be something
like `List<T> returnList = new ArrayList<>()`. **This is one location where you
are allowed to use a Java data structure.**

{: .warning}
>Some later methods might seem easy if you use `toList`.
>**You may not call `toList` inside `ArrayDeque61B`**; there is a test that
>checks for this.

{: .info}
>**Hint** One of the other methods may be helpful for implementing this method.
>

{: .task}
>Implement `toList`. You are not given tests this time, so you will
>need to write them!



All that's left is to test and implement all the remaining methods. For the
rest of this project, we'll describe our suggested steps at a high level. We
**strongly encourage** you to follow the remaining steps in the order given.
In particular, **write tests before you implement the method's functionality.**
This is called "test-driven development," and helps ensure that you know what
your methods are supposed to do before you do them.



### `removeFirst` and `removeLast`

Lastly, write some tests that test the behavior of `removeFirst` and
`removeLast`, and again ensure that the tests fail.

Do not maintain references to items that are no longer in the deque.

`removeFirst` and `removeLast` **may not** use looping or recursion. Like `addFirst` and `addLast`,
these operations must take \"constant time.\" Refer to the section on writing `addFirst` and `addLast` 
for more information on what this means.

### `getRecursive`

Although we are not using a linked list anymore for this project, it is still required to implement this method to keep consistent with our interface.
This method technically shouldn't be in the interface, but it's here to make testing nice. You can just use this code block for it:

```java
    @Override
    public T getRecursive(int index) {
        throw new UnsupportedOperationException("No need to implement getRecursive for proj 1b");
    }
```

{: .task}
"Implement" `getRecursive`.

### Resizing

{: .warning}
We recommend you complete the other methods first, verify that they are working correctly without resizing, and come back to resizing after.

#### Resizing Up

The exception to an Array Deque's "constant time" requirement is when the array fills, and
you need to "resize" to have enough space to add the next element. In this case, you
can take "linear time" to resize the array before adding the element.

Correctly resizing your array is very tricky, and will require some deep
thought. Try drawing out various approaches by hand. It may take you quite some
time to come up with the right approach, and we encourage you to debate the big
ideas with your fellow students or TAs. Make sure that your actual
implementation is **by you alone**.

Make sure to resize by a geometric factor.

{: .danger}
>We **do not** recommend using `arraycopy` with a circular implementation. It
>will work, but results in a significantly more complex (and harder to debug!)
>implementation than necessary.
>
>Instead, we suggest thinking forward to how you might implement `get` and using
>a `for` loop in some way.

{: .task}
>Remember to implement `addFirst` and `addLast` first, and write tests to verify that
>they are correct. Make sure to add enough elements so that
>your backing array resizes! For more info on resizing, check out [these slides](https://docs.google.com/presentation/d/1AUaNTKX0f-nFqmqEWEEecLxIQh9hrpTDtz_lWVMl5Fw/edit#slide=id.g625dc7e36_0943).


#### Resizing Down

The amount of memory that your program uses at any given time must be
proportional to the number of items. For example, if you add 10,000 items to
the deque, and then remove 9,999 items, you shouldn't still be using an array
that can hold 10,000 items. For arrays of length 16 or more, your usage factor
should always be at least 25%. This means that before performing a remove
operation, if the number of elements in the array is at or under 25% the
length of the array, you should resize the array down. For arrays
length 15 or less, your usage factor can be arbitrarily low.

{: .danger}
>We, again, **do not** recommend using `arraycopy` with a circular
>implementation. If you followed our advice above to use a `for` loop to resize
>up, resizing down should look **very similar** to resizing up (perhaps a helper
>method?).

{: .task}
>**After you've written tests and verified that they fail**, implement
>`removeFirst` and `removeLast`.

{: .danger}
>For the intended experience, follow these steps in order. If you do something
>else and ask us for help, we will refer you back to these steps.

### Writing Tests

Refer to the [Project 1A spec](../proj1a/index.md#writing-tests) for
a review of how to write tests. Similar to Project 1A, you will be scored on
the coverage of your unit tests for Project 1B. You might find some of your
tests from Project 1A to be reusable in this project; don't be afraid to
copy them over!

{: .info}
> Note that you should only be using variables and methods found in the `Deque`
> interface when writing your coverage tests. This is because we run our "own"
> Deque implementations against your tests to determine if they have 
> enough coverage.
> 
> You can test your coverage by submitting to the `[UNGRADED] Project 1B: 
> ArrayDeque Test Coverage` assignment, which will not be graded and has no
> velocity limit. Your final test coverage grade component will be determined 
> from your submission to the main `Project 1B: ArrayDeque` assignment.


### Suggestions

- Try to get everything working for a fixed-size array first. This would be good point to start to familiarize yourself.
- Once you are confident working solution for a fixed-size array, try resizing - consider having a helper method for it!
- **DO NOT** modify `Deque61B` interface.
- When in doubt, draw it out! We suggest drawing box-and-pointer diagrams (or diagrams in general) when faced with issues in your methods, it will help you understand both your code as well as the intended logic better.

## `Deque61B` Enhancements

In this section of the project, you are going to expand upon the functionality of the `Deque61B` interface.

### Object Methods

In order to implement the following methods, you should start by copying and pasting your Project 1A
implementation of `LinkedListDeque61B` into the `src` directory.

#### `iterator()`

One shortcoming of our `Deque61B` interface is that it can not be iterated over. That is, the code below fails to compile with the error "foreach not applicable to type".

```java
  Deque61B<String> lld1 = new LinkedListDeque61B<>();

  lld1.addLast("front");
  lld1.addLast("middle");
  lld1.addLast("back");
  for (String s : lld1) {
      System.out.println(s);
  }
```

Similarly, if we try to write a test that our `Deque61B` contains a specific set of items, we'll also get a compile error, in this case: "Cannot resolve method containsExactly in Subject".

```java
public void addLastTestBasicWithoutToList() {
    Deque61B<String> lld1 = new LinkedListDeque61B<>();

    lld1.addLast("front"); // after this call we expect: ["front"]
    lld1.addLast("middle"); // after this call we expect: ["front", "middle"]
    lld1.addLast("back"); // after this call we expect: ["front", "middle", "back"]
    assertThat(lld1).containsExactly("front", "middle", "back");
}
```

Again the issue is that our item cannot be iterated over. The `Truth` library works by iterating over our object (as in the first example), but our `LinkedListDeque61B` does not support iteration.

To fix this, you should first modify the `Deque61B` interface so that the declaration reads:

```java
public interface Deque61B<T> extends Iterable<T> {
```

Next, implement the `iterator()` method using the techniques described in lecture 10.

{: .task}
>**Task**: Implement the `iterator()` method in both `LinkedListDeque61B` and
>`ArrayDeque61B` according to lecture.

{: .danger}
You are not allowed to call `toList` here.

#### `equals()`

Consider the following code:

```java
    @Test
    public void testEqualDeques61B() {
        Deque61B<String> lld1 = new LinkedListDeque61B<>();
        Deque61B<String> lld2 = new LinkedListDeque61B<>();

        lld1.addLast("front");
        lld1.addLast("middle");
        lld1.addLast("back");

        lld2.addLast("front");
        lld2.addLast("middle");
        lld2.addLast("back");

        assertThat(lld1).isEqualTo(lld2);
    }
```

If we run this code, we see that we fail the test, with the following message:

```
expected: [front, middle, back]
but was : (non-equal instance of same class with same string representation)
```

The issue is that the `Truth` library is using the `equals` method of the `LinkedListDeque61B` class. The default implementation is given by the [code below](https://github.com/openjdk/jdk17/blob/master/src/java.base/share/classes/java/lang/Object.java#L162):

```java
    public boolean equals(Object obj) {
        return (this == obj);
    }
```

That is, the equals method simply checks to see if the addresses of the two objects are the same. We want to be able to check whether the two `Deque61B` objects are equal in terms of elements and order so therefore we need a different `equals` method.

Override the equals method in the `ArrayDeque61B` and `LinkedListDeque61B` classes. For guidance on writing an `equals` method, see the [lecture slides](https://docs.google.com/presentation/d/1lIR4--P9NrBqRL9xqP_RQYyK1WJBrBEbriLVpatrRqk/edit#slide=id.g4f922fa56b_2_47) or the [lecture code repository](https://github.com/Berkeley-CS61B/lectureCode-sp23/blob/main/lec12_inheritance4/ArraySet.java).

{: .info}
>Note: You might ask why we're implementing the same method in two classes rather than providing a `default` method in
>the `Deque61B` interface. Interfaces are not allowed to provide `default` methods that override `Object` methods. For more
>see [https://stackoverflow.com/questions/24595266/why-is-it-not-allowed-add-tostring-to-interface-as-default-method](https://stackoverflow.com/questions/24595266/why-is-it-not-allowed-add-tostring-to-interface-as-default-method).
>
>However, one workaround for this is to provide a `default`, non-`Object` helper method in the `Deque61B` interface and have the implementing classes call it.

{: .task}
Override the `equals()` method in the `LinkedListDeque61B` and `ArrayDeque61B` classes.

{: .warning}
>Important: You should not use `getClass`, and there's no need to do any casting in your `equals` method. That is, you shouldn't be doing `(ArrayDeque61B) o`. Such `equals` methods are old fashioned and overly complex. Use `instanceof` instead.
>
>Note: The `instanceof` operator behaves a little strangely with generic types, for reasons beyond the scope of this course. For example, if you want to check if `lst` is an instance of a `List<Integer>`, you should use `lst instanceof List<?>` rather than `lst instanceof List<Integer>`. Unfortunately, this is not able to check the types of the elements, but it's the best we can do.

{: .warning}
Important: Make sure you use the `@Override` tag when overriding methods. A common mistake in student code is to try to override `equals(ArrayList<T> other)` rather than `equals(Object other)`. Using the optional `@Override` tag will prevent your code from compiling if you make this mistake. `@Override` is  a great safety net.

{: .danger}
You are not allowed to call `toList` here.

#### `toString()`

Consider the code below, which prints out a `LinkedListDeque61B`.

```java
Deque61B<String> lld1 = new LinkedListDeque61B<>();

lld1.addLast("front");
lld1.addLast("middle");
lld1.addLast("back");

System.out.println(lld1);
```

This code outputs something like `deque.proj1a.LinkedListDeque61B@1a04f701`. This is because the print statement implicitly calls the `LinkedListDeque61B` `toString` method. Since you didn't override this method, it uses the default, which is given by the code below (you don't need to understand how this code works).

```java
    public String toString() {
        return getClass().getName() + "@" + Integer.toHexString(hashCode());
    }
```

In turn the `hashCode` method, which you have also not overridden, simply returns the address of the object, which in the example above was `1a04f701`.

{: .task}
**Task**: Override the `toString()` method in the `LinkedListDeque61B` and `ArrayDeque61B` classes, such that the code above prints out `[front, middle, back]`.

{: .warning}
>Hint: Java's implementation of the `List` interface has a `toString` method.
>
>Hint: There is a one line solution (see hint 1).
>
>Hint: Your implementation for `LinkedListDeque61B` and `ArrayDeque61B` should be exactly the same.

#### Testing The Object Methods

We haven't provided you with test files for these three object methods; however, we strongly encourage you to use the
techniques you have learned so far to write your own tests. You can structure these tests however you'd like,
since we won't be testing them. One possible (and suggested) structure is to create a new file in the `tests` directory
called `LinkedListDeque61BTest` so that you have a testing file for each implementation.

### The GH2 Package

The `gh2` package has just one primary component that you will edit:

- `GuitarString`, a class which uses a `Deque61B<Double>` to implement the
  [Karplus-Strong algorithm](http://en.wikipedia.org/wiki/Karplus%E2%80%93Strong_string_synthesis)
  to synthesize a guitar string sound.

We've provided you with skeleton code for `GuitarString` which is where you will use your `deque` package that you made
in the first part of this project.

### `GuitarString`

We want to finish the `GuitarString` file, which should use the `deque` package to replicate the sound of a plucked
string. Note that this file uses the word "buffer", which is a synonym for "deque" in this context.

We'll be using the Karplus-Strong algorithm, which is quite easy to implement with a `Deque61B`. It is simply the following three steps:

1. Replace every item in a `Deque61B` with random noise (`double` values between -0.5 and 0.5).
2. Play the `double` at the front of the `Deque61B`.
3. Remove the front `double` in the `Deque61B` and average it with the next `double` in the `Deque61B` (hint: use `removeFirst)`
   and `get()`) multiplied by an energy decay factor of 0.996 (we'll call this entire quantity
   `newDouble`). Then, add `newDouble` to the back of the `Deque61B`. Go back to step 2 (and repeat forever).

Or visually, if the `Deque61B` is as shown on the top, we'd play the 0.2, remove it, combine it with the 0.4 to form 0.2988, and add the
0.2988.

![karplus-strong](karplus-strong.webp)

You can play a `double` value with the `StdAudio.play` method. For example
`StdAudio.play(0.333)` will tell the diaphragm of your speaker to extend itself to 1/3rd of its total
reach, `StdAudio.play(-0.9)` will tell it to stretch its little heart backwards almost as far as it can reach. Movement
of the speaker diaphragm displaces air, and if you displace air in nice patterns, these disruptions will be interpreted
by your consciousness as pleasing thanks to billions of years of evolution.
See [this page](http://electronics.howstuffworks.com/speaker6.htm) for more. If you simply do `StdAudio.play(0.9)` and
never play anything again, the diaphragm shown in the image would just be sitting still 9/10ths of the way forwards.

Complete `GuitarString.java` so that it implements the Karplus-Strong algorithm. Note that you will
have to fill your `Deque61B` buffer with zeros in the `GuitarString` constructor. Part of the process will be handled by the client of the
`GuitarString` class. You are only required to complete the tasks labeled with `TODO`.

{: .danger}
>Do not call `StdAudio.play` in `GuitarString.java`. This will cause the
>autograder to break. `GuitarPlayer.java` does this for you already.

{: .info}
Make sure to add the libraries, as usual, otherwise IntelliJ won't be able to find `StdAudio`.

For example, the provided `TestGuitarString` class provides a sample test
`testPluckTheAString` that attempts to play an A-note on a guitar string. If you run the test should hear an A-note when
you run this test. If you don't, you should try the
`testTic` method and debug from there. Consider adding a `print` or `toString`
method to `GuitarString.java` that will help you see what's going on between tics.

### Why It Works

The two primary components that make the Karplus-Strong algorithm work are the ring buffer feedback mechanism and the
averaging operation.

- **The ring buffer feedback mechanism**. The ring buffer models the medium (a string tied down at both ends) in which
  the energy travels back and forth. The length of the ring buffer determines the fundamental frequency of the resulting
  sound. Sonically, the feedback mechanism reinforces only the fundamental frequency and its harmonics (frequencies at
  integer multiples of the fundamental). The energy decay factor (.996 in this case) models the slight dissipation in
  energy as the wave makes a round trip through the string.
- **The averaging operation**. The averaging operation serves as a gentle low-pass filter (which removes higher
  frequencies while allowing lower frequencies to pass, hence the name). Because it is in the path of the feedback, this
  has the effect of gradually attenuating the higher harmonics while keeping the lower ones, which corresponds closely
  with how a plucked guitar string sounds.

### `GuitarHeroLite`

You should now also be able to use the `GuitarHeroLite` class. Running it will provide a graphical interface, allowing
the user (you!) to interactively play sounds using the `gh2` package's `GuitarString` class.

### Submit to the Autograder

Once you've written local tests and passed them, try submitting to the
autograder. You may or may not pass everything.

- If you fail any of the coverage tests, it means that there is a case that
  your local tests did not cover. The autograder test name and the test
  coverage component will give you hints towards the missing case.
- If you fail a correctness test, this means that there is a case that your
  local tests did not cover, despite having sufficient coverage for flags.
  This is **expected**. Coverage flags are an approximation! They also do not
  provide describe every single behavior that needs to be tested, nor do they
  guarantee that you assert everything. [Here](./flags.md) is a list of them!
- If you fail any of the timing tests, it means that your implementation does
  not meet the timing constraints described above.
- You will have a token limit of 4 tokens every 24 hours. **We will not reinstate tokens for failing to add/commit/push your code, run style, etc.**
- You may find messages in the autograder response that look something like this: `WARNING: A terminally deprecated method in java.lang.System has been called`. You can safely ignore any line tagged as a `WARNING`.

### Scoring

This project, similar to Project 0, is divided into individual components, each
of which you must implement _completely correctly_ to receive credit.

1. **Adding (20%)**: Correctly implement `addFirst`, `addLast`, and `toList`.
2. **`isEmpty`, `size` (3.33%)**: Correctly implement `isEmpty` and `size` with
   add methods working.
3. **`get` (3.33%)**: Correctly implement `get`.
4. **Removing (25%)**: Correctly implement `removeFirst` and `removeLast`.
5. **Memory (16.67%)**: Correctly implement resizing so that you do not use
   too much memory.
6. **`LinkedListDeque61B` Object Methods (12.5%)**: Correctly implement `iterator`, `equals`, and `toString` in `LinkedListDeque61B`.
7. **`ArrayDeque61B` Object Methods (12.5%)**: Correctly implement `iterator`, `equals`, and `toString` in `ArrayDeque61B`.
9. **Test Coverage (6.67%)**: Write tests to capture a sufficient number of flags.

For the **test coverage** component, we will run your
tests against a staff solution and check how many scenarios and edge cases are
tested. You can receive partial credit for this component. [Here](./flags.md) is a list of them!

