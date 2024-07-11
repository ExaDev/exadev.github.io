---
title: Object Manipulator Board
aliases: []
tags:
  - breadboard/phase/2
created: 2024-06-13T16:06:15
modified: 2024-07-10T15:36:11
---

![](https://youtu.be/VLwT21SHV_c)

The Object Manipulator board was developed to work initially with the [For Each Board](projects/Breadboard/Phase%202/Board%20for%20Each.md), targeting scenarios such as the [Simple Hacker News Search](projects/Breadboard/Phase%202/Hacker%20News/simplified/Simple%20Hacker%20News%20Search.md) board. The main purpose is to trim and drop properties from responses efficiently.

## Key Features

- **Selective Property Handling**: The board allows you to manage object properties by specifying which ones to keep or omit.
- **Modes of Operation**:
	- **Pick Mode**: Retains only the keys specified.
	- **Omit Mode**: Drops the keys specified.
- **Strict Mode**: Option to throw an error if a specified key is absent in both pick and omit modes.

## How It Works

1. **Input Configuration**:
	- Define the keys you are interested in.
	- Choose between pick and omit modes based on your requirements.
1. **Sample Object Handling**:
	- Apply the configuration to a sample object to observe the effects.
2. **Strict Mode Activation**:
	- Enable strict mode to ensure keys' presence according to the chosen operation mode.

## Usage Example

### Pick Mode

- **Configuration**: Picking `name` and `surname` from the input object.
- **Output**:

```json
{
	"name": "John",
	"surname": "Doe"
}
```

### Omit Mode

- **Configuration**: Omitting `surname` from the input object.
- **Output**:

```json
{
	"name": "John"
}
```

## Error Handling

Enabling strict mode ensures that any absence of specified keys results in an error, maintaining the integrity of the operation.

### Strict Mode Example

- **Scenario**: Omitting `surname` in strict mode.
- **Result**: Error is thrown if `surname` is not present in the input object.

## Conclusion

The Object Manipulator board provides a solution for managing object properties, whether by picking specific keys or omitting unnecessary ones. The inclusion of strict mode ensures error handling, making it a versatile tool for data manipulation tasks.

---

This board is used in the [Simple Hacker News Search](projects/Breadboard/Phase%202/Hacker%20News/simplified/Simple%20Hacker%20News%20Search.md) board to apply the manipulation to each element with the [Board for Each](projects/Breadboard/Phase%202/Board%20for%20Each.md) board.

## Source

- [TypeScript](https://github.com/breadboard-ai/breadboard/blob/main/packages/example-boards/src/boards/object-manipulator.ts)
- [JSON](https://github.com/breadboard-ai/breadboard/blob/main/packages/visual-editor/public/example-boards/object-manipulator.json)

## Breadboard Web

- [Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/visual-editor/public/example-boards/object-manipulator.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/visual-editor/public/example-boards/object-manipulator.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/visual-editor/public/example-boards/object-manipulator.json" style="width: 100%; height: 500px; border: 0;"></iframe>
