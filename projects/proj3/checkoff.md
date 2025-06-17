---
layout: page
title: "BYOW Checkoff Script"
nav_order: 5
parent: >-
    Project 3: Build Your Own World
grand_parent: Projects
has_children: false
has_toc: false
has_right_toc: true
description: >-
  Project 3 Checkoff Script.
released: true
---

## Deadlines

{% capture deadlines %}{% include proj3-deadlines.html %}{% endcapture %}
{{ deadlines | markdownify }}


## Checkoff Policies

Project 3 Demos will be conducted during lab sections. Information about how to sign up for a checkoff time will be posted on Ed.

{: .task}
> Sign up for a check off slot in a lab section and complete it at your assigned time. 
>
> Make sure to prepare accordingly to avoid any last-minute emergencies!

The code that you present during your demo should be the code that you submitted to the Project 3B assignment on Gradescope. In other words, the Project 3B due date (plus any extensions you requested) is the deadline for making any changes to your code. Even if your checkoff doesn't happen until later, you can't make any changes after your Project 3B due date.

{: .warning}
The following is what the TA will exactly do when checking you off: we recommend you do a dry-run of this to ensure you didn't miss anything. You can clone your repository in some random destination on your computer (like your home directory) if you want to follow along and simulate your checkoff.

## Attendance

Both partners should be present **in-person** for the checkoff.

{: .info}
> If one partner is sick, traveling, or has some other **documented** excuse, please fill out the [Project 3 Checkoff Extenuating Circumstances Form](https://docs.google.com/forms/d/e/1FAIpQLSemhqG4c2vAaAHQAfJVM_0ZMPZwtSOZbwHnmySKZaj6k50bLQ/viewform?usp=sharing) **before the time of your checkoff slot**. 
> Once completed, proceed with the checkoff as normal with your partner on a Zoom hosted by you.
>
> It's your responsibility to make sure that the remote partner is on call before the checkoff starts. We can't wait for you to open a Zoom call after the checkoff slot has already started.

## Setup

Designate one partner to be the presenter; this should be the partner who signed up for the demo slot. They should make sure to already have the following set up:
- IntelliJ open with your Project 3 code (doesn't matter what class)
- The program running with the BYOW main menu displayed
- The state of your repo should be the commit containing the version of your project you want to demo. The code you demo should be the same as the code you submitted to Gradescope. If this is your most recent commit, just make sure your Git status is clean. If it is a past commit, you can get to this state by running `git switch --detach <commit id>`. (To get your repo back to normal, run `git switch main`.)
- If you choose to demo a version of your project that is past the deadline (for a percentage penalty, per the syllabus), make sure to let the TA know.
- Your Git status should be clean (no changes to commit)

## Checkoff Script

1. The grader will ask for everyone's class ID ({{ site.semester }}-s\*\*\*)
2. One partner should designate their laptop as the "check-in laptop", and already have a terminal window in their `{{ site.semester }}-proj3-g***/proj3`. Their Git should be in a clean state (git status should be clean), IntelliJ should be open, and the Project 3 main menu should be running.
   - If any of these requirements are not fulfilled, you may not receive a grade for Proj3 checkoff.
3. Run "git log" and make sure that the HEAD commit is a commit from before the deadline. Run "pwd". Make sure the path
   matches that of the open IntelliJ window. The students may choose to demo a late commit for partial credit.
4. Check for main menu with New Game/World, Load, and Quit options.
5. Check that hitting "n" on the main menu lets player type in a seed.
6. Check that typing numbers and hitting "s" starts the world.
7. Check that the floor and walls are distinguishable.
8. Check that there are at least 2 structures which can be considered hallways. (1 wide, kinda long)
9. Check that the world contains a turning hallway. If the current world doesn't have a turning hallway, ask the students to generate a world that has a turning hallway.
10. Check that there are a few rectangular structures which can be considered rooms, which are connected via hallways
11. Check WASD moves the player up, left, down, right.
12. Check that hovering over three tiles displays three different names (it is OK if a key press is needed for the mouse hover text to update).
13. Check that the HUD does not flicker.
12. Check that moving into walls stops the player without errors.
13. Check that typing in ":Q" in "world mode" stops the game. At this point, memorize how the state of the world looks like. You can ask the student to take a screenshot or take one yourself.
14. After restarting the program, test the load/save feature: Check that pressing "L" on the main menu starts a world with no additional input.
15. Check that the world layout is exactly the same as it was before closing the world.
16. Check that the basic commands (WASD, etc.) still work.
17. Quit the world by typing in ":Q" and reload the world again using "L" on the main menu. Make sure basic commands still work.
18. Check that "q" alone in "world mode" doesn't terminate the game.
19. Generate 3-5 worlds and look for how varied they are. Select one tier based on how much variety you feel their worlds have.
- Full credit - each world generated looks significantly different and you feel like you'd see something new when you generate a new world
- 50% credit - the worlds are not identical, but there are only small shifts or changes which do not really change the experience of moving around the world (e.g. rooms are always in the same spot but just slightly different size)
- No credit - Worlds are identical most of the time or the changes in the room have no effect on the player experience/how they explore the world. (e.g. the world is the same each time, with only changes in the color of the floor)
20. The grader will then ask you to show all the ambition points you've attempted, and will determine whether you receive full or half credit for those items.
21. The grader will tell you which items you received/did not receive credit for. They will ask if you agree with your score: if you do not, you will be given the opportunity to request a regrade.

## Point Allocation

They will then grade each requirement of the game. Each requirement can either be evaluated as full points, half points,
or zero points.

### Basic World Functionality (50 points total)

The TA will run your project and will check for the following features:

- The world has a main menu screen with a New World, Load, and Quit option (2 points)
- The TA will hit "n" or "N" (they may do either) and check that the world prompts for a seed (2 points)
- The TA should type in a few random numbers and hit "s" or "S" (they may do either) which should immediately start the world. The TA should also be able to see the numbers you are typing on the screen. (3 points)

At this point, the program should be running and there should be a visible world.

- World has visually distinct walls and floors (4 points)
- World has at least two hallways which are 1 tile wide (1 point)
- World has at least 1 hallway containing a turn in it. If current world doesn't, ask students to generate a world that has a turning hallway. (3 points)
- World has some number of rooms that are connected via hallways (7 points)

The TA will now try the basic commands that should be available during gameplay.

- TA should hit the W, A, S, and D keys randomly and check the player movement is consistent with the key pressed (4 points)
- TA should hover over 3 different tiles and make sure their names show up somewhere on screen and that the names make sense (4 points)
- TA should verify that the HUD does not flicker (3 points)
- TA should move into a wall and make sure the player stops at the wall instead of moving into it (1 points)
- TA should type ":q" or ":Q" (they may do either) in "world mode" which should quit the world and close the program. TA should remember the world layout at this point (3 points)

The program is now closed, and we will test the load feature.

The TA will run the world again after it has been closed and the main menu should appear again.

- TA should hit "l" or "L" and the world should immediately start (3 points)
- TA should check that the world layout is exactly as it was before closing the world (3 points)
- TA will run through the basic commands again (listed above) to make sure the world still works (3 points)
- TA will quit and load again and make sure that the basic commands work (3 points).
- TA will check that "q" or "Q" alone in "world mode" does not quit the game (1 points).

### Randomness (20 points total)

- The TA should close the world again and will begin testing to see if worlds are randomly generated.
- The student pair should've explained to the TA where they are making use of randomness and make mention of any pieces of their world which is consistent across all seeds
- TA should check that the use of randomness does not lead to a severe limitation on the variety of worlds (ie. randomly choosing a world layout from a finite set of worlds)
- The TA should open the world 3-5 times, making sure to use a different seed each time
- The TA will be looking for your world's ability to generate variety in both world structure and player experience while exploring that world. What this means is when two different seeds are used to generate new worlds, these worlds should not feel identical (or close to identical).

The grading breakdown is as follows:
- 20 points: The worlds are mainly random, as described by the above section.
- 10 points: The worlds exhibit a few random elements, but generally look the same
- 0 points: The worlds contain no random elements.


### Ambition Points (30 points total)

- The student should state and demonstrate the features that are in the Ambition category. You should be very explicit about how to "activate" or use that feature.
- The TA will write in the features the student successfully demonstrated and their point values based on the spec, awarding either Full, Half, or Zero credit for each item.
- For students participating in the LLM pilot project, each point counts for half, i.e. they'll need 60 ambition points to get full credit on this part of the project.
