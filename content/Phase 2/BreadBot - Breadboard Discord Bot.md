BreadBot

![](files/Pasted%20image%2020240529141552.png)

[github.com/ExaDev/breadbot](https://github.com/ExaDev/breadbot/branches)

A package to experiment with interacting with the Discord API. The current version of the bot can accept, validate, and execute boards.

It is also possible to prompt the user for input in a limited capacity. This is achieved by creating a promise on the server thread, which is resolved when the user responds to the prompt.

Once boards can be executed node-by-node serially, prompting the user for input interactively will be possible.

When working in a server-client environment, the server can prompt the user for input, store the serialised board state, and then deserialise and resume execution once a response is received from the user/client.

A further development of this will be to template a bot where the underlying logic is controlled by a Breadboard Graph.
