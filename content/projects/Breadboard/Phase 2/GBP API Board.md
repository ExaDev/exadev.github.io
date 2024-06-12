---
title: GBP API Board
aliases:
  - Google Business Platform Board
tags:
  - board
  - breadboard/phase/2
  - GBP
complete:
created: 2024-06-12T09:55:08
modified: 2024-06-12T10:34:26
started: true
---

As a continuation of the [Review Reply Board](projects/Breadboard/Phase%202/Review%20Reply%20Board.md) the GBP API will be used to pull reviews from a Google Business Profile.

It would also be possible to post the replies, though this will probably only be after user confirmation.

At present because the GBP API only works with OAuth, a straightforward implementation requires completion of the Breadboard OAuth Service provide. As a stopgap a proof of concept has beegin validated which uses a service account with Google Workspace Domain-wide Delegation of Authority to generate a token.
