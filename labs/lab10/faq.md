---
layout: page
title: >-
  FAQ
parent: >-
  Lab 10: Binary Search Trees
grand_parent: Labs
has_right_toc: true
released: true
---

### I'm failing the test locally printing the inOrder and preOrder traversals, and I've tried switching the tests in the skeleton.

If you're a Windows user and you've switched to the commented out test, remove the space after the E in "A B C D E " and it should work now.

### What is `<T extends Comparable<T>>`?

This is an example of generics made less, well, generic. Programmers
can specify requirements for what defines a legal type for a generic in 
Java by utilizing general inheritance notation. This means that this generic
can hold any type `T` which `extends` the class `Comparable<T>`


### I am getting a return value from a call to compareTo that is not 1, 0, or -1?

`compareTo` can return any int. We interpret the return value as such: any call of the form
`key.compareTo(value)` will be less than zero if `key` comes before `value`, the item it is being compared to.

### I want to implement this method recursively, but I can't keep track of or pass the values I need to!

The method signature required by the autograder might not be optimal for recursive implementations. 
What do we do in such a case? Hint, helpers!
