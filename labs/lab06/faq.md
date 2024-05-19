---
layout: page
title: "FAQ - Lab 6: Inheritance"
categories: lab
released: true
searchable: true
---
## Dynamic method selection is so confusing!

[Here](https://drive.google.com/file/d/1I0vGBk-jF9bd7_SdqQcnbKQVsDDt_geq/view) is Allyson's 
DMS flowchart from a few semesters ago. You can follow the steps in it methodically
to figure out how lines compile and run. [Here](https://docs.google.com/presentation/d/1l9kslV4XB46fOOyD-hiXxi4sK-lmtFg9rMHRmS7_S5k/edit?usp=sharing) is Crystal's version, which is typed up.

## `ListSet`

### Why does `ListSet::remove` have that given line?

As mentioned in the comment, the reason that we need the line is out of scope.
Specifically, the `List` interface has two `remove` methods:

- `remove(int index)`, that removes an element at a *specific index*
- `remove(Object elem)`, that removes a *specific thing* from the list

We would like to use the latter, so we must "autobox" the given `int` to
`Integer` with the given assignment statement.

## `BooleanSet`

### Do we have to handle inputs outside \[0, `maxElem`\] (inclusive)?

No.