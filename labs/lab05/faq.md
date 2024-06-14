---
layout: page
title: "FAQ - Lab 5: Linked Lists"
categories: lab
released: false
searchable: true
---

### In lecture we were talking about IntLists; what are these Linked Lists you speak of?

Linked List refers to a specific structure: items that are stored in nodes which are aware of the node
that follows them. Sometimes when we are talking about Linked Lists, we refer to them by specifying the 
*type* of the item, followed by "List". This means that IntLists are Linked Lists which only hold items of
type int!

### The internet keeps referring to "value" and "rest" when talking about Linked Lists -- what is that?

There are multiple ways to define and interact with Linked Lists. In this course, we use "item" to refer to the
data being stored by each node and "next" to refer to the element immediately following the current node. Other implementations,
however, are also completely valid. It is very likely in searching the internet you will see "item" referred to as "value"
and "next" referred to as "rest" -- meaning recursive access to the rest or remaining segment of the Linked List.

### My code does not change the "value" of any of the nodes -- why am I not passing constructive concatenate?

Make sure you aren't changing the other element of each node, their "next" pointer! This is a vital part of your Linked List as well!
