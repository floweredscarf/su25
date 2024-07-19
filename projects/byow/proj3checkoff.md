---
layout: page
title: "Project 3 Lab Demo Checkoff Script"
categories: proj
released: true
---

## Project 3 Lab Demo Checkoff Script

Project 3 Demos will be conducted during lab.

To prepare for the demos, we will have you and your partner fill out a form in which you will detail all of your ambition features as well as clear and concise instructions on how to use these features. This is the Proj3 Checkoff form linked at the end of the spec. Be very specific here, as if you aren't specific enough a TA might not be able to use your feature. We will provide a way for you to request a regrade, but we recommend that you get it right the first time to avoid the trouble. It's also of utmost importance that your code uses only libraries in java.* and the skeleton's library-su22 folder. If your code uses additional libraries, then the TA will not be able to compile nor run your code in the case that there is a technical failure during your checkoff, and the TA has to clone your repo and run it from their laptop. The majority of the points are in the checkoff (28 out of 42), so please make sure you've only used those libraries.

The following is what the instructor will exactly do when checking you off: we recommend you do a dry-run of this to ensure you didn't miss anything. You can clone your repository in some random destination on your computer (like your home directory) if you want to follow along and simulate your checkoff.

## Setup
- Before joining the Zoom meeting, designate one partner to be the presenter. This should be the partner who signed up for the demo slot. They should make sure to already have the following set up:
  - IntelliJ open with your Project 3 code (doesn’t matter what class)
  - The program running with the BYOW main menu displayed
  - An on-screen keyboard displayed (instructions for [Mac OS](https://support.apple.com/guide/mac-help/use-the-accessibility-keyboard-mchlc74c1c9f/mac) and [Windows](https://support.microsoft.com/en-us/windows/use-the-on-screen-keyboard-osk-to-type-ecbb5e08-5b4e-d8c8-f794-81dbf896267a#:~:text=To%20open%20the%20On%2DScreen,screen%20until%20you%20close%20it.))
  - A terminal window in your Project 3 directory
  - You should be checked out to the commit containing the version of your project you want to demo. If this is your most recent commit just make sure your Git status is clean.
  - If you choose to demo a version of your project that is past the deadline (for a percentage penalty, per the syllabus), make sure to let the TA know when you join the meeting.
  - Your Git status should be clean (no changes to commit)

## Checkoff Script

1. The grader will ask for everyones classid (su22-s***)
2. One partner should share their screen, and already have a terminal window in their su22repo/proj3, Git in a clean state (git status should be clean), an accessibility keyboard set up, intelliJ is open, and Project 3 main menu running.
  - If any of these requirements are not fulfilled, you may not receive a grade for Proj3 checkoff.
3. Run "git log" and make sure that the HEAD commit is a commit from before the deadline. Run "pwd". Make sure the path matches that of the open intelliJ window. The students may choose to demo a late commit for partial credit.
4. Check for main menu with New Game/World, Load, and Quit options
5. Check that hitting "n" lets player type in a seed
6. Check that typing numbers and hitting "s" starts the world
7. Check that the floor and walls are distinguishable
8. Check that there are structures which can be considered hallways. (1 or 2 wide, kinda long)
9. Check that the world contains a turning hallway.
10. Check that there are a few rectangular structures which can be considered rooms, which are connected via hallways
11. Check WASD moves the player up, left, down, right
12. Check that hovering over three tiles displays three different names (it is OK if a key press is needed for the mouse hover text to update)
13. Check that moving into walls stops the player without errors
14. Check that typing in ":Q" stops the game. At this point, memorize how the state of the world looks like. You can ask the student to take a screenshot or take one yourself
15. After restarting the program, test the load/save feature: Check that pressing "L" starts a world with no additional input.
16. Check that the world layout is exactly the same as it was before closing the world.
17. Check that the basic commands (WASD, etc.) still work.
18. Quit and reload the world again, and make sure basic commands still work
19. Check that "q" alone doesn't terminate the game
20. Generate 3-5 worlds and look for how varied they are. Select one tier based on how much variety you feel their worlds have.
  * Full credit - each world generated looks significantly different and you feel like you'd see something new when you generate a new world
  * 50% credit - the worlds are not identical, but there are only small shifts or changes which do not really change the experience of moving around the world (e.g. rooms are always in the same spot but just slightly different size)
  * No credit - Worlds are identical most of the time or the changes in the room have no effect on the player experience/how they explore the world. (e.g. the world is the same each time, with only changes in the color of the floor)
21. The grader will then ask you to show all the ambition points you've attempted, and will determine whether you receive full or half credit for those items.
22. The grader will tell you which items you received/did not receive credit for. They will ask if you agree with your score: if you do not, you will be given the opportunity to request a regrade.

## Point Allocation
They will then grade each requirement of the game. Each requirement can either be evaluated as full points, half points, or zero points

### Basic World Functionality (12 points total)

-   The TA will run your project and will check for the following features

-   The world has a main menu screen with a New World, Load, and Quit option (.125 points)

-   The TA will hit "n" or "N" (they may do either) and check that the world prompts for a seed (.125 points)

-   The TA should type in a few random numbers and hit "s" or "S" (they may do either) which should immediately start the world (.25 points)

-   At this point the program should be running and there should be a visible world

-   World has visually distinct walls and floors (.5 points)

-   World has hallways which are 1 or 2 tiles wide with at least 1 containing a turn in it (1 points)

-   World has some number of rooms that are connected via hallways (1 points)

-   At least one hallway is turning (1.5 points)

-   The TA will now try the basic commands that should be available during gameplay

-   TA should hit the W, A, S, and D keys randomly and check the player movement is consistent with the key pressed (.5 points)

-   TA should hover over 3 different tiles and make sure their names show up somewhere on screen and that the names make sense (1.5 points)

-   TA should move into a wall and make sure the player stops at the wall instead of moving into it (.25 points)

-   TA should type ":q" or ":Q" (they may do either) which should quit the world and close the program. Instructor should remember the world layout at this point (.25 points)

-   The program is now closed and we will test the load feature

-   The TA will run the world again after it has been closed and the main menu should appear again.

-   TA should hit "l" or "L" and the world should immediately start (.25 points)

-   TA should check that the world layout is exactly as it was before closing the world (1.25 points)

-   TA will run through the basic commands again (listed above) to make sure the world still works (.75 points)

-   TA will quit and load again and make sure that the basic commands work (1.25 points).

-   TA will check that "q" or "Q" alone does not quit the game (.75 points).

### Randomness (8 points total)

-   The TA should close the world again and will begin testing to see if worlds are randomly generated.

-   The student pair should've explained to the TA via the form where they are making use of randomness and make mention of any pieces of their world which is consistent across all seeds

-   TA should check that the use of randomness does not lead to a severe limitation on the variety of worlds (ie. randomly choosing a world layout from a finite set of worlds)

-   The TA should open the world 3-5 times, making sure to use a different seed each time

-   The TA will be looking for your world's ability to generate variety in both world structure and player experience while exploring that world. What this means is when two different seeds are used to generate new worlds, these worlds should not feel identical (or close to identical).

The grading breakdown is as follows:

-   8 points: The worlds are mainly random, as described by the above section.

-   4 points: The world exhibits a few random elements, but generally looks the same

-   0 points: The world contains no random elements.

### Ambition Points (12 points max)

-   The student should state and demonstrate the features that are in the Ambition category. You should be very explicit about how to "activate" or use that feature.

-   The TA will write in the features the student successfully demonstrated and their point values based on the spec, awarding either Full, Half, or Zero credit for each item.
