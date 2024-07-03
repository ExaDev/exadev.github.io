---
title: "\"AI\" probably isn't the hard part"
aliases: []
tags:
  - breadboard
created: 2024-07-03T14:00:10
modified: 2024-07-03T15:43:53
---

We're all frogs in the AI pot and it's surprising how much the temperature of the water has increased recently. The commoditisation of LLMs-as-a-service and the proliferation of their capabilities has thrown people's understanding of how difficult some problems are into disarray. Sure, this isn't a new problem, as [XKCD](https://xkcd.com/1425/) famously remarked on, but recently I think the dial has moved again.

![](https://imgs.xkcd.com/comics/tasks_2x.png "XKCD 1425")

Software projects and new startups get pitched to me a lot - literally on a weekly basis. A large proportion of these fall into the same template of AI + SaaS (not saying they aren't novel and unique!). These conversations usually precede any kind of funding, so the question usually is, can this concept be turned into a scrappy product with a paying user base? Herein lies the mismatch of expectations. The fact is that more often than not, people's "AI" ambitions can be achieved with off-the-shelf APIs, at least to the proof-of-concept stage. So the problem is not really an "AI" problem, it's a wiring problem.

This leads me to my (slightly sensationalist) point - **Building proof-of-concept AI systems is becoming easy, building good SaaS is still hard**. The caveat is of course that the off-the-shelf AI services can fulfil your needs.

There's a new wave of AI composition frameworks borne from this very observation. One such framework is [Breadboard](https://github.com/breadboard-ai/breadboard), which we've been working on with Google Labs. Breadboard lets you quickly design complex workflows with GenAI, bake them into portable JSON, and even live-debug them in a web environment!

As you can see from the video below, if someone came to me with a product idea to respond to business reviews, a working prototype of the "AI" part can be plumbed together in a little over 30 minutes!

![](https://www.youtube.com/embed/lFe6koESrH4?rel=0)

<https://breadboard-ai.web.app/?board=https://exadev.github.io/boards/business-reply.bgl.json>

<iframe src="https://breadboard-ai.web.app/?board=https://exadev.github.io/boards/business-reply.bgl.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

All that's left is the frontend, backend, infrastructure, external integrations, testing, billing and subscription management, business operations, support, maintenance.. you get the picture.

N.B. Please come and get involved with [Breadboard](https://breadboard-ai.github.io/breadboard/)! It can do amazing stuff already but there is so much more to do. It's all open source and there is a [Discord](https://discord.gg/breadboard) server.
