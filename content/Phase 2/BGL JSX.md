---
tags:
  - phase/2
  - JSX
  - XML
---

BGL JSX

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

`XML`-like syntax will allow web developers to write type-safe Breadboard Graphs familiarly.

The experimental branches can be found at:

- [jsx-board](https://github.com/ExaDev/breadboard/tree/jsx-board/packages/jsx-board)
- [xml-board](https://github.com/ExaDev/breadboard/tree/xml-board/packages/xml)
