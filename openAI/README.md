### Hackomania AzureOpenAI 101

#### Prerequisites
Python 3.8 or later version.
The following Python libraries: `os`.
An Azure OpenAI Service resource with either the gpt-35-turbo or the gpt-4 models deployed. (this has been provided for the course of the Hackathon)

Install Python and related libraries.

#### Set up
Install the OpenAI Python client library with:

``` sh
pip install openai
pip install -U python-dotenv
```

Try running `quickstart.py`

```
python quickstart.py
```

### Reference from Azure OpenAI documentation
Link: [ChatGPT Quickstart](https://learn.microsoft.com/en-us/azure/ai-services/openai/chatgpt-quickstart)

#### Understanding the message structure
The GPT-35-Turbo and GPT-4 models are optimized to work with inputs formatted as a conversation. The messages variable passes an array of dictionaries with different roles in the conversation delineated by system, user, and assistant. The system message can be used to prime the model by including context or instructions on how the model should respond.

The GPT-35-Turbo & GPT-4 how-to guide provides an in-depth introduction into the options for communicating with these new models.

### More useful links
1. [Learn how to work with the GPT-35-Turbo and GPT-4 models](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/chatgpt?tabs=python-new&pivots=programming-language-chat-completions)