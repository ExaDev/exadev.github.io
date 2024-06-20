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
modified: 2024-06-20T11:14:35
---

This board leverages the Hugging Face Inference API to generate text based on a given input, making it a powerful tool for various applications.Ï

>[!note]
	 Generate a free API Key [here](https://huggingface.co/settings/tokens)

> [!warning]
> Sometimes it will error because model is loading just run the board again

![](https://youtu.be/8X4w9x7z6XA)

## Features

- **Text Completion:** Given a piece of text, the board uses the Hugging Face Inference API to predict and complete the text based on the provided context.
- **Versatile Input:** Users can input any piece of text as context, and the language model will attempt to generate a coherent continuation.
- **Language Model Integration:** Utilises state-of-the-art language models from Hugging Face to provide accurate and contextually relevant text completions.

## Inputs

- **API Key:** Required to access the Hugging Face Inference API. Ensure you have a valid API key to use this board.
- **Context Text:** The piece of text you want to provide as context. The language model uses this text to generate the subsequent output.

## Example Usage

To demonstrate the functionality of the Hugging Face Text Generation Board, consider the following example:

1. **Input:**
   - API Key: `<Your-API-Key>`
   - Context Text: "At the end of the rainbow, there is"

2. **Output:**
   - Generated Text: "At the end of the rainbow, there is treasure waiting to be discovered ..."

The board successfully completes the input text, providing a coherent and contextually appropriate continuation.

## Use Cases

The Hugging Face Text Generation Board can be utilised in various scenarios, including but not limited to:

- **Story Writing:** Assists in generating ideas or continuing a story based on a given context.
- **Speech Writing:** Provides coherent text completions that can aid in speech preparation.
- **Email Drafting:** Helps in drafting emails by suggesting completions based on the initial text.
- **Creative Writing:** Sparks creativity by offering suggestions and continuations for creative writing projects.

## Conclusion

The Hugging Face Text Generation Board is a versatile and powerful tool within the Breadboard project, offering endless possibilities for text generation and completion tasks. Whether you are writing stories, preparing speeches, or drafting emails, this board can assist in generating contextually relevant text to enhance your projects.

## Code

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/text-generation/index.ts)
- [JSON](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/text-generation/board.json)

## Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/text-generation/board.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/text-generation/board.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/text-generation/board.json" style="width: 100%; height: 500px; border: 0;"></iframe>
