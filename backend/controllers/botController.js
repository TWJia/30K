import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { endpoint, azureApiKey } from "../config.js";

//const endpoint = process.env["AZURE_OPENAI_ENDPOINT"] ;
//const azureApiKey = process.env["AZURE_OPENAI_API_KEY"] ;

export const askQuestion = async (req, res) => {
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
    const deployment_name = 'gpt-35-turbo';

    try {
        const userQuestion = req.body.question;
        const messages = [
            { "role": "system", "content": "You are a helpful assistant." },
            { "role": "user", "content": userQuestion },
        ];

        const response = await client.getChatCompletions(deployment_name, messages);
        res.json({ answer: response.choices[0].message.content });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};