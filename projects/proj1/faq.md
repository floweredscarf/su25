---
layout: page
title: "FAQ - Project 1"
nav_order: 4
parent: >-
  Project 1: Deques
grand_parent: Projects
has_children: false
has_toc: false
has_right_toc: true
description: >-
  Project 1 FAQ.
released: true

# layout: page
# title: "Project 1A: LinkedListDeque"
# nav_order: 1
# parent: >-
#   Project 1: Deques
# grandparent: Projects
# has_children: true
# has_toc: false
# has_right_toc: true
# description: >-
#   Project 1 spec.
# released: true
---
#### Misc
##### I'm getting an error in TestGuitarString.java - it's not recognizing StdAudio!

Change introcs to algs4 in the import statement and it will work. Alternatively, you can `git pull skeleton main` if you haven't made any changes to other pieces of the code yet.

#### Deque

##### I'm getting a "Required Type is Deque but provided is ..."

There are two possible issues. Make sure you haven't accidentally imported java.util.* (or java.util.LinkedList or java.util.ArrayList). The other possible issue comes with an issue in your class signature.

##### How do I test printDeque()? Doesn't it return nothing?

For printDeque(), just write a test that calls the method and visually confirm that it's working. Don't worry about adding any junit methods to this specific test!

##### I'm getting an error when trying to @Override getRecursive() in ArrayDeque.java.

Your Deque.java interface should not specify a method getRecursive() (that would be saying that every class that implements Deque.java should also implement getRecursive(), which is misleading. Rather, Deque.java should not contain getRecursive(), and omit the @Override tag in your implementation in LinkedListDeque.

##### I'm getting an API error asking me to remove or make my isEmpty() method private.

Currently our grader doesn't recognize an implementation of isEmpty within ArrayDeque or LinkedListDeque. Please follow the spec and provide a default implementation within the Deque.java file.

##### Why am I getting "cannot resolve symbol LinkedListDeque" in LinkedListDequeTest.java?

For the code to compile, you must first create a new file called LinkedListDeque.java inside of deque/ . This can be done in IntelliJ by right-clicking on the deque/ folder, then going to New->Java Class (name it LinkedListDeque).

##### Intellij is telling me "The method ... of type LinkedListDeque has the same erasure as ... of type Deque but does not override it."

You probably forgot the generic `T` in the implements line of your class signature (i.e. you wrote
`implements Deque` instead of `implements Deque<T>`).
If you used something other than `T` for your generic type parameter, use that instead.

##### Q: How should I print the items in my deque when I don't know their type?

A: It's fine to use the default String that will be printed (this string comes
from an Object's implementation of `toString()`, which we'll talk more about
later this semester).  For example, if you called the generic type in your
class `Jumanji`, to print `Jumanji j`, you can call `System.out.print(j)`.

##### Q: I can't get Java to create an array of generic objects!

A: Use the strange syntax,
i.e. `T[] a = (T[]) new Object[1000];`. Here, `T` is a generic type, it's a placeholder for other
Object types like "String" or "Integer".

##### Q: I tried that but I'm getting a compiler warning?

A: Sorry, this is something the designers of Java messed up when they introduced
generics into Java. There's no nice way around it. Enjoy your compiler warning.
We'll talk more about this in a few weeks.

##### Q: How do I make my arrows point to particular fields of a data structure?
In your diagram from lecture it looked like the arrows were able to point to the
middle of an array or at specific fields of a node.

A: Any time I drew an arrow in class that pointed at an object, the pointer was to
the ENTIRE object, not a particular field of an object. In fact it is
impossible for a reference to point to the fields of an object in Java.

#### Guitar Hero

##### I'm getting a "class file contains wrong class" error.

Make sure all of your Java files have the right package declaration at the top.
Also make sure that anything that is part of the `gh2`
package is in a folder called "gh2".

##### I'm getting a message that I did not override an abstract method, but I am!

Chances are you have a typo. You should always use the @Override tag when
overriding methods so that the compiler will find any such typos.

##### When I try to run the provided tests I get "No runnable methods".

Make sure you've uncommented the tests, including the `@Test` annotation.


##### When I try to compile my code, it says type K#1 is not compatible with type K#2, or something similar.

If you're defining an inner class, make sure it does not redeclare a new generic
type parameter, e.g. the first `<Z>` given in `private class MapWizard<Z>
implements Iterator<Z>{` should not be there!

##### I'm getting a strange autograder error!

While `GuitarString` is a guitar string simulator, it should not involve playing
any sounds. The playing should be done by the `GuitarString` client.
