---
layout: page
title: "3B: Gameplay"
nav_order: 3
parent: >-
    Project 3: Build Your Own World
grand_parent: Projects
has_children: false
has_toc: false
has_right_toc: true
description: >-
  Project 3B spec.
released: true
---

## Deadlines

{% capture deadlines %}{% include proj3-deadlines.html %}{% endcapture %}
{{ deadlines | markdownify }}


## Task 4: Main Menu

In Project 3A, when a user ran the `main` method in `Main.java`, they saw a world pop up. We'll now change this to give the user a nice menu.

{: .task}
Implement a Main Menu that follows the requirements detailed below.

Now, when a user runs `Main.main`, they should see some Main Menu text pop up, like this:

<img alt="Main menu with title CS 61B: The Game, and options New Game (N), Load Game (L), and Quit (Q)." src="../assets/proj3b/main-menu.png">

The menu should give the user these options:
- Pressing `N` or `n` on the main menu creates a new game.
- Pressing `L` or `l` on the main menu loads a saved game from the save file.
- Pressing `Q` or `q` on the main menu closes the window. To close the window, run `System.exit(0)`.

The user should be able to press the corresponding keys on the keyboard to select an option.

Notice that the key presses are not case-sensitive. The user should be able to press either `N` or `n`, and the behavior should be the same (new game created).

Besides the requirements above, you can customize the appearance of this menu however you like.

If the user presses `N` or `n`, they should see a new screen that allows them to enter a seed, like this:

<img alt="Enter Seed menu, with user typing a numerical seed." src="../assets/proj3b/enter-seed.gif">

The screen should show the user the value that the user has entered so far. In other words, every time the user types a digit, that digit should immediately appear on screen (next to all the other digits typed).

After the user is done typing their seed, the user should be able to press `S` or `s` to start the game. You should display a world generated from the user's seed.

Again, besides the requirements above, you can customize the appearance of this menu however you like.

Here are some features you *don't* need to support (unless you want to). The behavior of these cases is *undefined*, which means that your code can do anything in these cases (e.g. crash, or display an error, or anything else).
- The user entering seeds outside of the range [0, 9223372036854775807] is undefined. These are the values representable by the `long` primitive data type in Java.
- The user typing disallowed characters on the seed screen (i.e. anything except `0123456789sS`) is undefined. For example, the user pressing Backspace, or typing a comma, or typing `Q`, or typing other alphabetical characters on the seed screen, is undefined.


## Task 5: Interactivity

Next, let's give the user the ability to move an avatar around the world.

{: .task}
Implement an Avatar that follows the requirements detailed below.

When the user starts the game, the world you generated should additionally include a single *avatar* tile representing the user. In the example below, the `@` tile is the avatar. Your avatar can look different, as long as there is a clear single avatar.

<img alt="World with a single avatar." src="../assets/proj3b/avatar-start.png">

The avatar can start on any floor square. The starting square doesn't need to be randomly-chosen, e.g. it can always be the bottommost-leftmost floor square. However, the starting square does need to be deterministic, e.g. entering the same seed twice should result in the avatar in the same square. See the section below for more details on determinism.

The user should be able to move the avatar around the world as follows:
- `W` or `w` should move the avatar up one square.
- `A` or `a` should move the avatar left one square.
- `S` or `s` should move the avatar down one square.
- `D` or `d` should move the avatar right one square.

If the user attempts to move into a wall, the avatar should stay in the same place, and the program should not crash. For example, in the sample world above, pressing `W` or `w` once should move the avatar up, and then pressing `W` or `w` again should not move the avatar.

You don't need to support pressing and holding down a key. It's fine if holding down a key results in undefined behavior.

Later in the project, you can add additional gameplay features if you'd like. For example, a power-up could allow the user to move through walls or move multiple squares at once. Or, the user could use an additional key `P` to push items around. Additional features are fine, as long as you follow the basic spirit of interactivity outlined here, where users can move around, but are limited by walls.


### Overview: Animating the Game

To animate your game, you need to continuously re-render updates to your game state. These updates will vary depending on the specific scene you are in. You can conceptualize this process as a "game loop." Your world movement scene might be characterized by the following game loop:

1. Initialize the game window and the world state.
2. Update the movements of the avatar based on the player's input. 
3. Render the updated game state in the game window.
4. Repeat steps 2 and 3 until the player quits.

Check out `GameLoopDemo.java`, located in the `demo` folder of your Project 3 repo, for an example of what this might look like. Note: **lab 9, task 3A** involves implementing a game loop, and is strongly recommended before tackling a game loop for your project 3.

In general, good coding practice is to first build small procedures with explicit 
purposes and then compose more complex methods using the basic ones. It will give you a clear path forward in development and will be easier to break down your logic for unit testing.


### Overview: Determinism

Your game should be **deterministic**. This means that if two users press the exact same keys in the exact same sequence, the resulting state of their game should be exactly the same. For example, the 2D tile grid should be exactly the same, and any other features you add (e.g. points, health bar, etc.) should also be exactly the same.

Recall that we already used pseudorandomness to make the new-game process deterministic. If two users type in the same seed, they'll get the exact same world.

As you start to add more features from now on, make sure that your game is still deterministic. You can still use pseudorandomness to help you ensure determinism.

**Note on real-time gameplay:**

The easiest way to produce deterministic behavior is for your game to not depend on real-time. Some examples of non-real-time behavior:

- If the user presses the same sequence of keys very quickly, or very slowly, the resulting behavior should be exactly the same.
- If you have features like a countdown timer, the timer should be measured by number of moves (e.g. decrement each time the user moves), as opposed to real-time like number of seconds.
- If you have features like enemy character spawning, you can spawn an enemy every 5 moves, as opposed to something real-time like every 5 seconds.

If you do intend to implement real-time behavior, that's fine, as long as anybody can easily produce deterministic behavior by pressing the same keys in the same sequence. For example, asking the user to press a key within a 10-second timer is fine and reproducible, but asking the user to press 20 keys within a 0.1-second timer is too hard to reproduce reliably.

## Task 6: HUD

Add a "Heads up Display" (HUD) that provides additional information that maybe useful to the user.

{: .task}
> Implement the HUD feature that follows the requirements detailed below.

At the bare minimum, this should include Text that describes the tile currently under the mouse pointer. Ideally, your HUD should not flicker as the mouse moves. The HUD must update as you move the mouse cursor, i.e. you must update even if the user is only moving the mouse and isn't pressing any keys.

Note: **lab 9, task 3B** involves adding a HUD, and is strongly recommended before adding a HUD to your project 3.

As an example of the bare minimum, the simple interface below displays a grid of tiles and a HUD that displays the description of the tile under the mouse pointer (click image for higher resolution). Here, the mouse cursor (not shown) is over the g, and the text is there to tell the user that the green g represents a goblin.

[![HUD example showing description](../assets/proj3b/UI_example0.png)](../assets/proj3b/UI_example0.png)

You may include additional features to your HUD if you choose. In the example below from Fall 2022 students [Shannon Jay and Angelique](https://www.youtube.com/watch?v=VZR-yU3t-_o), we a see a more complex HUD. As with the previous example, the mouse cursor is currently over a floor tile, so the HUD displays the text "floor" in the top right. However, this HUD also provides the user with 5 hearts representing the avatar’s "health", as well as a description about a special key that can be pressed to turn a lamp on or off. Click image below for high resolution.

[![HUD example showing health](../assets/proj3b/UI_example1.png)](../assets/proj3b/UI_example1.png)

## Task 7: Saving and Loading

Suppose the user is playing your game, but needs to take a break. (Maybe they need to attend a CS 61B lecture?) Let's give users a way to save their progress and load back a game later.

{: .task}
Implement the Saving and Loading feature that follows the requirements detailed below.

Here's a video demo of the saving and loading process:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q8-FKMLYVwk?si=TYxKvHCL4sCQHaeF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

When the user is in "World mode" (looking at a 2D world, not the main menu), they should be able to press `:q` or `:Q` to immediately save the game and quit the program. To quit the program, run `System.exit(0)`.

When the user quits your program, all Java variables will be lost. Therefore, you will need to save the user's progress in a file, like `save.txt`. What you put in `save.txt` is up to you, but it should contain enough information to perfectly reconstruct the user's game later.

Some notes on the keypresses:
- `:Q` is two characters pressed separately. The user first presses colon only, and then they press Q only.
- `:Q` or `:q` in "World mode" should immediately save and quit, with no further key-presses needed to complete. For example, don't ask the user if they are sure before quitting.
- In "Menu mode" (looking at the main menu), pressing Q alone should quit the program, without saving anything.
- In "World mode" (looking at a 2D world), pressing Q alone should do nothing, and pressing `:Q` should save the game and quit the program.
- In "World mode," pressing colon, followed by any other letter, should not do anything.

If the user presses `L` or `l` on the main menu, you should load the most-recently-saved world from the `save.txt` file. We do not test if your world loads when your world has not been previously saved.

The loaded world should be in the exact same state before the user quit the game. For example, these two scenarios should result in identical worlds:
- The user types `N999SDDDWWW` (New Game, seed 999, Start, move right 3 times, move up 3 times).
- The user types `N999SDDD:Q` (New Game, seed 999, Start, move right 3 times, save). Then, the user re-starts the program and types `LWWW` (Load, move up 3 times).

The loaded world should be identical, including the state of the random number generator!

Here are some cases of undefined behavior. Remember, undefined behavior means your code can crash, display an error, or do anything else you want. We won't test these cases.
- If there is no previous save, and the user presses `L` or `l` on the main menu, the behavior is undefined.
- If the user quits the program some other way (e.g. quits IntelliJ, or unplugs their computer), the behavior is undefined. You don't need to save anything in this case.

## Task 8: Ambition Features

Now that you have a basic game working, in the last part of the project, you'll get a chance to add creative features of your own choosing! 

```java
// This method was written by Gemini 2.5.
public void someMethod() {
    // ...
}
```

{: .task}
> Implement at least **one primary** Ambition Feature and **one secondary** Ambition Feature either from the list below or of your choosing. 
> You are more than welcome to implement more than the minimum requirement, such as two primary Ambition Features, etc.
> 
> If you'd like to implement your own feature(s), please ask on the [Feature Request Ed thread]() and ask ***early*** so we can let you know if your feature is approved!

[For a list of pre-approved ambition features, see our ambition features list.](/../projects/proj3/ambition)

{: .warning}
> Note that your game should retain the same functionality from previous tasks (e.g. Main Menu, Interactivity, Saving and Loading). 
> 
> In other words, you should be implementing your ambition features *on top of* your existing code.

### Clarifications
**Note:** Ambition features are graded *separately* from the previous tasks. 

Specifically, for Saving and Loading, we do not require you to save and load any additional state of the world that is affected by an ambition feature. 

For example, if you're implementing the Line of Sight feature, you can load your world with either the line of sight toggled on or off, regardless of the state it was saved in.
However, you'll still want to make sure that your Ambition Feature doesn't break your Saving and Loading functionality.

## Deliverables

### Gradescope

Submit the code of the game you want us to grade to Gradescope.

There is no autograder, but we need a submission in order to assign you a grade during your live checkoff (see below).

The code you present during your live checkoff needs to be the same as the code you submitted to Gradescope.

### Live Checkoff

Project 3B will be graded in a live checkoff with a TA. These checkoffs typically happen during the last week of class, before RRR week. Checkoffs are held in-person, though we will have a very limited number of remote checkoffs for documented reasons (e.g. sickness).

Exact details, including how to sign up for a checkoff slot, will be posted on Ed closer to the start of checkoffs.

[For a full run-down of how the checkoff will work, see the checkoff script.](/../projects/proj3/checkoff)


### Post-Project Partnership Form

{: .task}
Submit the [Project 3 Post-Project Partnership Form](https://forms.gle/wwhDtsjq3deqhdRo9).

You will receive an email receipt to confirm that you've submitted it.

Your form response is confidential between you and staff. The response will not be shared with your partner.

Warning: Don't forget the form! Students every semester forget this form and they are sad.

### Style

Note: Since there are no autograders in Project 3, we will not be enforcing the 61B style guide on this project. However, we still highly recommend following the style guide, so that your code is readable by your partner!
