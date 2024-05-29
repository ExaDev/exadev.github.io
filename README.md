> [!TIP]
> The `🔗` links are to the Breadboard Web App with the respective board loaded.

## Contract 1

[GoogleChromeLabs](https://github.com/GoogleChromeLabs)/[breadboard-samples](https://github.com/GoogleChromeLabs/breadboard-samples)

### Projects

#### DevPulse

> Summarising Developer Sentiment

#### AutoBake

> Creating Bootstrapped projects (docs, code, etc)

#### CourseCrafter

> Merging multiple docs into a learning path

### breadboard-kits

[ExaDev/breadboard-kits](https://github.com/ExaDev/breadboard-kits)

## Contract 2

### breadboard-examples

[github.com/ExaDev/breadboard-examples](https://github.com/ExaDev/breadboard-examples)

- [code-node-dynamic](https://github.com/ExaDev/breadboard-examples/tree/main/src/examples/code-node-dynamic)
  [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/code-node-dynamic/graph.json)
- [code-node](https://github.com/ExaDev/breadboard-examples/tree/main/src/examples/code-node)
  [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/code-node/graph.json)
- [harness-with-diagnostics](https://github.com/ExaDev/breadboard-examples/tree/main/src/examples/harness-with-diagnostics)
  [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/harness-with-diagnostics/graph.json)
- [hello-world](https://github.com/ExaDev/breadboard-examples/tree/main/src/examples/hello-world)
  [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/hello-world/graph.json)
- [kit-with-code-node](https://github.com/ExaDev/breadboard-examples/tree/main/src/examples/kit-with-code-node)
  [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/kit-with-code-node/graph.json)
- [making-a-kit](https://github.com/ExaDev/breadboard-examples/tree/main/src/examples/making-a-kit)
  [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/making-a-kit/graph.json)
- [multiple-inputs-one-output](https://github.com/ExaDev/breadboard-examples/tree/main/src/examples/multiple-inputs-one-output)
  [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/multiple-inputs-one-output/graph.json)
- [one-input-multiple-outputs](https://github.com/ExaDev/breadboard-examples/tree/main/src/examples/one-input-multiple-outputs)
  [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/one-input-multiple-outputs/graph.json)
- [running-serialized-board-with-code-node](https://github.com/ExaDev/breadboard-examples/tree/main/src/examples/running-serialized-board-with-code-node)
  [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/running-serialized-board-with-code-node/graph.json)
- [wiring-nodes](https://github.com/ExaDev/breadboard-examples/tree/main/src/examples/wiring-nodes)
  [🔗](https://breadboard-ai.web.app/?mode=list&board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/wiring-nodes/graph.json)

### BreadBot

[github.com/ExaDev/breadbot](https://github.com/ExaDev/breadbot/branches)

A package too experiment with interacting with the Discord API. The current version of the board is able to accept, validate and execute boards.
<!-- In a limited capacity it is also possible to prompt the user for input, however, this is not yet fully implemented due to the current limitations with interactively (synchronously and incrementally) executing boards node-by-node. -->
In a limited capacity it is also possible to prompt the user for input. This is achieved by creating a promise on the server thread which is resolved when the user responds to the prompt.
Once it is possible to serially execute boards node-by-node, it will be possible to interactively prompt the user for input.

### Invoker API

https://github.com/ExaDev/breadboard/tree/881-breadboard-invoker-endpoint-firebase-functions/packages/invoker-api

### BGL JSX

A work-in-progress package which allows for the creation of Breadboard Graphs using JSX-like syntax in `TSX` files.

e.g.

```tsx
<board>
	<nodes>
		<node id="input-1" type="input" />
		<node id="output-1" type="output" />
	</nodes>
	<edges>
		<edge from="input-1" out="say" to="output-1" in="hear" />
	</edges>
</board>
```

`XML`-like syntax will allow for web-developers to write type-safe Breadboard Graphs in a familiar way.

The experimental branches can be found at:
- [jsx-board](https://github.com/ExaDev/breadboard/tree/jsx-board/packages/jsx-board)
- [xml-board](https://github.com/ExaDev/breadboard/tree/xml-board/packages/xml)

### Breadboard Gallery

- [github.com/ExaDev/breadboard-gallery](https://github.com/ExaDev/breadboard-gallery)

### OpenAlex Tool

- [Entity Search](https://github.com/breadboard-ai/breadboard/blob/main/packages/breadboard-web/src/boards/open-alex-entity-search-list.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/open-alex-entity-search-list.json)

### Holiday Tool

Tool-worker boards using the free public [Nager.Date](https://date.nager.at/Api) API for holiday information. Useful for boards that be used for planning and/or scheduling.

- [Available Countries](https://github.com/breadboard-ai/breadboard/blob/main/packages/breadboard-web/src/boards/nager.date/available-countries.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/nager.date/available-countries.json)
- [Country Info](https://github.com/breadboard-ai/breadboard/blob/main/packages/breadboard-web/src/boards/nager.date/country-info.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/nager.date/country-info.json)
- [Is Today A Holiday](https://github.com/breadboard-ai/breadboard/blob/main/packages/breadboard-web/src/boards/nager.date/is-today-public-holiday.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/nager.date/is-today-public-holiday.json)
- [Long Weekend](https://github.com/breadboard-ai/breadboard/blob/main/packages/breadboard-web/src/boards/nager.date/long-weekend.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/nager.date/long-weekend.json)
- [Next Worldwide Holiday](https://github.com/breadboard-ai/breadboard/blob/main/packages/breadboard-web/src/boards/nager.date/next-holiday-worldwide.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/nager.date/next-holiday-worldwide.json)
- [Public Holidays](https://github.com/breadboard-ai/breadboard/blob/main/packages/breadboard-web/src/boards/nager.date/public-holidays.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/breadboard-ai/breadboard/main/packages/breadboard-web/public/graphs/nager.date/public-holidays.json)

### HackerNews Tool

Boards intended for use as nested boards to interact with both the Algolia and Firebase APIs for HackerNews. Abstracted and generalised after being used for [DevPulse](DevPulse)

- [Algolia Search](https://github.com/ExaDev/breadboard/blob/hackersnews-toolworker/packages/breadboard-web/src/boards/hacker_news_algolia_search.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/hackersnews-toolworker/packages/breadboard-web/public/graphs/hacker_news_algolia_search.json)
- [Algolia Story](https://github.com/ExaDev/breadboard/blob/hackersnews-toolworker/packages/breadboard-web/src/boards/hacker_news_algolia_story_from_id.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/hackersnews-toolworker/packages/breadboard-web/public/graphs/hacker_news_algolia_story_from_id.json)
- [Firebase Story](https://github.com/ExaDev/breadboard/blob/hackersnews-toolworker/packages/breadboard-web/src/boards/hacker_news_firebase_story_from_id.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/hackersnews-toolworker/packages/breadboard-web/public/graphs/hacker_news_firebase_story_from_id.json)
- [Firebase Top Stories](https://github.com/ExaDev/breadboard/blob/hackersnews-toolworker/packages/breadboard-web/src/boards/hacker_news_firebase_top_story_ids.ts)
  [🔗](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard/hackersnews-toolworker/packages/breadboard-web/public/graphs/hacker_news_firebase_top_story_ids.json)

### Chrome Summariser Extension

A Chrome extension for using Breadboard with the Google Chrome API. Currently, the extension has a single purpose: it is used to summarise web page content and select text. This version of the extension is exploratory. When feasible, a more generalised version will be created that can be used with any board.

- [breadboard-chrome-extension](https://github.com/ExaDev/breadboard/tree/breadboard-chrome-extension/packages/breadboard-chrome-extension)
- [create-breadboard-chrome-extension-templates](https://github.com/ExaDev/breadboard/tree/create-breadboard-chrome-extension-templates/packages/breadboard-chrome-extensions)
- [breadboard-chrome-extension-with-board-settings](https://github.com/ExaDev/breadboard/tree/breadboard-chrome-extension-with-board-settings/packages/breadboard-chrome-extension)
- [breadboard-sentiment-analysis-chrome-extension](https://github.com/ExaDev/breadboard/tree/breadboard-sentiment-analysis-chrome-extension/packages/breadboard-chrome-extension)
- [breadboard-chrome-extension](https://github.com/ExaDev/breadboard/tree/breadboard-chrome-extension-for-summarising-page/packages/breadboard-chrome-extension)
- [breadboard-chrome-extension-for-summarising-page](https://github.com/ExaDev/breadboard/tree/breadboard-chrome-extension-for-summarising-page/packages/breadboard-chrome-extension)

### Breadboard React Components

[github.com/ExaDev/react-breadboard-components](https://github.com/ExaDev/react-breadboard-components)

[npmjs.com/react-breadboard-components](https://www.npmjs.com/react-breadboard-components)

A collection of React components which wrap the native Breadboard Lit components to allow for easier integration with React applications.

### Create Breadboard Package

[github.com/ExaDev/create-breadboard](https://github.com/ExaDev/create-breadboard)

```bash
npm init breadboard
```

A package for bootstrapping breadboard, kits and apps that use breadboards.

Currently, the package supports:

- Typescript breadboard
- Vite React Web App
- Vite Svelte Web App
- Vite Vue Web App
- Vanilla HTML page embedding a breadboard

### Slack Summariser

A board for interfacing with Slack API

Uses:

- For messages within a given channel and time frame
  - Summarisation of discussions
  - Sentiment Analysis
  - Keyword Extraction
  - Question Answering

### Reserved NPM Packages

#### [npmjs.com/breadboard-cli](https://www.npmjs.com/package/breadboard-cli)

#### `create` packages

##### [create-breadboard](https://www.npmjs.com/package/create-breadboard)

```bash
npx create-breadboard
npm init breadboard
```

##### [create-board](https://www.npmjs.com/package/create-board)

```bash
npx create-board
npm init board
```

##### [create-breadboard-app](https://www.npmjs.com/package/create-breadboard-app)

```bash
npx create-breadboard-app
npm init breadboard-app
```

##### [create-breadboard-kit](https://www.npmjs.com/package/create-breadboard-kit)

```bash
npx create-breadboard-kit
npm init breadboard-kit
```

##### [create-breadboard-chrome-extension](https://www.npmjs.com/package/create-breadboard-chrome-extension)

```bash
npx create-breadboard-chrome-extension
npm init breadboard-chrome-extension
```

##### [create-breadboard-extension](https://www.npmjs.com/package/create-breadboard-extension)

```bash
npx create-breadboard-extension
npm init breadboard-extension
```
