+++
date = '2020-10-20T21:50:41-07:00'
title = 'Across Game'
tags = ['Classwork']
+++

https://github.com/DoubleBrackets/DesktopPlatformer

## About

*Page is under construction!*

A platformer game I developed for my AP Computer Science class final project in high school. Your computer desktop itself is the game level!

The colors of each pixel on your screen form each level's environment.
- Red kills both you and any enemies
- Green "Boosts" you by acting as a multiplier on the current velocity
- Any other color "gradients" turn into one-way platforms

Role: Solo developer

### Programming

The game was programmed entirely in Java, using standard libraries, hence why there's no easy to download playable yet. I still need to dig through the old code someday, but the core flow was that each game loop:
1. The game takes a screenshot of the ENTIRE screen (using the `Robot` library)
2. The entire image pixel array is looped through and converted into hitboxes, with the various effects (this was done entirely on the CPU, so I avoided performance hits by having a pretty large stride)
   1. Color differences along the verticals create platform hitboxes
   2. Colors within a certain distance from red (using RGB values) are turned into kill hitboxes
   3. Colors within a certain distance from green (using RGB values) are turned into boost hitboxes
3. A basic 2D player controller and enemy AI update