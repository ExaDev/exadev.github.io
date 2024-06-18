---
title: Fill Mask
aliases:
  - Fill Mask
  - HuggingFace Fill Mask
tags:
  - breadboard/phase/2
  - HuggingFace
created: 2024-05-31T19:08:34
modified: 2024-06-18T08:53:46
---

The Hugging Face Fill Mask Board leverages the Hugging Face Inference API to perform sentence completion tasks. This board allows users to input a sentence with a masked word, and it will predict and fill in the masked word based on the context provided.

![](https://youtu.be/1JkFbhX-OLg)

## Functionality

The primary function of the Hugging Face Fill Mask Board is sentence completion. Users provide a sentence with a placeholder (mask) where a word is missing, and the board predicts and fills in the most suitable word for that position. 

**Example Sentence:**

```
The first president of the USA was called [MASK].
```

Based on this input, the board predicts a word related to US presidents to fill in the mask.

## Inputs

The board requires several key inputs to function properly:

- **API Key:** A unique key needed to access the Hugging Face Inference API.
- **Use Cache:** This flag is used to speed up responses by using cached results for previously seen inputs.
- **Wait for Model:** This flag, when set to true, makes the API wait for the model to load before returning a response, which is useful for larger models.

## Outputs

The board generates several possible responses for the masked word based on the provided sentence. In our demonstration, the input sentence "The first president of the USA was called [MASK]." generated the following responses:

1. President
2. Obama
3. Two
4. Up
5. Sir

## Considerations

During our demonstration, the language model provided responses that may not have been entirely accurate or relevant. This indicates the need for potentially switching to a different language model or further refining the current one to improve the accuracy and relevance of the predictions.

## Conclusion

The Hugging Face Fill Mask Board offers a glimpse into the capabilities of AI-powered sentence completion. While the current model may require further tuning, it presents a fascinating application of language models in natural language processing tasks.

Thank you for exploring the Hugging Face Fill Mask Board documentation.

---

Board which calls the Hugging Face Interface Fill Mask Endpoint.

API Key can be generated for free: <https://huggingface.co/settings/tokens> (use a key with WRITE permissions)

> [!warning]
> Sometimes it will error because model is loading just run the board again

## Code

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/fill-mask/index.ts)
- [JSON](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/fill-mask/board.json)

## Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/fill-mask/board.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/fill-mask/board.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/fill-mask/board.json" style="width: 100%; height: 500px; border: 0;"></iframe>
