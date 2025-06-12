---
layout: page
title: >-
  Lab 07: Comparison, Iteration, and Exceptions
has_children: true
parent: Labs
has_toc: false
has_right_toc: true
released: true
---

## [FAQ](faq.md)

This assignment has an [FAQ page](faq.md).

## Before You Begin

As usual, pull the skeleton code.

## Learning Goals

In this lab, we'll wrap up the Java-focused portion of the class.

First, we will expand upon our knowledge of interfaces from [Lab 6](../lab06)
by looking at some existing Java interfaces that allow us to implement useful
behaviors for our data structures and other types.

We'll also consider what happens when an error occurs, like a
`NullPointerException`, and what we can do to stop them from crashing the
entire program.

## Interfaces as Behaviors

In [Lab 6](../lab06), we discussed ADTs, a description of a data
structure's behavior; and how we can implement ADTs in Java using *interfaces*.
We actually don't need to limit ourselves to expressing data structure
behavior - **as long as we have a list of things we want to do, we can make an
interface**.

We'll take a look at two really common things that we want to do with our
classes:

-   Making them *able to be compared* (useful for things that go in certain kinds
    of data structures)
-   Making them *able to be iterated over* (useful for the data structures
    themselves)

## Comparison

{% include alert.html content="
Read Chapter 4.3 from **[Max Function](https://joshhug.gitbooks.io/hug61b/content/chap4/chap43.html#max-function)** through **Comparables** to help
motivate the problem we're solving and the tools we'll use along the way.

Remember **casting** is a bit of special syntax where you can tell the compiler that a
specific expression has a specific compile-time type. If the `maxDog` method
below returns an object of static type `Dog`, the code normally wouldn't compile
as `Poodle` is a subtype of `Dog`. *Casting* tells Java to treat the `Dog` as
if it were a `Poodle` for the purposes of compilation because it's possible
that the `Dog` returned from `maxDog` *could be* a `Poodle`.

```java
Poodle largerPoodle = (Poodle) maxDog(frank, frankJr);
```

[Max Function]: <https://joshhug.gitbooks.io/hug61b/content/chap4/chap43.html#max-function>
" %}

While we haven't explicitly learned about sorting yet, the idea of sorting
should be intuitive enough. You have a list of things, and you want to put it
in sorted order. While this makes sense immediately for things like `int`s,
which we can compare with primitive operations like `<` and `==`, this becomes
less clear for general objects.

So, what does "sorted order" for general objects? To sort, we must first say
that `<` *means* something, or that we can meaningfully compare two objects.
For example, to sort `String`s, we could say that the "smaller" one
is the one that would come first in the dictionary ("alphabet" "`<`" "zebra").

In Java, how do we say that a particular type can be compared?
This is exactly what the [`Comparable<T>` interface][comparable interface]
describes. When a type implements `Comparable<T>`, we say that it is
"able to be compared" to objects of type `T`. Usually, `T` is the same type
(that is, you'll usually see `class MyClass implements Comparable<MyClass>`),
but it doesn't have to be.

[comparable interface]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Comparable.html>

The only method required by `Comparable<T>` is `compareTo(T o)` which takes
another object of the type `T` and returns an `int` whose value
represents whether `this` or `o` should come first.

In order to sort a list in
Java, most sorting algorithms will call `compareTo` and make pairwise
comparisons to determine which object should come first, repeatedly, and swap
elements until the entire list is sorted. (The hard part of sorting, then, is
to determine which `compareTo` 'questions' are necessary to ask!)

Here are a few key details from [`compareTo`][compareTo], slightly adapted:

[compareTo]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Comparable.html#compareTo(T)>

> Compares this object with the specified object for order. Returns a negative
> integer, zero, or a positive integer if this object is less than, equal to,
> or greater than the specified object, respectively.

There are other requirements that typically happen naturally with a
"reasonable" implementation, but are still important to specify:

> The implementor must also ensure that the relation is transitive:
> `(x.compareTo(y) > 0 && y.compareTo(z) > 0)` implies `x.compareTo(z) > 0`.
>
> It is strongly recommended, but not strictly required that `x.compareTo(y) ==
> 0` is equivalent to `x.equals(y)`. Generally speaking, any class that
> implements the `Comparable` interface and violates this condition should
> clearly indicate this fact. The recommended language is "Note: this class has
> a natural ordering that is inconsistent with equals."

Why do we care about making things comparable?
: This means that we can implement data structures that require ordering or
  comparison (like sorted lists, and in the future, search trees). We would say
  "this collection can only contain types that are `Comparable` to themselves".

What if we want to compare things that don't implement `Comparable`, or want to compare things in a different way?
: The `compareTo` method defines an object's "natural order". However, a type
  may not have a "natural order", or we may want to order it in a different
  way (for example - ordering people by their height, name, or age). We can
  instead use the [`Comparator<T>`][Comparator] interface to impose our own ordering on
  objects. We can get a `Comparator` either by directly implementing the
  interface, or by using Java's higher-order functions (out-of-scope).

[Comparator]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html>

### Exercise: Comparing `User`s

In `User.java`, we've provided an example of how a website might model a user.

Make `User` implement the `Comparable` interface. Use parameterization (ie. `<>`) with `Comparable`
to ensure that `User` can only be used to compare against other `User`s.

The natural ordering for `User` is to compare by ID number. If their ID numbers
are the same, then compare them on their username.

After implementing this, you should be able to sort `User`s. The example below is also in the `main` method of your `User` class. Feel free
to run it as a sanity check.

```java
public static void main(String[] args) {
    User[] users = {
        new User(2, "Erik", ""),
        new User(4, "Vanessa", ""),
        new User(5, "Natalia", ""),
        new User(1, "Alex", ""),
        new User(1, "Circle", "")
    };
    Arrays.sort(users);
    for (User user : users) {
        System.out.println(user);
    }
}
```

```java
User{id=1, name=Alex, email=}
User{id=1, name=Circle, email=}
User{id=2, name=Erik, email=}
User{id=4, name=Vanessa, email=}
User{id=5, name=Natalia, email=}
```

Note that here we use `Arrays.sort` because `users` is an array; if it was a
Java `Collection` like `ArrayList`, we would use `Collections.sort`.

## Iteration

In CS 61BL, we're going to encounter a variety of different *data structures*,
or ways to organize data. We've implemented linked lists like `SLList` and
`DLList`, and a couple different sets. Starting next Friday, we'll start to see
more complicated data structures such as trees, hash tables, heaps, and graphs.

A common operation on a data structure is to process every item it contains.
But often, the code we need to write to setup and iterate through a data
structure differs depending on the data structure's implementation.

For an array, you might iterate over it like this:

```java
int[] array = ...
for (int i = 0; i < array.length; i += 1) {
    // Do something with array[i]
}
```

For `SLList`, the pattern significantly differs from above.

```java
SLList list = ...
for (IntNode p = list.sentinel.next; p != null; p = p.next) {
    int item = p.item;
}
```

Evidently, we need to write two very different codes in order to do the same
high-level thing. It would be nice if we can write one piece of code that we can
reuse for different things that we can iterate over. In other words, we wish
to *abstract away* the internal implementation of data structures from the
operations on them.

Furthermore, if we use a different data structure, a `for` loop like the one
above may not make sense. For example, what would it mean to access the `k`th
item of a set, where the order of items is not defined? We need a more *abstract*
notion of processing every item in a data structure, something that allows us
to check every item regardless of how they're organized.

To do that, we're going to define the idea of a data structure being *iterable*.

### `Iterable`

The interface that lets us say that something can be iterated over is called
[`Iterable<T>`][Iterable]:

[Iterable]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Iterable.html>

```java
public interface Iterable<T> {
    Iterator<T> iterator();
}
```

The generic parameter `T` indicates the type of the elements that we visit
while iterating. For example, for the `SLList` that contains only `int`s, we
would write:

```java
public class SLList implements Iterable<Integer>
```

Similarly, a generic list would implement `public class MyList<T> implements
Iterable<T>`.

Since a Java `Collection` is a group of objects, it makes sense that we would
like to iterate over those objects. Therefore, `Collection<T>` is a
sub-interface of `Iterable<T>`.

Let's now consider the return type, `Iterator<T>`.

### `Iterator`

Remember how everything is an object in Java? If `Iterable` is the "thing that
can be iterated over", then [`Iterator`][Iterator] is "where we are during
iteration".

[Iterator]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Iterator.html>

As an analogy, think of a walking trail, with specific waypoints along the
trail (like a list). The walking trail is `Iterable`, because we can visit each
waypoint. Imagine that we have a person walking along the trail. The person
and where they are on the trail is an `Iterator`. We can have multiple
people on the trail, just like we can have multiple iterators.

Since the "state" that `Iterator` needs to keep track of will likely be
different for each class, it's an interface as well:

```java
package java.util;
public interface Iterator<T> {
    boolean hasNext();
    T next();
    // Some methods not shown
}
```

`hasNext`
: `hasNext` is a boolean method that says whether there are any more remaining
items in the iterable to return. In other words, returns true if `next()`
would return an element rather than throwing an exception. In our analogy,
this returns true if the walker is not at the end of the trail.

`next`
: `next` successively returns items in the iterable one by one. The first
call to `next` returns a value, the second call to `next` returns another
value, and so on. If you're iterating over a set -- a data structure that
does not necessarily have an order -- we don't necessarily guarantee that
`next` returns items in any specific order. However, what we do
guarantee is that it returns each item in the iterable exactly once. If we were
iterating over a data structure that *does* have an ordering, like a list, then
we would also like to guarantee that `next` returns items in the right order.
In our analogy, this causes the walker to "visit" a waypoint on the trail.

{% include alert.html content="
Every call to `next()` is typically preceded by a call
to `hasNext()`, thus ensuring that the `Iterator` does indeed have a next value
to return. If there are no more elements to remaining, it is common practice to
throw a `NoSuchElementException`.
" %}

Why design two separate interfaces, one for iterator and one for iterable? Why not just have the iterable do both?
: The idea is similar to `Comparable` and `Comparator`. We can provide a
  'default' iterator, but also allow for other iterators. For example, we could
  implement an iterator that skips every other element, visits each element,
  twice, or skips elements that return false for some condition.

### Enhanced `for` Loop

You may have been using the idea of a data structure being iterable already!
When Java executes an enhanced `for` loop (the one using a colon), it does a
bit of work to convert it into iterators and iterables. The following code
represents the enhanced for loop you have most likely already seen and then a
translated version which reveals what is happening behind the hood using an
iterator.

```java
List<Integer> friends = new ArrayList<>();
friends.add(5);
friends.add(23);
friends.add(42);
for (int x : friends) {
    System.out.println(x);
}
```

```java
List<Integer> friends = new ArrayList<>();
friends.add(5);
friends.add(23);
friends.add(42);
Iterator<Integer> seer = friends.iterator();
while (seer.hasNext()) {
    int x = seer.next();
    System.out.println(x);
}
```

### `SLListIterator`

Here's an example of implementing `Iterable` for `SLList`:

```java
public class SLList implements Iterable<Integer> {
    /* The first item (if it exists) is at sentinel.next. */
    private IntListNode sentinel;
    private int size;

    // Constructor and other methods...

    public Iterator<Integer> iterator() {
        return new SLListIterator();
    }

    // We can define "inner classes" that have access to the outer class's
    // variables. Since this isn't a static class, it's tied to a particular
    // instance of SLList and can access its instance variables.
    private class SLListIterator implements Iterator<Integer> {

        // For example, here we access the outer class's sentinel node.
        private IntListNode curr = sentinel.next;

        public Integer next() {
            // Check if we're out of items here
            if (!hasNext()) {
                throw new NoSuchElementException();
            }
            int toReturn = curr.item;
            curr = curr.next;
            return toReturn;
        }

        public boolean hasNext() {
            return curr != sentinel;
        }
    }
}
```

{% include alert.html content="
The code maintains an important invariant: prior to any call to `next`,
`curr` contains the index of the next value in the list to return.
" %}

We can then use our `SLList` class in an enhanced `for` loop.

```java
SLList friends = SLList.of(5, 23, 42);
Iterator<Integer> seer = friends.iterator();
while (seer.hasNext()) {
    int x = seer.next();
    System.out.println(x);
}
```

```java
SLList friends = SLList.of(5, 23, 42);
for (int x : friends) {
    System.out.println(x);
}
```

### Designing Iterators

Often, when writing our own iterators, we'll follow a similar pattern of doing
most of the work in `next`.

1. We save the item to output with `int toReturn = curr.item;`.
2. Move the current state to the next item with `curr = curr.next`.
3. Return the item we saved earlier.

An important feature of the code is that `hasNext` **doesn't change any
state**. It only examines existing state by comparing the progress of the
iteration to the number of list elements. `hasNext` can then be called any
number of times in a row and nothing should change, or it could be called not
at all and the iteration should still work as long as there are elements left
to be returned.

### Discussion: Iterator Invariants

Consider the following `SLListIterator`, slightly different from those we just
encountered.

```java
private class SLListIterator implements Iterator<Item> {
    private IntListNode curr = sentinel;

    public Integer next() {
        curr = curr.next;
        return curr.item;
    }

    public boolean hasNext() {
        return curr.next != sentinel;
    }
}
```

Now, discuss the following questions with your partner:

1. What's the invariant relation that's true between calls to `next`?
2. In general, most experienced programmers prefer the organization introduced
   first over this organization. What might explain this preference? Think
   about both writing the iterator, and debugging it while it's in use.

Finally, let's consider some questions about the order in which methods may be
called on an `Iterator`:

What if someone calls `next` when `hasNext` returns false?
: This violates the iterator contract so the behavior for `next` is undefined.
  Crashing the program is acceptable. However, a common convention is to throw a
  `NoSuchElementException`.

Will `hasNext` always be called before `next`?
: Not necessarily. This is sometimes the case when someone using the iterator
  knows exactly how many elements are in the sequence. For this reason, we can't
  depend on the user calling `hasNext` when implementing `next`, and don't
  typically change any state in `hasNext`.

### Exercise: `AListIterator`

As mentioned before, it is standard practice to use a separate iterator object
(and therefore a separate, typically nested class) as the actual `Iterator`.
This separates the `Iterator` from the underlying data structure or *iterable*.

Modify the provided `AList` (array-backed list) class so that it `implements`
`Iterable<Item>`. Then,
add a nested `AListIterator` class which implements `Iterator<Item>`. Note that if
you submit to the autograder before you implement this, your code likely will say
that there are compilation errors coming from the autograder tests (you will see
errors like "error: cannot find symbol" for calls to `a.iterator` or similar). Once
you have properly completed this, the errors should go away. **Likewise, if you want 
to test locally, you'll need to uncomment the test method in `AListTest.java`, and 
make sure it doesn't have compilation errors.**

{% include alert.html content="
Note that `AList` itself does not implement `Iterator`. This is why we need
a separate, nested, private class to be the iterator. Typically, this class
is nested inside the data structure class itself so that it can access the
internals of the object that instantiated the instance of the nested class.
See `SLList` above for an example.
Make sure that you've completed the following checklist.

1. Does your `AList` object know anything about its `AListIterator`'s
   state? Information about iteration (index of the next item to return)
   should be confined to `Iterator` alone.
2. Are multiple `Iterator`s for the same `AList` object independent of each
   other? There can be multiple `Iterator`s for a single `AList` object, and
   one iterator's operation should not affect the state of another.
3. Does `hasNext` alter the state of your `Iterator`? It should not change
   state.
4. If there are no more elements left in the `Iterator` and the user tries to call
   `next()`, throw a NoSuchElementException with the line `throw new NoSuchElementException();`
" %}

After you have modified your `AList` class, write some test code to see if
Java's enhanced `for` loop works as expected on your `AList`.

### Concurrent Modification

For our lab, we regarded our data structure to be "frozen," while the
`Iterator` was at work. In other words, we assumed that while we were operating
on the iterators, the data structure would remain as is. However, this is not
generally true in the real world.

```java
ArrayList<BankAccount> accounts = ...;
Iterator<BankAccount> it = accounts.iterator();
while (it.hasNext()) {
    // Remove the next account!
    accounts.remove(0);
    checkValidity(it.next()); // Wait, what?
}
```

If all clients of the data structure were to only read, there would be no
problem. However, if any were to modify the data structure while others are
reading, this could break the fundamental invariant that `next` returns the
next item if `hasNext` returns true!

To handle such situations, many Java iterators throw
`ConcurrentModificationException` if they detect that the data structure has
been externally modified during the iterator's lifetime. This is called a
"fail-fast" behavior.

Your main takeaway from this section should be that modifying data structures
while iterating over them is dangerous!

## Error-Handling

Above, we mentioned `NoSuchElementException` and
`ConcurrentModificationException`. We've also (probably)
seen `NullPointerException` and `ArrayIndexOutOfBoundsException`, among others
before. These are errors, but why does Java stop the entire program when it
hits an error, and is there any way to avoid it?

So far in this course, we have not dealt much with error-handling. You were
allowed to assume that the arguments given to methods were formatted or
structured appropriately. However, this is not always the case due to program
bugs and incorrect user input. Here are a few examples of this:

1. Bugs in your programs might create inconsistent structures or erroneous
   method calls (e.g. division by zero, indexing out of bounds, dereferencing a
   null pointer).
2. Users (or the outside world in general) cannot be trusted to give valid
   input (e.g. non-numeric input where a number is required or search failures
   where a command or keyword was misspelled).

We assume in the following discussion that we can detect the occurrence of an
error and at least print an error message about it.

A big challenge in dealing with an error is to provide information about it at
the right level of detail. For instance, consider the error of running off the
end of an array or list. If the contents of a list are inconsistent with the
number of elements supposedly contained in the list, you might end up trying to
"reference through a null pointer" or "index out of bounds". What should happen
in this case?

### Discussion: Error Handling

The programmer may wish to pass information about the error back to the caller
method with the hope that the caller can provide more appropriate and useful
information about the root cause of the error and perhaps be able to deal with
the error. However, this may be difficult.

Here are three approaches to error handling:

- Don't try to pass back any information to the caller at all. Just print
  some kind of error message (hopefully a useful one?) and stop the entire
  program.
- Detect the error and set some global error indicator (like a `public static`
  variable in Java) to indicate its cause.
- Detect the error and directly "return" the error information. This typically
  is handled with a particular return type that indicates a possible error, or
  by passing in a mutable argument that can be set to indicate the error.

Different languages geared towards solving different types of problems take
different approaches to error handling. Some newer languages, such as [Go][], and
[Rust], for example, support a design similar to the third option.

[Go]: <https://go.dev/blog/error-handling-and-go>
[Rust]: <https://doc.rust-lang.org/book/ch09-00-error-handling.html>

Which seems most reasonable? Discuss with your partner, and defend your answer.
If none, justify why all the options are bad.

### Exceptions

There is a fourth option for handling errors, called an *exception*. Provided
by Java and other modern programming languages, including C++ and Python, an
exception signals that an
error of some sort has occurred. Java allows both the *signaling* of an error
and selective *handling* of the error. Methods called between the signaling
method and the handling method need not be aware of the possibility of the
error.

An exception is *thrown* by the code that detects the exceptional situation,
and it is *caught* by the code that handles the problem, if any.

{% include alert.html content="
Read Chapter **[6.2](https://joshhug.gitbooks.io/hug61b/content/chap6/chap62.html)** of the online textbook to learn more
about exceptions.
" %}

To manually throw an exception, we use the `throw` keyword, along with the
exception instance we're throwing:

```java
throw new RuntimeException("yeet");  // Ideally you'll write better error messages...
```

If we want to do anything with the exception, such as gracefully continuing
the program, or printing a better error message, we'll need to catch it with
a `try catch` block.

```java
try {
    // code that might throw an exception
} catch (IOException e) {  // We have to catch a specific type of exception
    // Let's handle the exception somehow.
}
```

Different exceptions will have different constructors. We can also define our
own exception classes, but this is out of scope.

An extension to the `try catch` block construct that often comes in handy is
the `finally` block. A `finally` block comes after the last `catch` block and
is used to do any cleanup that might be necessary, such as releasing resources
the `try` block was using. This is very common when working with input-output
like opening files on your computer.

```java
Scanner scanner = new Scanner(System.in);
int k;
try {
    k = scanner.nextInt();
} catch (NoSuchElementException e) {
    // Ran out of input
} catch (InputMismatchException e) {
    // Token isn't an integer
} finally {
    // finally will be executed as long as JVM does not exit early
    scanner.close();
}
```

This use of the `finally` block so common that the Java language developers
introduced the `try-with-resources` block. It allows you to declare resources
being used as part of the try block, and automatically release those resources
after the block finishes executing. The code below is equivalent to the snippet
above, but it doesn't use the `finally` block.

```java
int k;
try (Scanner scanner = new Scanner(System.in)) {
    k = scanner.nextInt();
} catch (NoSuchElementException e) {
    // ran out of input
} catch (InputMismatchException e) {
    // token isn't an integer
}
```

{% capture alertContent %}
Even though we've presented exceptions last, this is solely because Java uses
them as its error-handling mechanism. This shouldn't be interpreted as
"exceptions are the best method of error-handling".

Exceptions, similar to the other methods, of error-handling, have benefits
and drawbacks. What are some of these benefits and drawbacks?
{% endcapture %}
{% include alert.html type="warning" content=alertContent %}

## Deliverables

Here's a quick recap of the tasks you'll need to do to complete this lab:

- Make the `User` class implement `Comparable`.
- Make `AList` implement `Iterable`, as well as adding your iterator class to the `AList.java` file.

Additionally, you'll need to work with exceptions in Gitlet, so
understanding those will be helpful as well.

Be sure to submit to Gradescope and add your partner if you have one!
