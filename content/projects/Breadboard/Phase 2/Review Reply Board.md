---
title: Review Reply Board
aliases: []
tags:
  - breadboard/phase/2
  - business
  - Chrome
  - marketing
created: 2024-06-12T09:26:13
modified: 2024-06-12T16:56:25
---

A board generates a response based on the provided task of generating a reply to a review, a guidelines for tone, business voice and the content of a review itself.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/lFe6koESrH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>

- [business-review-replier.ts](https://github.com/ExaDev/breadboard/blob/business-review-reply/packages/breadboard-web/src/boards/business-review-replier.ts)
- [business-review-replier.json](https://github.com/ExaDev/breadboard/blob/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier.json) [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier.json)

[This demo board](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier-demo.json) is a wrpaper which passes a randomly selected review to the `business-review-replier` board.

![Pasted image 20240612092655.png](projects/Breadboard/Phase%202/files/Pasted%20image%2020240612092655.png)

![Pasted image 20240612092647.png](projects/Breadboard/Phase%202/files/Pasted%20image%2020240612092647.png)

Presently this board is just operates on textual input and output.

Work has been started on a [GBP API Board](projects/Breadboard/Phase%202/GBP%20API%20Board.md)

## Live Demo

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier-demo.json&embed" style="width: 100%; height: 500px; border: 0;"/>

[Open in breadboard web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier-demo.json)
