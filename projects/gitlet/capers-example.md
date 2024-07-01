---
layout: page
title: "Capers Design Document Example" # Title of page.
categories: proj
released: true
searchable: true
---

# Capers Design

1.  *How is your `.capers` directory structured? What files / classes are you
    using to represent your repository state, and what information is contained
    in these files / classes?*

    Our `.capers`. directory will be structured as follows:

    ```text
    .capers
    ├── dogs
    │   ├── <dog_name_1> 
    │   ├── <dog_name_2>
    │   └── ...
    └── story
    ```

    The `dogs` folder will contain serialized `Dog` objects. Since `Dog`s have
    unique names, we will use that as the name of the files that each `Dog`
    object is serialized to.

    A `Dog` needs to know its `int age`, its `String breed`, and its
    `String name`. These will be stored as fields in the `Dog` class so that
    they are serialized.

    The `story` file will contain the current story. This file will contain
    plain text, because the story is plain text.

2.  *What is the process of creating the story, then adding to it? How about
    creating a dog, then having its birthday? How does your `.capers` directory
    change?*

    To create a story, we check if the file `.capers/story` exists.
    If the file exists, we read the file
    first using `Utils.readContentsAsString`, since the file contains plain
    text. Otherwise, our story is currently empty.
    Then, we add the text as a new line to the story, and write the
    updated story to `.capers/story`.

    When a dog is created with the `dog` command, we instantiate the `Dog` with
    the provided arguments. Then, we use the `Dog::saveDog` instance method
    to serialize the dog. Here, we use the `Utils` to save the `Dog` object to
    the file `.capers/dogs/_name`, where `_name` is the dog's name. We also
    print out the dog's `toString`.

    When we have a dog's birthday, we use the provided name to read the `Dog`
    from the `.capers/dogs` directory. Then, we update the read dog's age.
    Since the age has changed, we need to persist this new age by writing the
    dog back to the same file we read from (`.capers/dogs/_name`). After
    incrementing the age, we also print out the dog's `toString` and the
    birthday celebratory message.

3.  *Capers does not have branches, so we skip this question.*

## Serialization and Persistence

1.  Creating a dog, having a birthday, creating a dog.

    Assume that this is the first time capers has been run.

    ```sh
    java capers.Main dog Sammie Samoyed 5
    ```

    First, we notice that the `.capers` folder doesn't exist. We create the
    `.capers` and `.capers/dogs` directories.

    Then, we create a `Dog` with the provided info and serialize it. The file
    that it is serialized to is `.capers/dogs/Sammie`, so that we can access
    this dog in the future and give it birthdays.

    ```sh
    java capers.Main birthday Sammie
    ```

    `Main` reads the `Dog` Sammie from `.capers/dogs/Sammie`. We increment
    Sammie's age by 1 and print Sammie and congratulations. Then, we serialize
    the updated age back to `.capers/dogs/Sammie`.
