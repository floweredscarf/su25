---
layout: page
title: >-
  FAQ - Lab 4B
parent: >-
  Lab 4B: Linked List Enhancements
grand_parent: "Lab 04: Linked Lists"
has_right_toc: true
released: true
---
### `assertEquals` is failing, but shows that the `SLList`s are the same?

Take a look at the `equals` implementation - it has the line
`if (size != slList.size) return false;`. That is, two lists must have the same
size to be considered equivalent. However, `toString` does not use the size;
it uses the sentinel node.

Make sure that your list size is correct!
