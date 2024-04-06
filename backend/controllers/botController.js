import { AzureOpenAI } from 'openai';

const client = new AzureOpenAI({
    api_key: process.env.AZURE_OPENAI_API_KEY,
    api_version: "2024-02-01",
    azure_endpoint: process.env.AZURE_OPENAI_ENDPOINT,
});

const deployment_name = 'gpt-3.5-turbo';

export const askQuestion = async (req, res) => {
    try {
        const userQuestion = req.body.question;
        const response = await client.chat.completions.create({
            model: deployment_name,
            messages: [
                { "role": "system", "content": "You are a helpful assistant." },
                { "role": "user", "content": userQuestion },
            ]
        });
        res.json({ answer: response.choices[0].message.content });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};