---
title: Breadboard Chrome Extension
aliases: []
tags:
  - breadboard/phase/2
  - Chrome
  - chrome_extension
  - React
  - Vite
created: 2024-06-07T10:05:18
modified: 2024-06-17T13:17:51
---

## Chrome Summariser Extension

A Chrome extension for using Breadboard with the Google Chrome API. Currently, the extension has a single purpose: to summarise web page content and select text. This version of the extension is exploratory. When feasible, a more generalised version will be created to be used with any board.

![Pasted image 20240529141346](projects/Breadboard/files/Pasted%20image%2020240529141346.png)

![333637740-a11a3778-4426-421b-8d26-df431da5abc5](projects/Breadboard/files/333637740-a11a3778-4426-421b-8d26-df431da5abc5.mov)

- [create-breadboard-chrome-extension-templates](https://github.com/ExaDev/breadboard/tree/create-breadboard-chrome-extension-templates/packages/breadboard-chrome-extensions)

Two basic chrome extensions that were built initially while exploring the available options for creating one. In this example, there are two extensions that are built with Vite/React/Typescript and Typescript/Webpack respectively. As a future direction for this branch, we would like to create a template repository for this and have commands such as "create-breadboard-chrome-extension -ts/webpack" or "create-breadboard-chrome-extension -react/vite" that would generate a template for a basic chrome extension using the specified tools and containing a basic breadboard, thus speeding up the initial process of getting started with chrome extensions and breadboard.

- [breadboard-chrome-extension-running-basic-board](https://github.com/ExaDev/breadboard/tree/breadboard-chrome-extension-running-basic-board/packages/breadboard-chrome-extension)

An initial chrome extension built with Vite, React and Typescript that runs a basic breadboard. Users can type a message into the extension's popup window and have the message logged back to them as they type it.

- [breadboaBd-chrome-extension-for-summarising-page](https://github.com/ExaDev/breadboard/tree/breadboard-chrome-extension-for-summarising-page/packages/breadboard-chrome-extension)

The most up-to-date and stable version of this project, that uses the Claude API and Breadboard to summarise either all the text in the current chrome tab or a selected piece of text. The summariser can be run both from the extension's main popup window and from the context menu after selecting a bit of text from a page, right-clicking and selecting the "Breadboard > Get summary" option in the context menu. Compared to the initial branches that were the starting point for this project, the summariser follows a different structure in terms of organising files which seemed like a better choice for a chrome extension built with Vite and React.

- [breadboard-sentiment-analysis-chrome-extension](https://github.com/ExaDev/breadboard/tree/breadboard-sentiment-analysis-chrome-extension/packages/breadboard-chrome-extension)

This follows the same structure as the summariser, but the focus here was to integrate a board that performs sentiment analysis on a selected piece of text.

## Reusable Boards

- [Claude summary](https://github.com/ExaDev/breadboard/blob/claude-summarisation-board-test/packages/breadboard-chrome-extension/src/breadboard/graphs/claudeBoard.json)
  [🔗](https://breadboard-ai.web.app/?board=https%3A%2F%2Fraw.githubusercontent.com%2FExaDev%2Fbreadboard%2Fclaude-summarisation-board-test%2Fpackages%2Fbreadboard-chrome-extension%2Fsrc%2Fbreadboard%2Fgraphs%2FclaudeBoard.json)

### Chrome Extension for Summarising Web Pages

#### Overview

Welcome to the Chrome Extension that leverages the power of Breadboard to summarise web pages or selected text effortlessly. Whether you need to condense lengthy articles or extract key points from specific paragraphs, our extension is designed to make this process seamless and efficient.

### Walkthrough

![](https://youtu.be/X24Xggq_nNU)

### Code Walkthrough

![](https://youtu.be/YC3ueVfCxP0)

#### Key Features

- **Summarise Entire Pages**: With just a click, generate a concise summary of the entire web page you're viewing.
- **Summarise Selected Text**: Highlight any text on the page, right-click, and choose the option to Summarise your selection for a targeted overview.
- **Automatic Downloads**: Summaries are automatically downloaded as text files for easy access and storage.
- **Customisable Settings**: Manage your API keys and other settings directly within the extension for personalised use.

#### How It Works

1. **Activate the Extension**: Click on the Breadboard icon in the Chrome toolbar to open the extension popup.
2. **Choose Your Option**: Select whether you want to Summarise the entire page or just a highlighted section.
3. **View Your Summary**: The extension will process your request, and a summary will be generated and downloaded if necessary.

#### Detailed Walkthrough

- **Step 1**: Click on the Breadboard icon at the top of your Chrome browser.
- **Step 2**: Choose to either Summarise the whole page or selected text. For summarising the entire page, click the respective button and wait for the summary to appear. For summarising selected text, highlight the desired text, then right-click and choose "Summarise Selection."
- **Step 3**: The summary will be processed and displayed in the extension popup. For selected text, you will also see a badge indicating that the process is running and when it completes, the summary will be downloaded as a text file.

#### Settings Page

Customise your experience by accessing the settings page within the extension:

- **API Key Management**: Add or remove API keys as needed. Simply input your key, add it to the list, and save your settings.
- **User Interface**: The settings page mimics the Breadboard web app's style for a familiar user experience.

#### Technical Details

- **Built with React and Vite**: The extension utilizes React for its front-end components and Vite for the build process, ensuring a smooth and efficient performance.
- **Background Script**: Handles context menu interactions, sending text selections to Breadboard, and managing background tasks for summarization.
- **Permissions**: Requires permissions for scripting, accessing the active tab, local storage, context menus, and downloading files to function properly.

#### Upcoming Features

Stay tuned for more functionalities including:

- **Sentiment Analysis**: Understand the emotional tone of the text.
- **Text Labelling**: Categorise and label text efficiently.
- **Audio Transcription**: Record audio and generate transcripts using an upcoming audio transcription board.

## Sentiment Analysis

## Text Labelling
