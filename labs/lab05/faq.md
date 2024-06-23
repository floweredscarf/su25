---
layout: page
title: "FAQ - Lab 5: Linked Lists Enhancements"
categories: lab
released: true
searchable: true
---
### I've written some tests locally for reverse and they pass, but the autograder doesn't pass on similar tests!

There was an issue in `SLList.java` in how the equals method was implemented. The skeleton has been fixed, so you can either re-pull 
from the skeleton or (better yet), add the following line of code right before the last line in equals method (`return true`)

`if (l1 != sentinel || l2 != slList.sentinel) {
                return false;
        }`

### `assertEquals` is failing, but shows that the `SLList`s are the same?

Take a look at the `equals` implementation - it has the line
`if (size != slList.size) return false;`. That is, two lists must have the same
size to be considered equivalent. However, `toString` does not use the size;
it uses the sentinel node.

Make sure that your list size is correct!
