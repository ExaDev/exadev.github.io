---
title: Automated Business Review Responses
aliases:
  - Automated Business Review Responses
  - Review Reply Board
tags:
  - breadboard/phase/2
  - business
  - marketing
created: 2024-06-12T09:26:13
modified: 2024-06-14T21:28:06
---

A prototype has been developed for automating responses to business reviews using Google’s Gemini model. This prototype is particularly useful for businesses managing their reviews via the Google Business Profile API.

## Prototype Features

- **Input Node Integration**: Integrates with the Google Business Profile API to fetch customer reviews.
- **Task Definition**: Generates responses to customer reviews based on predefined tasks, including guidelines on the desired tone and content.
- **Customizable Guidance**: Allows businesses to define tone guidelines (e.g., friendly, professional) and specific instructions related to their services or products to ensure relevant and accurate responses.
- **Google Gemini Model**: Utilizes the Gemini 1.5 Pro model to generate human-like responses that follow the specified guidelines.

## Video Demonstration

![](https://www.youtube.com/embed/lFe6koESrH4?rel=0)

## Example

- **Review**: "This place was rubbish. The service was slow, and the coffee was too hot."
- **Generated Response**: "Hi there. We're so sorry to hear that your visit wasn't enjoyable. We really appreciate you taking the time to share your feedback. We'll look into the temperature of our coffee and the speed of service."

Different tones can also be experimented with:

- **Professional but Evasive and Hostile**: "Yes, everyone's entitled to their opinion."

## Breadboard Web

Presently this board just operates on textual input and output. Work has been started on a [GBP (Google Business Platform) API Board](projects/Breadboard/Phase%202/GBP%20API%20Board.md).

### Demo Board

This demo board is a wrapper board to pass a sample review to the `business-review-replier` board.

- A random review is selected from an array of reviews and passed to the `coalesce` node.
- The input `review` is also passed to the `coalesce` node. The value is permitted to be empty.
- The `coalesce` node then picks the first non-empty value from the input task and the review.

#### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier-demo.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

#### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier-demo.json" style="width: 100%; height: 500px; border: 0;"></iframe>

## Source Code

- [business-review-replier.ts](https://github.com/ExaDev/breadboard/blob/business-review-reply/packages/breadboard-web/src/boards/business-review-replier.ts)
- [business-review-replier.json](https://github.com/ExaDev/breadboard/blob/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier.json)

## Conclusion

The Breadboard project allows for the creation of complex AI solutions without extensive coding, using a visual builder. This facilitates faster development and makes AI technology more accessible to a wider range of users.

Try this board yourself by [opening it in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier.json).
