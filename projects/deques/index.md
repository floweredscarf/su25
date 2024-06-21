---
layout: page
title: "Project 1: Deques" # Title of page.
tags: [Project]
released: true
searchable: true
---


### Quick Links

**Please read through this page before clicking on the links below, we've linked them here for your conveienece**.

Here are the links to the 3 sub parts of the project. 
 - [Project 1a](./proj1a) 
 - [Project 1b](./proj1b)
 - [Project 1c](./proj1c) 


## Introduction

### Due Dates

The due date for this project is **Sunday, June 30th, 11:59 PM**. You cannot use slip days on projects, though you can turn in up to 2 days late for partial credit.

The Project 1 Checkpoint is worth 1 point and due **Thursday, June 27th, 11:59pm**. You will need to complete Project 1A to complete the checkpoint.

### The Deque API

The double ended queue is very similar to the SLList and AList classes that
we've discussed in class. Here is a definition from
[cplusplus.com](http://www.cplusplus.com/reference/deque/deque/).

>Deque (usually pronounced like "deck") is an irregular acronym of double-ended
queue. Double-ended queues are sequence containers with dynamic sizes that can
be expanded or contracted on both ends (either its front or its back).

Specifically, any deque implementation must have exactly the following
operations:

* `public void addFirst(T item)`: Adds an item of type `T` to the front of the
deque. You can assume that `item` is never `null`.
* `public void addLast(T item)`: Adds an item of type `T` to the back of the
deque. You can assume that `item` is never `null`.
* `public boolean isEmpty()`: Returns `true` if deque is empty, `false` otherwise.
* `public int size()`: Returns the number of items in the deque.
separated by a space. Once all the items have been printed, print out a new line.
* `public T removeFirst()`: Removes and returns the item at the front of the
deque. If no such item exists, returns `null`.
* `public T removeLast()`: Removes and returns the item at the back of the
deque. If no such item exists, returns `null`.
* `public T get(int index)`: Gets the item at the given index, where 0 is the
front, 1 is the next item, and so forth. If no such item exists, returns `null`.
Must not alter the deque!


Your deques should accept any generic type (not just integers). For information
on creating and using generic data structures, see [these slides](https://docs.google.com/presentation/d/19TTe3JgFscc4RLwokvQ_gOM72DSrfs9Y6ZST_fv3aQ4/edit#slide=id.g829fe3f43_0_511).

So... we've defined a bunch of methods that any Deque should have. There are two specific ways we want you to implement a Deque (one powered by a Linked List, and the other by an array), but ultimately, they'll have the same methods and external behavior. Have we learned about any programming tools that could enable us to do this? If you said, "Of course, silly, that sounds like an interface", then you would be correct (and we would be silly)!


### Project Structure and Grading

This project is divided into 3 sub parts, and there will be separate skeleton files and gradescope assignments for each sub part. The entire project is worth 30 points or 10% of your grade.

 - [Project 1a](./proj1a) : You'll be implementing a Deque backed by a linked list. You should start the project here. This part is worth 12 points.
 - [Project 1b](./proj1b) : You'll be implementing a Deque backed by an array. This part is also worth 12 points. 
 - [Project 1c](./proj1c) : You'll be adding extra features and functionality to your Deque implementations and using them for a cool application. 5 points

Additionally, you must complete the Project 1 Checkpoint (which requires Project 1a to be complete) by **Thursday, June 27th, 11:59pm**. There is a separate Gradescope assignment for the Checkpoint, worth 1 point.


