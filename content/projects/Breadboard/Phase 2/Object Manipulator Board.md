---
title: Object Manipulator Board
aliases: []
tags:
  - breadboard/phase/2
created: 2024-06-13T16:06:15
modified: 2024-06-13T16:06:43
---

A board that manipulates objects based on the provided keys.

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

## Source

- [TypeScript](https://github.com/ExaDev/breadboard/blob/hackernews-simplified/packages/breadboard-web/src/boards/object-manipulator.ts)
- [JSON](https://github.com/ExaDev/breadboard/blob/hackernews-simplified/packages/breadboard-web/public/graphs/object-manipulator.json)
- [Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/hackernews-simplified/packages/breadboard-web/public/graphs/object-manipulator.json)
