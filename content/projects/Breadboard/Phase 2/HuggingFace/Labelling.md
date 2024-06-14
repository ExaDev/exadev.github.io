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


## Text Classification Board Demonstration

### Introduction
In this demonstration we show Breadboard integration with the Hugging Face Inference API. The purpose of this board is to perform Text Classification.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nIZmNxncF8Y?si=7fkfA48Mf96enxTz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Inputs Overview
- **API Key**: Required to access the Hugging Inference API. See [README Source](#source) on how to generate one for yourself.
- **Input Text**: The piece of text we want to classify. For example: "I recently bought a device from your company, but it is not working as advertised. I would like to get reimbursed."
- **Candidate Labels**: The set of categories we want to classify the text against.
- **Multi-label Flag**: Indicates if the labels can overlap.
- **Use Cache Flag**: Speeds up requests by returning a cached response if the model has seen the inputs before.
- **Wait for Model Flag**: Ensures the model fully loads before returning a response, useful for large language models.

### Example Demonstration
Given the input text: "I recently bought a device from your company, but it is not working as advertised. I would like to get reimbursed." and labels: `refund, cooking, weather`  we expect the label to be "refund" as this is the core subject of the text.

### Running the Classification
When we send the input to the API, the response confirms that "refund" is the highest-scoring label.

### Conclusion
This simple example illustrates the functionality of our text classification board. In a later video, we will demonstrate a use case of this board using our [Chrome Breadbaord extension](../Chrome%20Extension.md).

## Source

[README](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/labelling/README.md)
[Board](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/labelling/index.ts)
[Graph](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/labelling/board.json)
[Breadboard Web Example](https://breadboard-ai.web.app/?mode=build&board=https%3A%2F%2Fraw.githubusercontent.com%2FExaDev%2Fbreadboard-examples%2FHugging-Face-Clean-History%2Fsrc%2Fexamples%2Flabelling%2Fboard.json)
