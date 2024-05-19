---
layout: page
title: "FAQ - Lab 16: Tries"
categories: lab
released: false
searchable: true
---

### How should I get started with keysWithPrefix()? I have no idea how to approach this problem.

There are a lot of ways of approaching it, but here's one way of approaching the problem:

Step 1: Verify that the prefix actually exists in your trie! If the prefix is an empty string or that sequence of characters isn't in there, you should return an empty List.

Step 2: Once you've verified that the prefix exists in your trie, you can recursively assemble all of the Strings in your trie containing that prefix. As you go, you should check if a given Node is a valid key, then call that recursive method on the String you have so far, concatenated with the character at that node (do this **for** every valid child of your given Node)!
