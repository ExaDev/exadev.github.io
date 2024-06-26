---
title: Breadboard Chrome Extension for Labelling Text
aliases: []
tags:
  - breadboard/phase/2
  - Chrome
  - chrome_extension
  - React
  - sentiment
  - Vite
created: 2024-06-25T11:35:15
modified: 2024-06-26T08:45:26
---

## Chrome Extension for Performing Text Labelling

### Overview

This is another variant of the Chrome Extension for summarising web pages or selected text. This variant allows users to specify a set of labels that the selected text will be labeled against. For example, if the user gives the following list of labels as input: `"legal", "economy", "law"`, and select a piece of text on a webpage, the extension will run the text labeling board on it and display the scores that correspond to the probability of each label, in the same order that the labels were listed. More information about the parameters can be found [here](https://huggingface.co/docs/api-inference/detailed_parameters#zero-shot-classification-task). This documentation provides an overview of the features, usage, and potential future enhancements of this tool.

## Walkthrough

![](https://youtu.be/Oz6akY6WfL8)

> [!note] Hugging Face API key can be generated [here](https://huggingface.co/settings/tokens).

## Features

### Text Selection and Labelling

The extension allows users to:

- **Select a Piece of Text**: Users can highlight any text within an article or webpage.
- **Label the Selected Text**: Upon selection, the extension labels the text based on predefined categories.
- **Work in Progress - Labelling text on the entire page**: While the extension doesn't seem to accurately label large amounts of text (i.e., from an entire Chrome tab), the UI presents an option for doing this operation.

### Predefined Labels

In the current implementation, three labels are predefined:

- **Travel**
- **History**
- **England**

### Scoring System

The extension provides scores for each label based on the relevance of the selected text. For example:

- **Travel**: Receives a high score if the text is about biking, routes, trails, etc.
- **History**: Scores high if there are mentions of historical elements such as ruins, labyrinths, castles, etc.
- **England**: Scores extremely low if there are no mentions of England.

### Label Scores Display

The scores for each label are displayed, providing insight into how the text is categorised.

## Potential Future Enhancements

### User-Defined Labels

Future versions could allow users to input their own labels, making the tool more flexible and user-centric.

### Tab Grouping

A proposed enhancement is to use the labels to create tab groups in Chrome. The process would involve:

1. **User Input**: Users provide a list of labels.
2. **Tab Classification**: The extension classifies all open tabs based on the text content and assigns them to the corresponding tab groups.

## Example Usage

1. **Select Text**: Highlight a passage from an article.
2. **Apply Labels**: Choose the option to label the selected text.
3. **View Scores**: Observe the scores assigned to each predefined label.

## Conclusion

This variant of the Breadboard Chrome extension provides a robust starting point for text labeling and categorization. With future enhancements, such as user-defined labels and tab grouping, it has the potential to become an even more powerful tool for organizing and analyzing web content.
