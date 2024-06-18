---
title: Question Answering
aliases:
  - HuggingFace Question Answering
  - Question Answering
tags:
  - breadboard/phase/2
  - HuggingFace
  - Question Answering
created: 2024-05-31T19:11:44
modified: 2024-06-18T08:36:55
---

![](https://youtu.be/92wBNLWuO28)

## Features

### Question and Answering Board

The primary feature of the Breadboard project is its question and answering board. This board is designed to process input context and generate accurate answers to user queries using a language model.

## Input Requirements

To effectively use the question and answering board, three primary inputs are required:

1. **API Key**: A valid API key is necessary to access the Hugging Face Inference API.
2. **Question**: The specific question that the user wants to be answered by the language model.
3. **Context**: Relevant information provided to the language model to help generate an accurate answer to the user's question.

### Example Usage

Let's explore a simple example to demonstrate how the board works:

1. **API Key**: Enter your valid API key.
2. **Question**: "What is my name?"
3. **Context**: "My name is Clara and I live in Berkeley."

Based on this input, the board processes the context and correctly answers the question, responding with "Clara".

## Potential Use Cases

### FAQ System

One of the promising applications of this question and answering board is its use as an FAQ system. By providing the board with comprehensive information about a system, users can query the board with their questions. The language model will then generate appropriate answers based on the provided context.

## Conclusion

The Breadboard project's question and answering board offers a powerful tool for generating accurate responses based on user-provided context. Its potential applications, such as an FAQ system, highlight its utility in various scenarios. We hope you find this project interesting and beneficial.

---

Board which calls the Hugging Face Interface Question Answering Endpoint.

API Key can be generated for free: <https://huggingface.co/settings/tokens>

> [!warning]
> Sometimes it will error because model is loading just run the board again

## Code

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/question-answering/index.ts)
- [JSON](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/question-answering/board.json)

## Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/question-answering/board.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/question-answering/board.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/question-answering/board.json" style="width: 100%; height: 500px; border: 0;"></iframe>
