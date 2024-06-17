---
title: Image Classification
aliases:
  - HuggingFace Image Classification
  - Image Classification
tags:
  - breadboard
  - breadboard/phase/2
  - classification
  - HuggingFace
  - image_classification
created: 2024-05-31T19:11:08
modified: 2024-06-17T13:40:43
---

A board for interacting with the [[Hugging Face]] Image Classification endpoint.

See more about the endpoint [here](https://huggingface.co/docs/api-inference/detailed_parameters?code=js#image-classification-task).

> [!WARNING]
> Because the core kit stringifies the request body, this wont currently work inside of the board.
>
> However it can still be run on CLI as it demonstrates the expected board functionality using built in fetch function.

## Code

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/image-classification/index.ts)
- [JSON](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/image-classification/graph.json)

<!--
### Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/image-classification/graph.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/image-classification/graph.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/image-classification/graph.json" style="width: 100%; height: 500px; border: 0;"></iframe>
-->
