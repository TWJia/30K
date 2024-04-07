import dotenv from 'dotenv';
dotenv.config(); 

export const endpoint = process.env["AZURE_OPENAI_ENDPOINT"];
export const azureApiKey = process.env["AZURE_OPENAI_API_KEY"];

export const PORT = 5555;

//export const mongoDB = 'mongodb://127.0.0.1:27017';