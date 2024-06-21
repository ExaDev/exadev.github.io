---
title: Audio Transcript
aliases:
  - Audio Transcript
  - Audio Transcription
  - HuggingFace Audio Transcript
tags:
  - audio
  - audio_transcription
  - breadboard
  - breadboard/phase/2
  - HuggingFace
created: 2024-05-31T19:07:03
modified: 2024-06-18T08:34:42
---

In this demonstration, we showcase one of the Breadboard project's boards, specifically a Hugging Face board designed for audio transcription. This board leverages the Hugging Face Inference API to convert audio files into text transcripts.

Find out more about speech recognition with the Hugging Face Inference API [here](https://huggingface.co/docs/api-inference/detailed_parameters?code=js#automatic-speech-recognition-task). 

> [!WARNING]
> Because the core kit stringifies the request body, this wont work inside of the board or Breadboard Web. 
>
> However it can still be run on CLI as it demonstrates the expected board functionality using built in fetch function.

![](https://youtu.be/PHNF026epos)

## Input Parameters

- **File Name**: The name of the audio file to be transcribed.
- **API Key**: The Hugging Face Inference API key necessary for accessing the transcription service.

## Demonstration Steps

1. **Prepare the Audio File**: Ensure you have the audio file ready for transcription. For this demonstration, we use a sample audio file with the following content:

```
Hello. I am Google Translate. Please make a transcript of what I am saying.
```

2. **Run the Board**: Execute the board with the specified audio file and API key. The board processes the audio and returns the transcribed text.

## Output

Upon running the board, the output is as follows:

```
Hello, I am GUGAL Translate. Please make a transcript of what I am saying.
```

This demonstrates the accuracy of the transcription, with room for improvements in future iterations.

## Future Integration

There are plans to integrate this functionality with the [Chrome Breadboard extension](../Chrome%20Extension.md), although this is still a work in progress.

The chrome extension would either accept file uploads or allow audio recordings which would then be transcribed using this board we have demonstrated.

## Conclusion

This demonstration highlights the capability of the Breadboard project's Hugging Face board to accurately transcribe audio files using the Hugging Face Inference API. Further enhancements and integrations are planned to expand its usability and efficiency. Thank you for exploring this demonstration.

## Source

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/audio-transcript-no-core-kit/index.ts)

<!--
## Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/audio-transcript/graph.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/audio-transcript/graph.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/audio-transcript/graph.json" style="width: 100%; height: 500px; border: 0;"></iframe>
-->
