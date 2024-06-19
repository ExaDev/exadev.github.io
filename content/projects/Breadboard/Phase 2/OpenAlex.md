---
title: OpenAlex Tool
aliases: []
tags:
  - breadboard
  - breadboard/phase/2
  - OpenAlex
  - toolworker
created: 2024-05-30T11:45:43
modified: 2024-06-19T15:16:28
---

The OpenAlex Entity Search Results Board is a simple and efficient tool within the Breadboard web ecosystem. It queries the OpenAlex API to provide a list of entities related to a given search term. This documentation will guide you through the board's functionality, configuration options, and underlying components.

![](https://youtu.be/HXbsFOdww-I)

## Features

- **Entity Type Selection:** A drop-down list of OpenAlex entity types allows users to choose the type of entities they want to search and receive.
- **Pagination Control:** Users can specify the number of pages to return and the number of results per page.
- **Field Selection:** Users can select specific fields for the entities to determine which details are returned in the search results.
- **Search Term Input:** The search term can be customised, and by using double quotes, users can ensure exact matches for their queries.

## Configuration Options

### Entity Type

- **Default:** `work`
- **Options:** Various entity types provided by OpenAlex.

### Pagination

- **Number of Pages:** User-defined.
- **Results per Page:** User-defined.

### Field Selection

- **Selectable Fields:** Users can choose which details to receive in the search results.

### Search Term

- **Default:** `artificial intelligence`
- **Custom Example:** `machine learning` (using double quotes for exact matches).

## How It Works

1. **Core Kit and Template Kit Integration:**
	- The board uses the Core Kit and Template Kit.
	- The Code Node, part of the Core Kit, handles the main logic behind the scenes.
2. **URL Template Node:**
	- This node, from the Template Kit, safely constructs a URL with the selected path and query parameters.
3. **Fetch Node:**
	- The constructed URL is passed to the Fetch Node (part of the Core Kit).
	- This node fetches the details and returns the response.
4. **Custom Node for Object Spreading:**
	- The response is passed to a custom node that spreads the properties of the given object into a new object, ensuring the correct type is returned to the output.

## Usage

Currently, the board is run through Breadboard web. It is designed as a tool worker board, with future plans to utilise the specialist worker from the Agents Kit to call and run this board as a tool.

Stay tuned for upcoming demonstrations and updates on this feature.

Thank you for using the OpenAlex Entity Search Results Board within the Breadboard project.

## Breadboard Web

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/open-alex-entity-search-list.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/open-alex-entity-search-list.json&embed&edit" style="width: 100%; height: 500px; border: 0;"></iframe>
