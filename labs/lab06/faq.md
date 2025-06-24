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
### `assertEquals` is failing, but shows that the `SLList`s are the same?

Take a look at the `equals` implementation - it has the line
`if (size != slList.size) return false;`. That is, two lists must have the same
size to be considered equivalent. However, `toString` does not use the size;
it uses the sentinel node.

Make sure that your list size is correct!
