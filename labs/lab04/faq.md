---
layout: page
title: "FAQ - Lab 4: Primitives and Objects"
categories: lab
released: true
searchable: true
---
### I'm getting a fatal: Need to specify how to reconcile divergent branches when trying to pull from the skeleton.

Git is trying to figure out how to merge the code in the remote (skeleton)
and what you have locally. Run `git config --global pull.rebase false`,
then try pulling again. It should work!

### I'm getting a NullPointerException in Account.java. What is this?

A null pointer exception is occurs when you try accessing a field or method of a null object. 
For instance, let's say that you try to access a parent account (let's say you called it parent).
However, sometimes a given account won't have a parent! So, if I try calling parent.getBalance(), since
parent is a reference to a null object, and null objects don't have methods, you'll get this exception.

You can fix a null pointer exception by first checking to see if the object you're trying to call a method/
access a field is null.

### All my tests are passing locally, but I'm failing one last test on Gradscope for `Account.java`

You're likely not handling overdraft protection correctly. If `JediAccount` has a parent account `EthanAccount`, and
`JediAccount` has 5 dollars and `EthanAccount` has 10 dollars, trying to withdraw 20 dollars from `JediAccount` should not
remove the 5 dollars from `JediAccount` since the amount in `JediAccount` and the parent accounts is not enough to cover the withdrawal.

Additionally, remember to return the right boolean for each account!

### So...what's the deal with this iterate method? I don't understand what's going on and need a hint.

For the iterate method, you're going to need to update your two instance variables - `curr` and `next`.
Note that they're both `Point` objects, so make sure you understand the Point.java class! Updating `curr`
is pretty simple - you just need to make sure that the x-coordinate of `curr` is assigned to the
x-coordinate of `next` (and the same for the y-coordinate of `curr`). As for `next`, use `dx` and `dy` to update
the existing values by adding them (e.g. add `dx` to next's x-coordinate to properly update it).
Note that x and y are both private variables, so take advantage of the getter methods to help you access them!

<cite>Paraphrased from Shreyas Kallingal</cite>
