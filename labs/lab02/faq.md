---
layout: page
title: >-
  FAQ
parent: >-
  Lab 02: Conditionals, Loops, and Arrays
grand_parent: Labs
has_right_toc: true
released: true
---

### When I try to push, I get the error "failed to push some refs"

If you see a hint that says "Updates were rejected because the tip of your
current branch was behind its remote counterpart", then read
[this section of the Git WTFS](../../guides/git-wtfs.md#error-failed-to-push-some-refs).

### On Gradescope, I'm missing required files

First, make sure that you've pushed your code! You can check this by viewing
your repository on GitHub.

Secondly, the expected file structure (including the optional files) is

```text
su24-***
├── magic_word.txt
├── src
│   └── AddingMachine.java
│   └── Arithmetic.java
│   └── ArrayOperations.java
│   └── TriangleDrawer.java
│   └── TriangleDrawer2.java
│   └── TriangleDrawer.stuff
└── tests
    └── ArithmeticTest.java
    └── ArrayOperationsTest.java

```

Note that the files are inside the `lab01` directory. If the files aren't
inside `lab01`, then the autograder won't be able to find them.

### I'm using Mac, and after I install Java, it's not showing up in IntelliJ or in `JavaVirtualMachines`

### I'm using Mac, and I get "Unable to load Java Runtime Environment"

Run `brew reinstall java`, and look for the command that starts `sudo ln`,
right under "For the system wrappers to find this JDK...". Copy-paste and
run that command.

After this, your newly installed Java should appear in IntelliJ.

### In IntelliJ, I get "release version 18 not supported"

Go into File > Project Structure > Project Settings > Project, and make sure
that your Language level is set to 17.
