---
layout: page
title: "FAQ - Lab 7: ADTs, Interfaces, and Collections"
categories: lab
released: false
searchable: true
---

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
