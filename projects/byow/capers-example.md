---
layout: page # The HTML template to use to render this page.
title: "Capers Design Document Example" # Title of page.
categories: proj
released: released
---

# Capers Design Document

**CS 61B Staff**:

## Classes and Data Structures

### Main

This is the entry point to our program. It takes in arguments from the command
line and based on the command (the first element of the `args` array) calls the
corresponding command in `CapersRepository` which will actually execute the
logic of the command. It also validates the arguments based on the command to
ensure that enough arguments were passed in.

#### Fields

This class has no fields and hence no associated state: it simply validates
arguments and defers the execution to the `CapersRepository` class.

### CapersRepository

This is where the main logic of our program will live. This file will handle all
of the actual capers commands by reading/writing from/to the correct file,
setting up persistence, and additional error checking.

It will also be responsible for setting up all persistence within capers. This
includes creating the `.capers` folder as well as the folder and file where we
store all `Dog` objects and the current story.

This class defers all `Dog` specific logic to the `Dog` class: for example,
instead of having the `CapersRepository` class handle `Dog` serialization and
deserialization, we have the `Dog` class contain the logic for that.

#### Fields

1. `static final File CWD = new File(System.getProperty("user.dir"))`
    The Current Working Directory. Since it has the package-private access
    modifier (i.e. no access modifier), other classes in the package may use
    this field. It is useful for the other `File` objects we need to use.

2. `static final File CAPERS_FOLDER = Utils.join(CWD, ".capers")`
    The hidden `.capers` directory. This is where all of the state of the
    `CapersRepository` will be stored, including additional things like the
    `Dog` objects and the current story. It is also package private as other
    classes will use it to store their state.

These fields are both `static` since we don't actually instantiate a
`CapersRepository` object: we simply use it to house functions. If we had
additional non-static state (like the `Dog` class), we'd need to serialize it
and save it to a file.

### Dog

This class represents a `Dog` that will be stored in a file. Because each `Dog`
will have a unique name, we may simply use that as the name of the file that the
object is serialized to.

All `Dog` objects are serialized within the `DOG_FOLDER` which is within the
`CAPERS_FOLDER`. The `Dog` class has helpful methods that will return the `Dog`
object corresponding to some `String` name given to it, as well as write that
`Dog` to a file to persist its changes.

#### Fields

1. `static final File DOG_FOLDER = Utils.join(CapersRepository.CAPERS_FOLDER, "dogs")`
The `File` object that corresponds to the directory containing all the
serialized `Dog` objects. This is `static` since all `Dog` objects are stored
within the same directory. When 
2. `private int age`
The age of this `Dog`.
3. `private String breed`
The breed of this `Dog`.
4. `private String name`
The name of this `Dog`. These names are unique and thus no two `Dog` objects can
possibly have the same name (not enforced by capers, but a guarantee from the
spec).

### Utils

This class contains helpful utility methods to read/write objects or `String`
contents from/to files, as well as reporting errors when they occur. 

This is a staff-provided and PNH written class, so we leave the actual
implementation as magic and simply read the helpful javadoc comments above each
method to give us an idea of whether or not it'll be useful for us.

### Fields

Only some `private` fields to aid in the magic.

## Algorithms

There aren't any algorithms in this lab as we were just dipping our toes into
serialization/persistence.

## Persistence

The directory structure looks like this:


```
CWD                             <==== Whatever the current working directory is.
└── .capers                     <==== All persistant data is stored within here
    ├── story                   <==== Where the story is stored (a file)
    └── dogs                    <==== All dogs are stored in this directory
        ├── Dog1                <==== A single Dog instance stored to a file
        ├── Dog2
        ├── ...
        └── DogN
```

The `CapersRepository` will set up all persistence. It will: 

1. Create the `.capers` folder if it doesn't already exist
2. Create the `dogs` folder if it doesn't already exist

When the `story [text]` command is used we will do one of two things:

1. If the `.capers/story` file doesn't exist, we will create it and write the
   `text` to the newly created file followed by a `\n` character after
   printing it.
2. If the `.capers/story` file _does_ exist, we'll read the previous story using
   the `Utils.readContentsAsString` function, add the `text`, add a `\n`
   character, and write this new story back to the `.capers/story` file after
   printing it.

The `Dog` class will handle the serialization of `Dog` objects. It has two
methods that are useful for this:

1. `public static Dog fromFile(String name)` - Given the name of a `Dog` object,
   it retrieves the serialized data from the `DOG_FOLDER` (which is
   `.capers.dogs`) and uses the `Utils.readObject` method to convert it to an
   instance of `Dog`.
2. `public void saveDog()` - Serializes this `Dog` object to the `DOG_FOLDER` in
   a file whose name is the same as the name of the `Dog` object (since we're
   guaranteed the names are unique, there is no collision with any other `Dog`
   object). If this `Dog` already existed, this will also overwrite the old
   (now out-of-date) serialized data.
