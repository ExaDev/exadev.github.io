---
title: Sentence Similarity
aliases:
  - HuggingFace Sentence Similarity
  - Sentence Similarity
tags:
  - breadboard/phase/2
  - HuggingFace
  - sentence_similarity
created: 2024-05-31T19:11:53
modified: 2024-06-20T14:14:40
---

The Hugging Face Sentence Similarity Board is a tool designed to evaluate the similarity between a given source sentence and a list of target sentences. This board uses advanced language models to assign a similarity score between 0 and 1 for each sentence in the list.

> [!warning]
> Sometimes it will error because model is loading just run the board again

> [!info]
> API Key can be generated for free: <https://huggingface.co/settings/tokens>

![](https://youtu.be/AQ1sDSpvdmA)

## Functionality

### Description

Given a source sentence and a list of sentences, the board compares each sentence in the list to the source sentence and assigns a similarity score between 0 and 1:

- **Score 0**: Indicates no correlation or similarity between the sentences.
- **Score 1**: Indicates the sentences are very similar or identical.

### Example

When provided with a source sentence and three target sentences, the board produces the following results:
- **Sentence 1**: Relatively high similarity score.
- **Sentence 2**: Highest similarity score of 0.94.
- **Sentence 3**: Very low similarity score, indicating it is not related to the source sentence.

## Use Cases

### Searching Text

A primary use case for this board is searching through a piece of text when the exact wording is not known. For instance, if you are searching for a specific topic within a research paper or document and are unsure of the exact phrasing, you can use this board. Input a source sentence that approximates the sentence you are looking for, and the board will provide a list of sentences with high similarity scores.

### Other Potential Use Cases

- **Review Analysis**: Quickly search through product or service reviews for specific phrases or topics.
- **Document Comparison**: Compare different versions of a document to identify similarities and differences.
- **Content Filtering**: Filter and highlight relevant content from large text datasets.

## Conclusion

The Hugging Face Sentence Similarity Board is a versatile tool for anyone needing to compare sentences and evaluate their similarity. Whether for academic research, content review, or text analysis, this board provides accurate and efficient sentence similarity scoring.

## Source

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/sentence-similarity/index.ts)
- [JSON](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/sentence-similarity/board.json)

## Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/sentence-similarity/board.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/sentence-similarity/board.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/sentence-similarity/board.json" style="width: 100%; height: 500px; border: 0;"></iframe>
