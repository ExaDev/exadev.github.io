---
title: Ollama
aliases: []
tags:
  - breadboard/phase/2
  - LLM
  - local
  - local_ai
  - local_llm
  - ollama
created: 2024-05-31T19:23:54
modified: 2024-06-13T16:01:22
---

This documentation provides an overview of how a well-designed breadboard can interact with multiple language models simultaneously.

## Introduction

In this demonstration, we showcase the capability of a breadboard to interface with different language models running locally. This setup is beneficial for developers as it allows for flexibility and ease of switching between models.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/lMur1gqobFg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Setup Overview

We have three instances of the breadboard web editor, each configured to interact with a different language model:

1. **Instance 1**: Connected to the Lama three model.
2. **Instance 2**: Connected to the Minstrel model.
3. **Instance 3**: Connected to the Gamma model.

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
