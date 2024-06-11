---
layout: page
title: "FAQ - Project 3: BYOW"
categories: proj
released: false
searchable: true
toc:
  h_max: 4
---

Q: I'm not passing the test where the input is "lwsd". 
We provided a valid input with a seed prior to calling lwsd. Likely, you're not handling persistence properly. Make sure to input the exact sequence of calls to replicate this functionality (edit configurations to call interactWithInputString with a valid parameter, then call it again with "lwsd").

Q: Getting an security: accessControlException!
Make sure you're not creating any new directories for saving your gameState, and you're only writing to ".txt" files in your CWD.

A: Make sure to temporarily call ter.renderFrame() (with your appropriate 2-D TETile array input) in interactWithInputString - you must comment this method call out before submitting to the autograder. If you're using a separate class to generate random worlds, you can debug by creating a main method within that class and calling ter.renderFrame().

Q: I'm trying to implement interactWithInputString but my world is not rendering when I'm running Main.java!

A: Make sure to temporarily call ter.renderFrame() (with your appropriate 2-D TETile array input) in interactWithInputString - you must comment this method call out before submitting to the autograder. If you're using a separate class to generate random worlds, you can debug by creating a main method within that class and calling ter.renderFrame().

Q: How do I close my world after the input :q? 

A: Call System.exit(0); You are allowed to System.exit(0), but you cannot use it in your interactWithInputString method.

Q: I want to make a world where we can explore the outdoors or caves or something like that, not a bunch of rooms. What should I do?  
A: That’s fine, you can just use the seed to create a starter house (with rooms and hallways) for your avatar that they can freely exit.

Q: Can I make a world, that supports scrolling or multiple levels (i.e. stairs)?  
A: Sure. In this case, `interactWithInputString` should return only the part of the world that is visible on the screen at the time that the last character in the replay string is entered.

Q: Can I add the ability for users to customize their character before creating a world?  
A: Yes, but you'll need to create a fourth main menu option. Your project must support exactly the API described in this spec. That is, "N23123S" must always create a new world with the seed 23123, and must not ask for any additional input from the user.

Q: Why is the phase 1 autograder saying "Could not initialize class edu.princeton.cs.algs4.StdDraw"?  
A: Somewhere in your code, your `interactWithInputString` method tries to use the `StdDraw` class which is not allowed. For example if you call `TERenderer.initialize()`, you are using `StdDraw`. No `StdDraw` window should open when you call `interactWithInputString`. We've seen some students whose code only opens a `StdDraw` window for some seeds, so look very carefully.

Q: The autograder is getting a `NumberFormatException` caused by `Integer.parseInt`.  
A: The `Random` class takes `long` as input, so the seeds we provide are too big to fit into an `int`. You need to use the `Long` class instead to parse the seed.

Q: The autograder is telling me my worlds are not distinct, even though I run the seeds locally, and the worlds appear visually different.  
A: Check to see that every tile you use is represented by a distinct character. This is especially important if you create any new tiles.

Q: Two instances of my class are saying they are not equal when they should be. Also, I set the instance of my class to be the key in a HashMap, but I can't find it when I try to access that key.  
A: Make sure that if you create any classes, override the `.equals()` method AND the `.hashcode()` method. This will guarantee that two instances that are equal will have the same hashcode.

Q: I am getting weird autograder messages that don't make sense with the internals of my code.
A: Make sure you are not changing TETile.java's `character` field or `character()` method.

Q: The autograder seems to be exiting early, even when I don't have a bug in my code?
A: Make sure you are not calling `System.exit()`.

Q: What do I do if the input to `interactWithInputString()` has extra characters after `:Q`?
A: You do not need to worry about replay strings that contain multiple saves or characters after the save, i.e. "N5SDD:QD" is not considered a valid replay string.

Q: What am I supposed to do with the `"-p"` option in `Main.java`?
A: Don't worry about it. Your program has no expected functionality with this flag.

Q: I'm getting an `AccessControlException` on Gradescope but everything works fine locally - what do I do?
A: Be sure you're only creating / writing to _files_ (not _directories_). This means that you should only be writing to `CWD`, not any other folders or subfolders.

Q: I'm getting "unreported exception `IOException` (or some other exception) must be caught or declared to be thrown" on the autograder, but my code works fine locally.
A: The autograder probably won't compile if you throw exceptions in your method signatures. Instead, use a try-catch block with the part of your code that throws the exception, then remove `throws` from your method signatures.

### New FAQ from 2023, I'm sorry for the formatting :(

Can rooms overlap? 

-   Yes, as long as you can still have some distinct rooms and hallways.

Is flickering of the world/HUD okay? 

-   Yes, as long as the game is still playable. If you see excessive flickering you can add StdDraw.pause(10) to make it less.

Does your HUD have to update whenever you move your mouse, or just when you press a key?

-   Ideally it should always update but we won't take off points if it requires player movement to update. To fix this, make sure you're redrawing the screen every timestep (everytime your while loop runs) instead of only redrawing when there's a keyboard input. 

Can I quit with System.exit(0)?

-   Yes, in  interactWithKeyboard but not in interactWithInputString.

Can you have walls in rooms?

-   Yes, as long as you can still distinguish between rooms and hallways.

Should you be able to continue playing the game after the replay feature?

-   Yes

Can I have only intersecting hallways and no turning hallways?

-   Kinda, it's fine as long as you meet the randomness criteria. With this approach students often have predictable world generation. For example a consistent central crossroads etc...

Can I hard code bounds for <blank>?

-   Yes, you can hard code the bound for the number of rooms and hallways and their sizes and any other feature that depends on randomness. 

I'm encountering a timeout on gradescope but not locally...

-   The tests use randomized seeds, and it's likely that for one of the selected seeds the world generation algorithm runs into an infinite loop. The gradescope output should also give you the last input given and you should test and debug that input locally.
