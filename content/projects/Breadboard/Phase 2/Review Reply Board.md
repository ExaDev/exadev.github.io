---
title: Review Reply Board
aliases: []
tags:
  - breadboard/phase/2
  - business
  - Chrome
  - marketing
created: 2024-06-12T09:26:13
modified: 2024-06-12T11:09:46
---

## Review Reply Board

A board generates a response based on the provided task of generating a reply to a review, a guidelines for tone, business voice and the content of a review itself.

- [business-review-replier.ts](https://github.com/ExaDev/breadboard/blob/business-review-reply/packages/breadboard-web/src/boards/business-review-replier.ts)
- [business-review-replier.json](https://github.com/ExaDev/breadboard/blob/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier.json) [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier.json)

[This demo board](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/business-review-reply/packages/breadboard-web/public/graphs/business-review-replier-demo.json) is a wraper which passes a randomly selected review to the `business-review-replier` board.

![](projects/Breadboard/Phase%202/files/Pasted%20image%2020240612092655.png)

![](projects/Breadboard/Phase%202/files/Pasted%20image%2020240612092647.png)

Presently this board is just operates on textual input and output.

Work has been started on a [GBP API Board](projects/Breadboard/Phase%202/GBP%20API%20Board.md)
