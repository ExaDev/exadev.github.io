---
title: Translation RU-ENG
aliases:
  - HuggingFace Translation
  - HuggingFace Translation RU-ENG
  - Translation RU-ENG
tags:
  - breadboard
  - breadboard/phase/2
  - HuggingFace
  - translation
created: 2024-05-31T19:12:41
modified: 2024-06-18T08:45:32
---

The Russian to English Translation Board leverages the Hugging Face inference API to perform translations from Russian to English.

> [!warning]
> Sometimes it will error because model is loading just run the board again.

For more information on the Hugging Face Inference API's Translation endpoint, see [here](https://huggingface.co/docs/api-inference/detailed_parameters?code=curl#named-entity-recognition-ner-task).

![](https://youtu.be/fBUiGLX8zkc)

## Features

- **API Integration**: Utilises Hugging Face's inference API for translation tasks.
- **Input Handling**: Processes Russian text for translation.
- **Caching**: Supports caching to provide quicker responses for previously encountered inputs.
- **Model Loading**: Allows for waiting on larger models to load before generating responses.

## Inputs and Parameters

1. **API Key**: 
   - **Description**: A unique key that grants access to the Hugging Face inference API.
   - **Usage**: Required for authentication and accessing the translation service.

2. **Input Text**: 
   - **Description**: The Russian text that you want to translate into English.
   - **Example**: "Меня зовут Вольфганг, и я живу в Берлине."

3. **Use Cache**:
   - **Description**: A boolean flag indicating if the model should return a cached response for previously seen inputs.
   - **Default**: `false`

4. **Wait for Model**:
   - **Description**: A boolean flag that, when set, allows the system to wait for the model to fully load before generating a response.
   - **Default**: `true`

## Example Usage

Here is an example of how to use the board:

### Input

```json
{
  "api_key": "YOUR_API_KEY",
  "input_text": "Меня зовут Вольфганг, и я живу в Берлине.",
  "use_cache": false,
  "wait_for_model": true
}
```

### Output

```json
{
  "translated_text": "My name is Wolfgang and I live in Berlin."
}
```

The input text "Меня зовут Вольфганг, и я живу в Берлине." is correctly translated to "My name is Wolfgang and I live in Berlin."

## Future Enhancements

- **Browser Extension**: Integration with the Breadboard Chrome extension to enable text selection and translation directly in the browser.
- **Additional Languages**: Expansion to support translations for more languages.


## Source

- [TypeScript](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/translation-RU-ENG/index.ts)
- [JSON](https://github.com/ExaDev/breadboard-examples/blob/main/src/examples/translation-RU-ENG/board.json)

## Breadboard Web

[Open in Breadboard Web](https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/translation-RU-ENG/board.json)

### Preview Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/translation-RU-ENG/board.json&embed" style="width: 100%; height: 500px; border: 0;"></iframe>

### Edit Mode

<iframe src="https://breadboard-ai.web.app/?board=https://raw.githubusercontent.com/ExaDev/breadboard-examples/main/src/examples/translation-RU-ENG/board.json" style="width: 100%; height: 500px; border: 0;"></iframe>
