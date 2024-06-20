---
title: Image Classification
aliases:
  - HuggingFace Image Classification
  - Image Classification
tags:
  - breadboard
  - breadboard/phase/2
  - classification
  - HuggingFace
  - image_classification
created: 2024-05-31T19:11:08
modified: 2024-06-18T08:30:38
---

In this section, we will provide a demonstration of using Breadboard to perform image classification using the Hugging Face inference API.

> [!WARNING]
> Because the core kit stringifies the request body, this wont currently work inside of the board.
>
> However it can still be run on CLI as it demonstrates the expected board functionality using built in fetch function.

![](https://youtu.be/6XrJgXb4gsU)

## Introduction

In this demonstration, we will be showcasing how to use a board to classify images. This demo is performed using the CLI environment due to a current bug in the core kit. The issue lies in the way requests are handled: they are always stringified, while the API endpoint expects raw binary format images.

See more about the endpoint [here](https://huggingface.co/docs/api-inference/detailed_parameters?code=js#image-classification-task).
 
## Image Classification Process

The Hugging Face board takes an image as input and returns a set of labels attempting to classify the image. For this demonstration, we will use a picture of a cat.

## Running the Board

1. **Upload Image**: Begin by uploading the image to be classified.
2. **Execute Classification**: Run the board to classify the uploaded image.

## Results

Upon running the board, the output consists of labels related to the image content. For our cat image, all the labels returned were associated with cats, indicating successful image classification.

## Future Use Cases

This could be useful functionality in our [Chrome Breadboard API](../Chrome%20Extension.md). This would enable users to upload images via a browser or take screenshots and classify these images using the Hugging Face board.

## Conclusion

This demonstration illustrates the current capabilities and future potential of the hooking face board for image classification within the Breadboard project. Thank you for your attention.

## Source

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/image-classification/index.ts)
- [JSON](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/image-classification/graph.json)

<!--
### Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/image-classification/graph.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/image-classification/graph.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/image-classification/graph.json" style="width: 100%; height: 500px; border: 0;"></iframe>
-->
