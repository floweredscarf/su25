---
layout: page
title: "Lab 7: ADTs, Interfaces, and Collections"
tags: [Lab, Collections, Interfaces, ADTs]
released: false
searchable: true
---

## [FAQ](faq.md)

This assignment has an [FAQ page](faq.md).

## Before You Begin

Pull the code for Lab 7 and import it into IntelliJ.

## Learning Goals

First, we'll look at some classes we've written so far, and identify patterns
in what we can *do* with them. We will connect this idea to *abstract data
types*, then tie them to a feature of Java's
inheritance system, called *interfaces*. This
feature allows us to make a more complicated system of class interrelations
than we have seen previously, and its correct utilization of is
key to being able to write generalizable and neat code.

Once introduced, we will use this concept to explain the workings of the
Java *Collections* Framework, which contains many of the data structures you've
encountered before. Finally, we'll write our own implemetations for a
simplified abstract data type.

## Motivation

{% capture alertContent %}
Read chapter **[4.1][]** and the "ADTs" and "Java Libraries" sections of
chapter **[4.4][]** of the online textbook. The textbook provides motivation
for learning **interfaces**. We will first cover **abstract data types** (ADTs) as a
motivation for learning interfaces, discuss various ADTs and their
implementations in Java, then jump into implementing a few of our
own.

[4.1]: https://joshhug.gitbooks.io/hug61b/content/chap4/chap41.html
[4.4]: https://joshhug.gitbooks.io/hug61b/content/chap4/chap44.html
{% endcapture %}
{% include alert.html content=alertContent %}

## Abstract Data Types

In the first weeks of CS 61BL, we've implemented two classes that have (or
could reasonably have) many of the same methods: `SLList` and `DLList`:

```java
public void add(int index, Item item);
public void addFirst(Item item);
public void addLast(Item item);
public Item get(int index);
public Item getFirst();
public Item getLast();
public void remove(Item item);
public Item removeFirst();
public Item removeLast();
public int size();
```

It seems like this list of methods could exist and have meaning *separate*
from any actual implementation. We call a collection of methods -- a
description of what we can do with a collection of data -- an **abstract
data type**.

`SLList` and `DLList` are particular kinds of lists, an abstract data type
that has the methods listed above. Let's say that we use someone's code that
defines another kind of list called `MysteryList`. Even though we might not
know how its implementation works, we know that it can do at least everything
a `List` can - because it's a `List`!

## Interfaces

In Java, we can specify ADTs with interfaces, "classes" that define a specific
set of behavior. Specifically, they provide the method signatures for all the
required methods. Generally, interfaces do not have method implementations,
because they only describe what they can do, not how they do it. This also
means that interfaces cannot be instantiated.

If we can't directly instantiate them, then how do we use them? Let's think
back to what we said earlier:

> ADTs are a description of what we can do with a collection of data, and we
> can specify ADTs with interfaces in Java.

When we write code, we often don't care about the implementation details of the
data types we're using, and only care about what we can do with them.
Therefore, we should write code to work with the ADT (interface)!

This is the idea of **abstraction barriers**: we don't need to know how
the methods we use have been implemented, only that they exist and should
function according to their specification.

### Implementing Interfaces

<!-- I didn't write or read this big paragraph too carefully. -->

When a class **implements** an interface, it is giving a guarantee that it can
perform a certain functionality defined by its interface.
You'll find that the idea of an interface is actually very central to software
engineering in general. When you're asked to implement a set of methods to
perform some specific task, that's implementing an interface. Often when
working on a group project, a good approach is to split the work into parts
that will be integrated together at the end. In order to allow work to be done
in parallel, it is important to establish what each part will accomplish and
how it will interact with other parts so that they can be merged together
without issue. Establishing what each of these parts will do and how they
interact with other parts is essentially treating each part as an interface.
Using interfaces is all about *not knowing the actual implementation*, but
instead utilizing the input-to-output, defined behavior given by the interface;
implementing an interface to specification like you are asked for assignments
and projects is about making sure the program you write under some interface
gives the correct output for all inputs.

### Interfaces in Java

We'll use the following `SimpleList` interface, which has a few of
the methods for the list ADT discussed above.

```java
public interface SimpleList {

    /** Returns the integer stored at position i. */
    int get(int i);

    /** Adds k into the list at position i. */
    void add(int i, int k);

    /** Removes the item at position i. */
    void remove(int i);

    /** Returns the number of elements in this list. */
    int size();
}
```

An interface contains methods without bodies, or just method signatures. To
make a class *implement* this interface, we use the `implements` keyword:

```java
public class SLList implements MySimpleList {
    @Override
    int get(int i) {
        // ...
    }
    // ...
}
```

Some things to know about interfaces and related topics:

Implementations must implement all method signatures from the interface
: We can't partially implement an interface, because the implementation then
  does not meet all the requirements we have said it does.

`@Override`
: This method annotation is not *required* when implementing a method from an
  interface, but enforces that the method does override an interface method.
  This helps prevent typos, like accidentally defining `void ad(int i, int k)`,
  or `void add(int i)`, when we wanted to implement the interface method above.

Interface methods are public by default.
: Interfaces are a description of behavior (what we can do), and it doesn't
  make sense to describe things that we can't do outside the class.

Interfaces cannot have fields.
: Fields imply that the interface is storing some data, which implies that
  we are relying on its implementation -- which isn't allowed. The exception
  to this is that interfaces can have static constants (`static final`).

Classes can implement more than one interface.
: Classes can behave like multiple things at once. To have a class implement
  more than one interface, we use commas:

  ```java
  public class SLList implements SimpleList, ComplexList {
    // ...
  }
  ```

## ADTs in Java

We've talked about the list ADT. What other ADTs are commonly used, and in
what kinds of situations? What are their implementations in Java?

### Lists

Let's define the list ADT in a bit more detail:

A **list** is an ordered collection, or *sequence*, so the elements in a list
have *positions*. An element can appear as many times as desired, as duplicates
are allowed. Thus, they must support the following operations:

- `add`ing an element to the list at a specific index
- `remove`ing an element from the list at a specific index
- `get`ing an element at a position in the list
- `set`ting the element at a position in the list
- Checking if the list `contains` a given item
- Getting the `size` of a list

Java's [`List` interface][List] contains many more methods, but these are the minimum
methods that make Java's `List`s behave like our mental model of a list.

The `List` implementations that you will use most often is
[`ArrayList`][ArrayList]. Another common implementation is
[`LinkedList`][LinkedList], which is similar to our `DLList`.

[List]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/List.html>
[LinkedList]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/LinkedList.html>
[ArrayList]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/ArrayList.html>

### Sets

When might we want something other than a list? Consider (but don't
implement) the following problem:

> Write a program that counts the number of unique words in a large text file
> (such as the entire text of "War and Peace"). The program should output
> the number of unique words in the text file.

We could use a list, but the list ADT allows duplicate elements.
We'd like to use ADT that handles duplicate elements for us, so we can simplify
the code that we write. This is what the set ADT is for!

A **set** is a collection of *unique* items that is not necessarily ordered.
Sets must support following operations at a minimum:

- `add`ing an element to the set
- `remove`ing an element from the set
- Checking if the set `contains` a given item
- Getting the `size` of a set

There are two implementations of the [`Set` interface][Set] in Java that you will use
often:

- [`TreeSet`][TreeSet] keeps its elements in sorted order, and is fast.
- [`HashSet`][HashSet] does not keep its elements in sorted order, and is (usually) **really** fast.

[Set]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Set.html>
[TreeSet]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/TreeSet.html>
[HashSet]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/HashSet.html>

This is a concrete example of why interfaces are useful -- when we're writing
a method, we may not care about whether it's a `TreeSet` or a `HashSet`.
However, the code calling that method might need the ordering of the `TreeSet`
or the speed of the `HashSet` -- we don't know how our code is going to be used!
We can allow our code to
be used by both by writing our method for the `Set` interface, instead
of for `TreeSet` or for `HashSet`.

### Maps

Let's modify the above problem slightly:

> Write a program that counts the number of unique words in a large text file
> (such as the entire text of "War and Peace", which is 1225 pages!). The program should also
> be able to take a word as input, and output how many times that word appeared
> in the book.

Here, we really want something that relates words to counts. This is where we
can use the map ADT!

A **map** is a collection of key-to-value mappings, like a dictionary from
Python. A map is not necessarily ordered. Maps must support at least the
following operations:

- Change (`put`) the *value* that a particular *key* maps to.
- `get` the *value* that a particular *key* maps to.
- `remove` the value for a given *key*
- Checking if the map `contains` a given **key**

Similar to `Set`, There are two implementations of the [`Map` interface][Map] in Java that you will use
often:

- [`TreeMap`][TreeMap] keeps its *keys* in sorted order, and is fast.
- [`HashMap`][HashMap] does not keep its keys or values in sorted order, and is (usually) **really** fast.

[Map]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/TreeMap.html>
[TreeMap]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/TreeMap.html>
[HashMap]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/HashMap.html>

#### More About Maps

- To use a Java `Map`, you must specify two types: the key type, and the value
  type. This is distinct from `List`s and `Set`s, which only need to specify
  one type.

- Maps are a mapping from keys to values, but not values to keys. They store a
  relationship in *one direction*. For example:
  consider a map which had keys as emails, and the values as peoples' names.
  Given an email, I can find out who has that email. However, given a person, I
  can't easily find out their email using that map. I would need a different map
  going in the opposite direction (keys as peoples' names mapping to values as
  emails).

## Collections

Looking at the above ADTs, it seems like they also share some behaviors. We can
*add* elements, *remove* elements, check if the ADT *contains* a certain
element, and get the *size*. This looks like somewhere we can define a separate
ADT!

The collection ADT represents a *collection of data*. Most of the data
structures we will study the rest of this class are used to implement
collections. At the most general level, pretty much anything you use to store
multiple items at once is going to fulfill the requirements to be a
*collection*. Throughout this course, we will continue to
see implementations of these collections.

So, what does it mean (in Java) for a `List`, an ADT, to be a `Collection`,
another ADT? We say that interfaces can `extend` other interfaces:

```java
public interface List<Item> extends Collection<Item> {
    ...
}
```

This means that the `List` interface "inherits" all the methods in the
`Collection` interface... or that a `List` has all the behaviors
that a `Collection` has!

As seen above, the Java interface for collections is, unsurprisingly,
[`Collection`][Collection]. Typically, we'll implement the behaviors for a
particular kind of collection, rather than the `Collection` interface itself.

[Collection]: <https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Collection.html>

### Maps and Collections

Unlike **set** and **list**, `Map` is not a direct extension of the Java
`Collection` interface. This is because `Collection` specifies collections of
a single element type, but `Map` operates on key-value pairs. Instead, from
[Java's `Map` documentation][Map], "The Map
interface provides three *collection views*, which allow a map's contents to be
viewed as a set of keys, collection of values, or set of key-value mappings."

- `keySet()`, which returns a `Set` of all the keys. The keys are unique, so a
  set is an appropriate choice here.
- `values()`, which returns a `Collection` of all the values. The values are
  not necessarily unique, which is why we prefer a more general `Collection`
rather than a `Set`.
- `entrySet()`, which returns a `Set` of key-value pairs with a wrapper type
  called `Entry`. The entry class's job is just to hold the key and the value
together in a single class, so you can imagine that it might look something
like this.

    ```java
    public class Entry<Key, Value> {
        private Key key;
        private Value value;
        public Key getKey();
        public Value getValue();
        // ...
    }
    ```

These methods are vital when iterating over anything which implements the
`Map` interface.

[Map]: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Map.html

<!--
  TODO: this section is too hard to write, and I can't find good examples.
  I'm punting on it for SU22 in the interest of getting the lab out for QA.
  -Ethan
-->

<!-- 
### Task: Choosing Data Representations

For each of the below scenarios, discuss the following questions with your
partner:

-   What is a good data representation for the scenario?
-   What are some other things that we might want to do with this data?
-   Are these things made straightforward, or difficult by this data
    representation you chose earlier?

-   The CS 61B autograder needs to know which lab a given student is in, to
    compute the appropriate due date.
-->

## Exercise: Implementing Sets

We will implement two kinds of sets, with different underyling implementations.

The file `SimpleCollection.java` contains a simplified version of the
`Collection` interface which only accepts integers as members. The files
`SimpleSet.java` contains a simplified version of the `Set` interfaces.
Read both files so you can understand how interfaces and interface extension are
being used here, as well as to understand what each of the interfaces requires.

### `ListSet`

The file `ListSet.java` is an incomplete implementation of the `SimpleSet`
interface. It maintains uniqueness of a set of elements by storing
elements in an `ArrayList<Integer>`.

Implement the methods of the `ListSet.java` class, and use the
`ListSetTest.java` file to test your methods. We only provide a basic test,
so feel free to add more comprehensive tests to this file.

### `BooleanSet`

The file `BooleanSet.java` is an incomplete implementation of the `SimpleSet`
interface. It maintains uniqueness of elements in the set by storing a boolean
array `contains` for a range `[0, maxElement]`. This version of the `SimpleSet`
interface only deals with positive integers and uses a boolean array to keep
track of what values are currently in the `Set`. Check the example below:

![BooleanSet array](img/boolean-set-array.jpg)

Implement the methods of the `BooleanSet.java` class, and use the
`BooleanSetTest.java` file to test your methods. We only provide a basic test,
so feel free to add more comprehensive tests to this file.

### Tradeoffs

What are the tradeoffs between these two implementations? Neither one is
strictly "better" than the other in all situations, but when might we want to
use one of them? Discuss with your partner.

## Aside: Generics and Autoboxing

As you should remember from [Lab 6](../lab06/index.md), generics allow us to
define data structures without relying on the specific type of objects it holds.
This allows us to even further generalize our code, creating reusable data structures.

Autoboxing is an automatic conversion that Java performs when presented a **wrapper class**.
A wrapper class is a class that has been "wrapped" around a primitive data type so that
the programmer can rely on object oriented interactions. You may have seen some examples already,
such as `Integer.java` and `Double.java`. Automatic conversion
is performed between wrapper classes and the primitives they represent.

{% include alert.html content="
Read Chapter **[5.1][]** and **[5.3][]** which we skipped earlier, covering
**generics** and **autoboxing** in Java. These two topics will be helpful for
implementing data structures moving forward, though they aren't emphasized in this lab.
" %}

[5.1]: https://joshhug.gitbooks.io/hug61b/content/chap5/chap51.html
[5.3]: https://joshhug.gitbooks.io/hug61b/content/chap5/chap53.html

## Recap

We introduced a few key topics in this lab:

Abstract Data Types
: Abstract data types are defined to be some sort of data that is defined
  by a set of operations rather than the **implementation** of these operations.

Interfaces
: In Java, we can implement ADTs using interfaces. When a class implements an
  interface, the class must implement all the methods required by the
  interface.

`List`, `Set`, `Map`, and `Collection`
: Java has interfaces for several ADTs, and several implementations for each of
  these ADTs. If we want to write code using algorithms that work on ADTs,
  we can write code against these Java collection types.

## Deliverables

As a reminder, this lab has an [FAQ](faq.md).

For full credit, submit:

- Implement and test each method in `ListSet.java`.
- Implement and test each method in `BooleanSet.java`.

For the remainder of this lab, you can work on Project 1.
