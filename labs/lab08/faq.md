---
layout: page
title: "FAQ - Lab 8: Persistence and Gitlet"
categories: lab
released: true
searchable: true
---

### General Tips

These are tips if you're stuck!

* `setUpPersistence`: In `setUpPersistence`, you should make sure that if the
  files and folders you need for the program to work don't exist yet that they are made.
* `writeStory`: You should be using `readContentsAsString` and `writeContents`.
  Since the story is just plain text (i.e. it's just a string), you do not need
  to serialize anything.
* `saveDog`: You should be using `writeObject`, since Dogs aren't Strings so we
  want to be able to serialize them. Make sure you're writing your dog to a
  `File` object that represents a file and not a folder!
* `fromFile`: You should be using `readObject`. This should be similar to
  `saveDog` except you're loading a Dog from your filesystem instead of writing
  it!
  
### I'm getting a bunch of warnings about deprecated methods/setSecurityManager. Did I do something wrong?
Nope! Sorry, this is unavoidable. Code on! 
  
### I'm getting an AccessControlException. How do I avoid this?
Currently, the autograder will only have access to .capers within the CWD. Don't mess with the CWD - you can assume it exists.
Beyond that, **ensure that your capers folder is named .capers, not capers!**.

### I am testing from IntelliJ, so how do I enter command line arguments?

If running in IntelliJ, you will need to use Run > Edit Configurations >
Program Arguments to add the command line arguments. (which we'll be talking
about in a week or two).

### How do I refer to a directory versus a file?

* File objects can represent both *files* and *directories* in your filesystem.
The only way to differentiate between them is the methods you use with the
`File` object. You can check if a File object represents a directory with
`.isDir()`, which you shouldn't need for the lab since you should already know
which File objects represent files and which represent directories.

### I made a file object but it isn't showing up in my folder!

Creating a new File object in Java *does not create the corresponding file or
directory on your computer.* The file is only created when you call
`.createNewFile()` or `mkdir()` on that File object. You can think of `File`
objects as pointers to files or directories - you can have multiple of them,
and whenever you want to actually change the corresponding file or directory,
you will need to call specific methods (usually the ones in `Utils` with "read"
and "write" in the name).

### How do I refer to a specific file?

`Utils.join(File d, String s)` is shorthand for `new File(File d, String s)`
(and `Utils.join(String d, String s)` is shorthand for
`new File(new File(d), String s)`), both of which will create a new `File`
object that represents the file or folder called `s` in the `d` directory.
Again, this doesn't make the actual file / folder in your filesystem until you
call appropriate methods.

### `writeObject` isn't writing my object to a file even though I am passing in a file!

`writeObject` takes in (1) the `File` object that represents
the *file* you want to write the object to and (2) the object you want to
serialize and write into the file. The first argument should be a `File`
object that represents a *file* on your filesystem, not a directory.

### How do I specify what type of object I am expecting as the return type from `readObject`?

The second argument to our `Utils.readObject` requires an instance of
`Class`. To get this for a specific object, we use the `.class` field. For
example, if we wanted to read an object in as a Deque, we might do
`readObject(ad, Deque.class)`.

### What does persistently mean?

When we say "make changes persistently", that means you should make the changes
in Java and then also make sure that those changes are reflected on your
filesystem by writing those changes back into the appropriate files.

### I'm passing my local tests but failing on Gradescope with `expected:<[]Hello> but was:<[args: [story, Hello] ]Hello>`

This is a spec and unit test shortcoming. Delete the line you added in `capers.Main`,
`System.out.println("args: " + Arrays.toString(args));`.

### Why is my CapersTest.java file red? ###

Sometimes, IntelliJ might not properly recognize your testing folder, which is usually labeled as `tests/`. Click on and highlight the `CapersTest.java` file, click on File -> Project Structure -> Libraries, and add `library-su24`.

### My JDK is not being recognized! ###

If you are using a JDK > 21, change your JDK and level to any version between 17 and 21. After doing so, if this error still persists, click on File -> Invalidate Caches and reset.
