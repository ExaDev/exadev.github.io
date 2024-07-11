---
title: Market Research Board
aliases: []
tags:
  - board
  - breadboard/phase/2
created: 2024-05-30T11:47:48
modified: 2024-07-03T13:37:56
---

<!-- Market Research and Competitor Analysis boards `[WIP]`

A set of boards to:

- create a definition of a given product
- find competitors
- analyse competitors
- compare competitors
- perform market research

Boards:

- [Market Researcher](https://github.com/ExaDev/breadboard/blob/competitor-analysis/packages/breadboard-web/src/boards/market-researcher.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/competitor-analysis/packages/visual-editor/public/example-boards/market-researcher.json)
  - Abstracted out the [[projects/Breadboard/Phase 2/Google Custom Search Engine Tool]]

Continuation: [[projects/Breadboard/Phase 2/Product Launch Board]] and [[projects/Breadboard/Phase 2/Product Marketing Strategy Board]] -->

![](https://youtu.be/GYfLNDM4A5A)

The Market Research Board is a tool that is currently a work in progress but already offers intriguing insights into its capabilities and future potential.

## What is the Market Research Board?

The Market Research Board is designed to streamline the process of market research by automating searches and summarising results. It takes in a couple of key parameters:

- **Prompt:** This parameter instructs the language model on what task to perform. Currently, it uses a straightforward input method but is slated for an upgrade to the more sophisticated agent kit input.
- **Query:** A broader query that guides the search process.

## How Does It Work?

1. **Google Custom Search Engine Integration:**
   - The board uses the Google Custom Search Engine (CSE) API to fetch search results.
   - Secrets for accessing the API are pre-configured, ensuring smooth operation.
2. **Search Query Execution:**
   - For example, a query for "Google Breadboard" is run, typically returning a specific blog post by Dimitri as the top result.
   - The tool then processes this result, extracting and presenting key information.
3. **Data Processing:**
   - The raw HTML from the search result is fetched and parsed.
   - The data is then converted into a pseudo-markdown format to facilitate context processing by the language model (GNI in this case).
4. **Prompt and Data Merging:**
   - The processed data is merged with the prompt configuration to generate a concise, bullet-pointed output.

## Current Capabilities and Future Plans

- **Current Output:**
  - The tool provides fairly accurate search terms and initial analysis, offering a solid starting point for further refinement.
- **Future Enhancements:**
  - Enhanced Intelligence: More granular summarisation of multiple results is planned, moving beyond simply popping off the first result.
  - Improved Prompt Tuning: Fine-tuning prompts to generate more detailed and accurate product definitions.
  - Broader Search Integration: Using the output to push more comprehensive search terms into CSE for a wider range of results, followed by summarisation against a core product definition.

## Applications and Continuations

The Market Research Board is not just a standalone tool. Its concept extends to creating a:

- **Product Launch Board:** To assist in planning and executing product launches.
- **Product Marketing Strategy Board:** To devise effective marketing strategies.

These tools are designed to feed into each other, forming a cohesive suite for comprehensive market research, product launch planning, and marketing strategy development.

## Conclusion

While the Market Research Board is still evolving, its current capabilities provide a promising glimpse into its potential. Future updates will enhance its functionality, making it an indispensable tool for market researchers, product managers, and marketing strategists. Stay tuned for more developments as we continue to refine and expand this innovative tool.
