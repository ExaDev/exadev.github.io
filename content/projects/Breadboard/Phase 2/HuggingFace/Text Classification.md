---
title: Text Classification
aliases:
  - HuggingFace Text Classification
  - Text Classification
tags:
  - breadboard/phase/2
  - classification
  - HuggingFace
  - text_classification
created: 2024-05-31T19:12:12
modified: 2024-06-12T10:34:26
---

- [github.com/ExaDev/breadboard-examples/text-classification](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/text-classification)
- [github.com/ExaDev/breadboard-examples/text-classification/index.ts](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/text-classification/index.ts)
- [github.com/ExaDev/breadboard-examples/text-classification/board.json](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/text-classification/board.json) [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/text-classification/board.json)

## Demonstration of Sentiment Analysis Board

In this demonstration, we will showcase one of the boards we've been developing, which is designed for text classification, specifically sentiment analysis.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-CRGao-60QI?si=1AAALothcSGtmrpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Overview

The primary goal of this board is to perform sentiment analysis on given text inputs using the Hugging Face interface API.

### Inputs and Configuration

1. **API Key**: This key is required to access the interface API.
2. **Text Input**: A piece of text that we want to analyse for sentiment.
3. **Use Cache**: This option speeds up requests by using cached responses if the API has encountered the same input before.
4. **Wait for Model**: This flag indicates whether we should wait for the model to fully load before receiving a response.

### Example

Let's consider the input: "I really like the work that I saw at the conference."

By performing sentiment analysis on this text, we expect a positive result. 

### Results

Upon analysing the input, the API returns scores for specific labels. In this case, the "positive" label received a very high confidence level, indicating that the text was perceived as highly positive.

### Next Steps

In a subsequent video, we will demonstrate a use case of this board using our Chrome Breadboard extension.
