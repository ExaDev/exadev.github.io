---
title: BreadBot - Discord Bot
aliases:
  - BreadBot
  - BreadBot - Breadboard Discord Bot
  - BreadBot - Discord Bot
tags:
  - breadboard/phase/2
  - Discord
  - breadboard
created: 2024-05-30T11:43:22
modified: 2024-06-19T14:00:52
---

![BreadBot Logo](projects/Breadboard/files/Pasted%20image%2020240529141552.png)

[Check out the project on GitHub](https://github.com/ExaDev/breadbot/branches)

BreadBot is a package designed to experiment with interacting with the Discord API. The current version of the bot can accept, validate, and execute boards. It can also prompt users for input in a limited capacity by creating a promise on the server thread, which is resolved when the user responds. This feature will eventually allow node-by-node serial execution of boards with interactive user input.

When working in a server-client environment, the server can prompt the user for input, store the serialised board state, and then deserialise and resume execution once a response is received from the user/client. Future development will include templating a bot where the underlying logic is controlled by a Breadboard Graph.

---

## Overview

BreadBot is an experimental Discord bot designed for loading and running boards within the Breadboard project. It offers two primary commands: `load` and `run`, both of which require a URL of a board as input.

![](https://youtu.be/8xcRVE2FXrs)

## Commands

### Load Command

The `load` command performs the following functions:
- **URL Validation:** Checks if the provided URL is valid and corresponds to a valid board.
- **Board Analysis:** Returns statistics about the board, including:
	- Total number of nodes
	- Total number of edges
	- Kits used
	- Number of graphs
- **File Generation:** Produces and attaches several files to the message:
	- A JSON file containing the board schema
	- A markdown file with Mermaid code for the board
	- A PNG file of the generated Mermaid diagram

### Run Command

The `run` command executes the board and involves the following steps:
- **User Input Collection:** Prompts the user to enter values for any inputs required by the board.
- **Board Execution:** Processes the inputs and outputs the results from the board.
- **Validation:** Ensures the URL is valid and the board is recognised.

## Error Handling

BreadBot handles errors by validating URLs and board structures:
- Invalid URLs are rejected with a message stating the URL is invalid.
- Valid URLs pointing to invalid boards receive a message indicating the board is not recognised.

## Example Workflow

1. **Loading a Board:**
	- The user enters a valid URL and board.
	- The bot progressively updates the message, showing an hourglass icon initially, which changes to green text as each stage completes.
	- The bot extracts and displays stats about the board, attaches the JSON schema, Mermaid markdown file, and the PNG diagram to the message.
2. **Running a Board:**
	- The user provides values for required inputs (e.g., "greeting" and "name").
	- The bot outputs the joined strings as a result (e.g., "Hello World").

## Advanced Features and Limitations

- **Harness Utilisation:** The `run` command uses a harness to pause and gather inputs at each iteration.
- **Run Configuration:** Currently, the bot supports only the core kit. Additional kits may be supported in the future.
- **Experimental Status:** The bot is experimental with several limitations and is still a work in progress.
- **Future Enhancements:** Plans include saving and reloading board states to prevent hanging when awaiting user inputs.

## Conclusion

BreadBot is a proof of concept for integrating board operations within Discord. Although still under development, it demonstrates the potential for dynamic board management and interaction through Discord. Thank you for exploring this demo.
