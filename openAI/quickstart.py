import os
from openai import AzureOpenAI
from dotenv import dotenv_values
config = dotenv_values(".env")
    
client = AzureOpenAI(
    api_key=config["AZURE_OPENAI_API_KEY"],  
    api_version="2024-02-01",
    azure_endpoint = config["AZURE_OPENAI_ENDPOINT"]
)

    
deployment_name='gpt-35-turbo' #This will correspond to the custom name you chose for your deployment when you deployed a model. Use a gpt-35-turbo-instruct deployment. 




response = client.chat.completions.create(
    model="gpt-35-turbo", # model = "deployment_name".
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Does Azure OpenAI support customer managed keys?"},
        {"role": "assistant", "content": "Yes, customer managed keys are supported by Azure OpenAI."},
        {"role": "user", "content": "Do other Azure AI services support this too?"}
    ]
)

print(response.choices[0].message.content)


# Send a completion call to generate an answer
'''
print('Sending a test completion job')
start_phrase = 'Where is Singapore? '
response = client.completions.create(model=deployment_name, prompt=start_phrase, max_tokens=10)
print(response)
print(start_phrase+response.choices[0].text)
'''


# print('Sending a test chat message')
# response = client.chat.completions.create(
#     model="gpt-35-turbo", # model = "deployment_name".
#     messages=[
#         {"role": "system", "content": "You are a helpful assistant."},
#         {"role": "user", "content": "How do I build the best ideas for a hackathon?"},
#         {"role": "assistant", "content": "Identify real problems, leverage new technologies and validate your idea."},
#         {"role": "user", "content": "What else can I do?"}
#     ]
# )

# print(response.choices[0].message.content)