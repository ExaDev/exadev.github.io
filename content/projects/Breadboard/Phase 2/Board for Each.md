---
title: Board for Each
aliases:
  - Board for Each
  - Board For Each Board
  - For Each Board
tags:
  - breadboard
  - breadboard/phase/2
  - utility
  - board
created: 2024-06-13T16:07:02
modified: 2024-06-21T08:17:02
---

![](https://youtu.be/wMokaeXWKps)

This Board allows for data manipulation by processing arrays with custom logic boards.

Whether you're dealing with text, numbers, or other data types, the "Board for Each" makes it easy to apply transformations and achieve the desired output.

**The Functionality**:

- **Input**: An array of items and a logic board.
- **Output**: Processed array with transformations applied to each item.

For example, given the array containing the phrase "The quick brown fox" with its capitalisation inverted, the output would be "tHE QUICK BROWN FOX".

## How It Works

1. **Initial Setup**:
   - The logic board can accept various inputs, including whole boards or specific data arrays.
2. **Code Implementation**:
   - The board operates by evaluating each item in the input array.
   - A ternary operation within the logic board determines whether to change the case of each character.
3. **Execution Process**:
   - The board processes each item in the array individually.
   - Results are accumulated and emitted once all items are processed.

## Practical Example

Let's look at a simple example:

- **Input Array**: `["The", "quick", "brown", "fox"]`
- **Logic Board**: Inverts the capitalisation of each character.
- **Output**: `["tHE", "QUICK", "BROWN", "FOX"]`

This demonstrates the board's ability to handle arbitrary arrays and apply the specified logic uniformly across all items.

## Use Case: Simplifying Inputs

One of the key reasons for developing this board was to simplify the inputs for the Hack and News board. By streamlining the arguments, we made the tool more accessible and easier to use for a wider audience. This also helped in reducing unnecessary data clutter, making the output cleaner and more manageable.

## Future Enhancements

We continuously strive to improve our tools. In upcoming updates, we plan to introduce the "Object Manipulator Board," which will further enhance the capabilities of the "Board for Each" by allowing more sophisticated data manipulations.

## Conclusion

The "Board for Each" is a versatile tool designed to simplify data processing tasks. Whether you need to invert text capitalisation or apply more complex transformations, this board can handle it efficiently. Stay tuned for more updates and additional functionalities in our next video.

---

This board is used with the [Object Manipulator Board](projects/Breadboard/Phase%202/Object%20Manipulator%20Board.md) in the [Simple Hacker News Search](projects/Breadboard/Phase%202/Hacker%20News/simplified/Simple%20Hacker%20News%20Search.md) board to remove unnecessary attributes from the results array.

- [TypeScript](https://github.com/breadboard-ai/breadboard/blob/main/packages/breadboard-web/src/boards/board-for-each.ts)
- [JSON](https://github.com/breadboard-ai/breadboard/blob/main/packages/breadboard-web/public/graphs/board-for-each.json)
- [Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/board-for-each.json)

## Breadboard Web

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/board-for-each.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/board-for-each.json" style="width: 100%; height: 500px; border: 0;"></iframe>
