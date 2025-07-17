---
layout: page
title: >-
  FAQ
parent: >-
  Lab 14: Heaps and Priority Queues
grand_parent: Labs
has_right_toc: true
released: true
---

### My `bubbleDown` might be wrong, but I think that I've written it correctly.

Here's a few possibilites:

- What if the current index does not have a right child but needs to swap with
  its left?
- Make sure that you update the index to the same one you swapped with.
