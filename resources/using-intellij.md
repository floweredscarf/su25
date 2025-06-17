---
layout: page
title: "Using IntelliJ"
parent: Resources
---

# Using IntelliJ

Authors: Matt Owen, Eli Lipsitz

## IntelliJ Documentation

As we have mentioned, IntelliJ is an IDE that is widely used in industry which has its advantages and disadvantages for you. This means you will learn how to use a real tool, one that you might keep using for years after you graduate. IntelliJ is also incredibly powerful and can allow you to code in ways perhaps unlike anything you have seen before in previous classes. As it is widely used, they have dedicated resources to maintaining documentation.

[IntelliJ's official help site has a thorough guide.](https://www.jetbrains.com/help/idea/getting-started.html)

[IntelliJ's official documentation has many helpful video tutorials.](https://www.jetbrains.com/idea/documentation/) 

By looking at these links you can notice one disadvantage of using IntelliJ is that there are so many features and configurable settings that it can be overwhelming. Their documentation and videos often might mention things you have never heard of, but that does not mean you won't be able to use IntelliJ effectively in this class. We will do our best to make this process as painless as it can be for you, and hopefully will help to make you more efficient in programming. 

Out of the guide and tutorial videos, we have found the following pages / videos to help jump start learning how to develop in IntelliJ. You don't have to watch all these videos before using IntelliJ. Instead, treat these videos as a reference that you can look at whenever you're stuck. If you have time, you can explore the listed resources and try to experiment with different workflows that work for you.

- [Overview of the user interface](https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html): This is a very high level overview which explains some of the various different windows and names IntelliJ uses to describe them. Understanding this will help you to understand their other reference material.
- [Discover IntelliJ IDEA](https://www.jetbrains.com/help/idea/discover-intellij-idea.html): This guide is longer and explains some of the most important functionality of the IDE along with helpful keyboard shortcuts that can be used. Feel free to just skim this for now, and again if there are sections which use vocabulary you are unfamiliar with that is fine. Some parts of this guide refer to features that we will not use. If the rest of the documentation feels too large, this is a one stop shop which contains explanations of most of the functionality we will use this semester.
- This video shows how to efficiently navigate the IDE with minimal mouse / trackpad action. A lot of the features presented in this video are not needed for use of the editor, but can make you quicker at getting things done. If you have the time try to watch this and if possible follow along. Even just knowing that this functionality exists can be useful for the future.

<div style="position: relative; width: 100%; padding-top: 56.25%"><iframe style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; height: 100%; width: 100%; margin: auto" src="https://www.youtube.com/embed/1UHsJyCq1SU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

- This video shows the power of code generation within IntelliJ. Again the features shown here are more advanced than what you will likely need to succeed in this class, but when watching try to pick up on new things that you can work into your use of the IDE

<div style="position: relative; width: 100%; padding-top: 56.25%"><iframe style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; height: 100%; width: 100%; margin: auto" src="https://www.youtube.com/embed/sx7_SS8y-_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


## CS 61B Plugins

This guide assumes that you already have IntelliJ installed, as well as the plugins from Lab 1, and update the plugins to their most recent versions.


### Java Visualizer

This plugin contains a built-in version of the Java Visualizer, a tool similar to Python Tutor which you may have used in CS 61A or other previous courses. This tool is intended to help you debug and understand your code, and is integrated into IntelliJ's Java debugger. Students often find this helpful to transition to debugging in IntelliJ, and unfortunately at some point in the semester the code we will be running will become too complicated for the visualizer.

To use the built-in visualizer you must be debugging your code, so you can follow along the steps above to start the debugger again. When your code stops at a breakpoint, you can click the Java Visualizer icon:

![java-viz-1](../using-intellij-img/java-viz-1.png "Java Visualizer Start")

After clicking this button, the Java Visualizer will appear, displaying the stack of the currently paused program as well as a diagram of the different variables.

![java-viz-2](../using-intellij-img/java-viz-2.png "Java Visualizer in Action")

As you continue to step through and pause your code, the visualizer display will update accordingly to show you what's going on in your program.


### Style Checking ###

In this class, your code must conform to the [official style guide](/resources/style-guide). The CS61B plugin includes a helpful style checker, which will check your code and inform you of any style errors and their locations.

To run the style checker, simply right click any file or directories you want to check, and select **Check Style** in the menu that appearss

![check-style-1](../using-intellij-img/check-style-1.png "Check Style")

After clicking it the style checker will run. A tool window will appear with the results of the style check, and a list of any errors. Click the links to jump directly to the problematic line of code:

![check-style-2](../using-intellij-img/check-style-2.png "Checked Style")