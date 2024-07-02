---
title: Sentiment Analysis Breadboard Chrome Extension
aliases: []
tags:
  - breadboard/phase/2
  - Chrome
  - chrome_extension
  - React
  - sentiment
  - Vite
created: 2024-06-25T11:35:15
modified: 2024-06-26T08:47:00
---

## Chrome Extension for Performing Sentiment Analysis

### Overview

This is a variant of the Chrome Extension for summarising web pages or selected text. This variant allows users get the sentiment for a selection of text, classifying it into positive, neutral, and negative sentiments. Users need to select a piece of text and press on the corresponding button in the popup, then wait for breadboard to get the sentiment through the Hugging Face API. Following this process, the result is displayed in the popup in a table-like view.

### Features

- **Single Button Interface**: The extension has a streamlined interface with a single button for initiating the sentiment analysis on the selected text.
- **Results Display**: The sentiment results are displayed in a table-like view, showing the labels for positive, neutral, and negative sentiments along with the corresponding scores.

### Walkthrough

![](https://youtu.be/-eeI93zytjM)

### Examples - Using an Article about Advantages and Disadvantages of ReactJS

1. **Positive Sentiment**: Selecting text about "reusability" may show high positive scores due to positive phrases.
2. **Negative Sentiment**: Text discussing "complexity" may have high negative scores because of words like "difficulties", "challenges", and "complexity".
3. **Mixed Sentiment**: A conclusion section may have an overall positive score if it includes phrases like "maintainable", "best practices", and "well structured".

### Requirements

#### API Key

To use the sentiment analysis functionality, an API key from Hugging Face is required. Here’s how to obtain and set up the key:

1. **Create Account**: If you don’t have an account on Hugging Face, create one.
2. **Generate API Key**: Go to the settings and create an API key.
3. **Set API Key**: Input the API key in the designated field in the extension settings.

#### Sentiment Model

The sentiment analysis is powered by a model from Hugging Face. The model processes the selected text and provides sentiment scores for positive, neutral, and negative sentiments.

### Conclusion

The Sentiment Analysis Board for the Breadboard project simplifies the process of determining the sentiment of selected text. By using the Hugging Face API, the extension provides accurate sentiment analysis with a user-friendly interface.

For further details, refer to the extension settings and Hugging Face documentation on generating API keys and using sentiment models.

> [!note] Hugging Face API key can be generated [here](https://huggingface.co/settings/tokens).
