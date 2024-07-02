---
title: Using Breadboard with Ollama
aliases: []
tags:
  - breadboard/phase/2
  - LLM
  - local
  - local_ai
  - local_llm
  - ollama
created: 2024-05-31T19:23:54
modified: 2024-06-13T16:05:57
---

## Introduction

In this demonstration, we showcase the capability of a breadboard to interact with different language models running locally. This setup is beneficial for developers as it allows for flexibility and ease of switching between language models.

![](https://www.youtube.com/embed/lMur1gqobFg?rel=0)

## Setup Overview

We have three instances of the breadboard web editor, each configured to interact with a different language model:

1. **Instance 1**: Connected to the Llama3 model.
2. **Instance 2**: Connected to the Mistral model.
3. **Instance 3**: Connected to the Gemma model.

## Input Configuration

The input parameters for each instance are straightforward:

- **Model Input**: Specifies the language model to interact with.
- **Prompt**: The question or action to be performed by the language model.

## Running the Demonstration

Upon running the breadboard instances, each one interacts with its respective language model on the local machine. The responses from the models are then gathered for analysis.

## Results

The demonstration successfully shows that the same breadboard can be used to interact with multiple language models concurrently. This highlights the flexibility and power of the breadboard design, making it easier for developers to switch between models or adapt the boards for different models with minimal adjustments.

## Conclusion

This demonstration underscores the versatility of breadboards in managing multiple language models. With the ability to tweak and reuse boards, developers can streamline their workflows and enhance productivity.

## Source

[README](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/ollama-llama3/README.md)

[Setup](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/ollama-llama3/Setup.md)

[graph](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/ollama-llama3/graph.json)

[Board](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/ollama-llama3/index.ts)
