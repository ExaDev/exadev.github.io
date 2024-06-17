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
modified: 2024-06-17T11:04:47
---

- [github.com/ExaDev/breadboard-examples/audio-transcript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/audio-transcript)
-

This board currently wont work until core kit fetch gets fixed.

This board will produce an audio transcript of the provided audio file.

This API endpoint expects a raw binary file: <https://huggingface.co/docs/api-inference/detailed_parameters?code=js#automatic-speech-recognition-task>

Because the core kit stringifies the request body, this wont work inside of the board. However it can still be run on CLI as it demonstrates the expected board functionality using built in fetch function.
