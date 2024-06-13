---
title: Simplified Hacker News Boards
aliases:
  - "Simplified Hacker News Boards"
tags:
  - breadboard/phase/2
  - hacker_news
created: 2024-06-13T08:45:47
modified: 2024-06-13T09:13:37
---

Simplified versions of the [HackerNews Tool](projects/Breadboard/Phase%202/HackerNews%20Tool.md) boards, with reduced inputs and outputs, for use with LLM function calling.

## [Simple Hacker News Search](projects/Breadboard/Phase%202/Simple%20Hacker%20News%20Search.md)
## Helper Boards
- Object Manipulator Board
	- Input:
		- `keys`
			- The array of keys to include or exclude
		- `mode`
			- `include` or `exclude`
			- Whether to retain or remove the listed keys
		- `errorOnMissing`
			- Whether to throw error if any of the keys are not found
	- Output
		- Object with listed keys removed or retained
- `forEach` Board
	- Inputs
		- An array
		- A board
	- Passes each object in the array through the provided board
	- Outputs
		- The modified array of objects
- Object Array Manipulator Board
	- A board that nests the Object Manipulator and forEach boards
