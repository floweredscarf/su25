---
layout: page
title: "Lab 1 Setup: Linux/Unix"
categories: lab
released: true
---

## A. Setup

We only officially support Ubuntu 22.04 or later version in this class but the setup process for other distributions should be very similar.

Setting up Linux for 61BL is super easy, all you have to do is use your package
manager (apt, yum, etc) to install the Java JDK, git and gh.

To install the Java JDK, Git and gh on Ubuntu:

```sh
sudo apt install openjdk-17-jdk git gh
```

You can also install Intellij using:

```sh 
sudo snap install intellij-idea-community --classic
```

If Intellij installs succesfully without errors with this command, skip over the download section for Intellij in the main lab. 

