---
title: Text Classification / Sentiment Analysis
aliases:
  - HuggingFace Text Classification
  - HuggingFace Text Classification / Sentiment Analysis
  - Sentiment Analysis
  - Text Classification
tags:
  - breadboard
  - breadboard/phase/2
  - classification
  - HuggingFace
  - sentiment_analysis
  - text_classification
  - board
created: 2024-05-31T19:12:12
modified: 2024-06-18T08:20:38
---

## Demonstration of Sentiment Analysis Board

In this demonstration, we will showcase one of the boards we've been developing, which is designed for Text Classification, specifically Sentiment Analysis.

![](https://www.youtube.com/embed/-CRGao-60QI?rel=0)

### Overview

The primary goal of this board is to perform sentiment analysis on given text inputs using the Hugging Face inference API.

### Inputs and Configuration

1. **API Key**: This key is required to access the inference API.
2. **Text Input**: A piece of text that we want to analyse for sentiment.
3. **Use Cache**: This option speeds up requests by using cached responses if the API has encountered the same input before.
4. **Wait for Model**: This flag indicates whether we should wait for the model to fully load before receiving a response.

### Example

Let's consider the input: "I really like the work that I saw at the conference."

By performing sentiment analysis on this text, we expect a positive result.

### Results

Upon analysing the input, the API returns scores for specific labels. In this case, the "positive" label received a very high confidence level, indicating that the text was perceived as highly positive.

In a subsequent video, we will demonstrate a use case of this board using our [Chrome Breadboard extension](../Chrome%20Extension.md).

## Source

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/text-classification/index.ts)
- [Board](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/text-classification/index.ts)

## Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/text-classification/board.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/text-classification/board.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/text-classification/board.json" style="width: 100%; height: 500px; border: 0;"></iframe>
