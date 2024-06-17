---
title: Text Generation
aliases:
  - HuggingFace Text Generation
  - Text Generation
tags:
  - breadboard/phase/2
  - HuggingFace
  - text_generation
created: 2024-05-31T19:12:19
modified: 2024-06-17T13:06:55
---

Board which calls the Hugging Face Interface Text Generation Endpoint.

API Key can be generated for free: <https://huggingface.co/settings/tokens>

> [!warning]
> Sometimes it will error because model is loading just run the board again

> [!warning] STRANGE BUG
> The numbers in the schema are treated as strings, until we force to use defaults

## Code

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/text-generation/index.ts)
- [JSON](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/text-generation/board.json)

## Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/text-generation/board.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/text-generation/board.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/text-generation/board.json" style="width: 100%; height: 500px; border: 0;"></iframe>
