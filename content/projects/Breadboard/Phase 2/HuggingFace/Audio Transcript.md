---
title: Audio Transcript
aliases:
  - Audio Transcript
  - Audio Transcription
  - HuggingFace Audio Transcript
tags:
  - breadboard/phase/2
  - HuggingFace
created: 2024-05-31T19:07:03
modified: 2024-06-17T13:22:13
---

This board currently wont work until core kit fetch gets fixed.

This board will produce an audio transcript of the provided audio file.

This API endpoint expects a raw binary file: <https://huggingface.co/docs/api-inference/detailed_parameters?code=js#automatic-speech-recognition-task>

> [!ERROR]
> Because the core kit stringifies the request body, this wont work inside of the board. However it can still be run on CLI as it demonstrates the expected board functionality using built in fetch function.

## Code

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/audio-transcript/index.ts)
- [JSON](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/audio-transcript/graph.json)

## Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/audio-transcript/graph.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/audio-transcript/graph.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/audio-transcript/graph.json" style="width: 100%; height: 500px; border: 0;"></iframe>
