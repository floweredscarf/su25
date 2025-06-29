---
layout: page
title: >-
  FAQ
parent: >-
  Lab 06: Linked List Enhancements
grand_parent: Labs
has_right_toc: true
released: true
---
### My `assert` statement is failing, but shows that the `SLList`s are the same?

Take a look at the `equals` implementation - it has the line
`if (size != other.size) return false;`. That is, two lists must have the same
size to be considered equivalent.

Make sure that your list size is correct!
