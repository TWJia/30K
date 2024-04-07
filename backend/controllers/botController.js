import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { endpoint, azureApiKey } from "../config.js";

//const endpoint = process.env["AZURE_OPENAI_ENDPOINT"] ;
//const azureApiKey = process.env["AZURE_OPENAI_API_KEY"] ;

const conversation = [{ "role": "system", "content": "Assistant is an intellegent chatbot designed to assist SME, start ups and business owners on querires like a goBusiness e-advisor." }]

export const askQuestion = async (req, res) => {
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
    const deployment_name = 'gpt-35-turbo';

    try {
        const userQuestion = req.body.question;
        conversation.push({"role": "user", "content": userQuestion});

        const response = await client.getChatCompletions(deployment_name, conversation);

        const botRes = response.choices[0].message.content;
        conversation.push({"role": "assistant", "content": botRes});
        res.json({ answer: botRes });
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};
