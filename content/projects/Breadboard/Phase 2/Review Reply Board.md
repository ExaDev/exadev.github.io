---
title: Review Reply Board
aliases: []
tags:
  - breadboard/phase/2
  - business
  - Chrome
  - marketing
created: 2024-06-12T09:26:13
modified: 2024-06-13T09:28:06
---

A board that generates a response based on the provided task of generating a reply to a review, a guidelines for tone, business voice and the content of a review itself.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/lFe6koESrH4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [business-review-replier.ts](https://github.com/ExaDev/breadboard/blob/business-review-reply/packages/breadboard-web/src/boards/business-review-replier.ts)
- [business-review-replier.json](https://github.com/ExaDev/breadboard/blob/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier.json) [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier.json)

## Breadboard Web

[Open externally](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier.json)

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier.json" style="width: 100%; height: 500px; border: 0;"></iframe>

Presently this board is just operates on textual input and output.

Work has been started on a [GBP API Board](projects/Breadboard/Phase%202/GBP%20API%20Board.md)

## Demo Board

This demo board is a wrapper board to pass a sample review to the `business-review-replier` board.

- A random review is selected from an array of reviews and passed to the `coalesce` node.
- The input `review` is also passed to the `coalesce` node. The value is permitted to be empty.
- The `coalesce` node then picks the first non-empty value from the input task and the review.

[Open in breadboard web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier-demo.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier-demo.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier-demo.json" style="width: 100%; height: 500px; border: 0;"></iframe>
