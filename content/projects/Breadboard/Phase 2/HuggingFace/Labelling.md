---
title: Labelling
aliases:
  - HuggingFace Labelling
  - Labelling
tags:
  - breadboard/phase/2
  - HuggingFace
  - labelling
created: 2024-05-31T19:11:18
modified: 2024-06-12T10:34:26
---

Labelling

- [github.com/ExaDev/breadboard-examples/labelling](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/labelling)
- [github.com/ExaDev/breadboard-examples/labelling/index.ts](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/labelling/index.ts)
- [github.com/ExaDev/breadboard-examples/labelling/board.json](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/labelling/board.json) [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/labelling/board.json)

## Text Classification Board Demonstration

### Introduction
We would like to demonstrate one of the boards we have been working on. The purpose of this board is to perform text classification using the Hugging Face API.

### Inputs Overview
Here are the key inputs for the board:

- **API Key**: Required to access the API.
- **Input Text**: The piece of text we want to classify. For example: "I recently bought a device from your company, but it is not working as advertised. I would like to get reimbursed."
- **Candidate Labels**: The set of categories we want to classify the text against.
- **Multi-label Flag**: Indicates if the labels can overlap.
- **Use Cache Flag**: Speeds up requests by returning a cached response if the model has seen the inputs before.
- **Wait for Model Flag**: Ensures the model fully loads before returning a response, useful for large language models.

### Example Demonstration
Given the input text, "I recently bought a device from your company, but it is not working as advertised. I would like to get reimbursed," we expect the label to be "refund" as this is the core subject of the text.

### Running the Classification
When we send the input to the API, the response confirms that "refund" is the highest-scoring label.

### Conclusion
This simple example illustrates the functionality of our text classification board. In a later video, we will demonstrate a use case of this board using our Chrome Red Board extension.
