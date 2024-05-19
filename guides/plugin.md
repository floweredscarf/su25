---
layout: page
title: Installing and Using the IntelliJ Plugin
author: Eli Lipsitz
tags: [Guide]
released: true
---

This document will guide you through installing and using the CS 61B IntelliJ
plugin. This guide assumes that you already have IntelliJ installed.

## Installing

Begin the setup process by starting up IntelliJ. If you're on one of the lab
computers, use the command `/share/instsww/bin/idea.sh` in a terminal window to
start IntelliJ. Then follow the steps below.

1. In the *Welcome* window, click the **Configure -> Plugin** button on the
   bottom right of the window.

2. Click the button labeled **Browse Repositories...** on the bottom.
   ![Browse Repositories](img/plugin-install-1.png)

3. In the window that appears, enter "CS 61B" in the search bar at the top. The
   CS 61B plugin entry should appear.

4. Click the green **Install** button.
   ![Browse Repositories](img/plugin-install-2.png)

5. Wait for the plugin to download and install

6. Click the grey **Restart IntelliJ IDEA** button to finalize the
   installation.

## Style Checking

In this class, you will eventually be required to make sure your code conforms
to the official style guide. The plugin includes a helpful style checker, which
will check your code and inform you of any style errors and their locations.

To run the style checker, simply right click any file or directories you want
to check, and select **Check Style** in the menu that appears.

![Check Style Menu](img/plugin-checkstyle-button.png)

Click it, and the style checker will run. A tool window will appear with the
results of the style check, and a list of any errors. Click the links to jump
directly to the problematic line of code.

![Check Style Results Tool Window](img/plugin-checkstyle-results.png)

## Java Visualizer

The plugin contains a built-in version of the Java Visualizer, a tool similar
to the Python Tutor visualizer you may have used in CS 61A. This tool is
intended to help you debug and understand your code, and is integrated into
IntelliJ's Java debugger.

To use the built-in visualizer, debug your code, setting breakpoints as
necessary. When your code stops, you can click the Java Visualizer icon:

![Java Visualizer Button](img/plugin-visualizer-button.png)

The Java Visualizer will appear, displaying the stack of the currently paused
program:

![Java Visualizer In Action](img/plugin-visualizer-inaction.png)

As you continue to step through and pause your code, the visualizer display
will update accordingly to show you what's going on in your program.
