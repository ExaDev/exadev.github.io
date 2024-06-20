---
title: Token Classification
aliases:
  - HuggingFace Token Classification
  - Token Classification
tags:
  - breadboard
  - breadboard/phase/2
  - classification
  - HuggingFace
  - token_classification
created: 2024-05-31T19:12:27
modified: 2024-06-18T08:52:05
---

The Token Classification Board leverages the Hugging Face Inference API to highlight key parts of a given text. It is particularly useful for quickly identifying important topics or entities within text, such as in research papers or presentations.

> [!warning]
> Sometimes it will error because model is loading just run the board again

View the Hugging Face Inference API Token Classification documentation [here](https://huggingface.co/docs/api-inference/detailed_parameters?code=curl#token-classification-task) 

>[!info]
> Generate a free Hugging Face API key at: https://huggingface.co/settings/tokens

![](https://youtu.be/gITcehjKItY)

## Features

- **API Integration:** Utilises the Hugging Face Inference API.
- **Text Highlighting:** Automatically identifies and highlights key parts of the text.
- **Optimised Performance:** Options for caching and model loading to improve response times.

## Inputs

### API Key

The API key is required to access the Hugging Face Inference API.

### Input Text

The text from which you wish to extract key parts. For example: 

```
My name is Sarah Jessica Parker, and today I will discuss language models, computer science, and AI.
```

### Aggregation Strategy

Defines how the identified keys are grouped together.

### Use Cache

A flag indicating whether to use a cached response if the language model has previously processed the same input. This can significantly speed up response times.

### Wait for Model

A flag useful for large language models, instructing the API to wait for the model to load before returning a response.

## Example Usage

Consider the following input text:

```
My name is Sarah Jessica Parker, and today I will discuss language models, computer science, and AI.
```

When processed, the board highlights the key topics: `language models`, `computer science`, and `AI`.

## Use Cases

- **Research Papers:** Quickly identify and highlight all topics discussed within a paper.
- **Presentations:** Extract key topics from presentation transcripts efficiently.
- **Documentation** Quickly indetify and highlight key parts of a system.
- **Document Processing** Scan through documents to check if certain key words exist, for example checking if CV's sent have keywords we are looking for.

## Conclusion

The Token Classification Board provides an efficient way to process and highlight important parts of a text, making it a valuable tool for various text analysis tasks.

## Source 

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/token-classification/index.ts)
- [JSON](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/token-classification/board.json)

## Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/token-classification/board.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/token-classification/board.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/token-classification/board.json" style="width: 100%; height: 500px; border: 0;"></iframe>
