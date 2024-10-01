---
title: Automated GitHub PR Review Bot with Breadboard
aliases: []
tags:
- board
- breadboard
created: 2024-10-01T08:36:22Z
modified: 2024-10-01T08:36:22Z
---

# Demo: Automated GitHub PR Review Bot with Breadboard

![](https://youtu.be/Fmm_dn2bXcU)

<iframe src="https://breadboard-ai.web.app/?board=https://exadev.github.io/boards/breadboard-pr-bot.bgl.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

## Introduction

Welcome! In this demo, we'll showcase a GitHub Pull Request (PR) bot created using [Breadboard](https://breadboard-ai.github.io/breadboard). This bot automates code reviews by analyzing PR diffs and posting comments directly on GitHub, helping developers identify and address issues efficiently.

## Overview of the GitHub PR Bot

The GitHub PR bot leverages Breadboard to:

- **Fetch the diff** of a public repository's PR.
- **Analyze the changes** using a Language Model (LM).
- **Generate insightful comments** on the PR.
- **Automatically post** these comments to GitHub using the GitHub API.

## Setting Up the Bot

To use the bot, you'll need to provide the following:

1. **Personal Access Token (PAT)**: Used for authentication with the GitHub API. This should be supplied securely using secrets.
2. **Project Owner**: The GitHub username or organization that owns the repository.
3. **Project Name**: The name of the repository.
4. **PR Number**: The number of the pull request you want to review.

### Supplying the Personal Access Token

Ensure that your PAT has the necessary permissions to read and write comments on PRs. Keep your token secure by using environment variables or secret management features provided by Breadboard.

## Demonstration

### The Sample Repository

For this demo, we'll use a simple C program that prints numbers from an array sequentially. The code resides in a public GitHub repository.

### Creating a PR with Issues

We've created a PR that modifies the program to use a linked list instead of a static array. However, we've intentionally introduced some issues by using ChatGPT to generate suboptimal code. This allows the bot to identify and comment on these issues.

## Using Breadboard to Review the PR

With the bot set up, we'll input the required information:

- **Project Owner**: `username`
- **Project Name**: `sample-c-project`
- **PR Number**: `2`

The bot follows these steps:

1. **Fetches the PR diff** from the repository.
2. **Processes the diff** through an LM to analyze the code changes.
3. **Generates comments** highlighting potential issues or improvements.
4. **Posts the comments** to the PR via the GitHub API.

## Reviewing the Bot's Comments

After the bot completes its review, we can visit the PR to see the new comments:

1. **Comment on Node Creation**:
   - *"Consider using a loop to create nodes rather than creating each node individually. This will make your code more efficient and scalable."*

   **Original Code Snippet:**

   ```c
   // Creating nodes individually without a loop
   Node* node1 = (Node*)malloc(sizeof(Node));
   node1->data = 1;
   node1->next = NULL;

   Node* node2 = (Node*)malloc(sizeof(Node));
   node2->data = 2;
   node2->next = NULL;

   // ... and so on
   ```

2. **Comment on Memory Management**:
   - *"It's important to free allocated memory to avoid memory leaks. Please ensure you free the memory after use."*

   This is crucial in C programming to prevent memory leaks, which can lead to increased memory usage and potential crashes.

## Conclusion

This demo illustrates how the GitHub PR bot built with Breadboard can automate code reviews, providing valuable feedback directly on your PRs. By integrating a Language Model for code analysis, the bot helps maintain code quality and saves developers time.
