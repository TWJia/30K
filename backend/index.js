import express from 'express';
import { PORT, mongoDB } from './config.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import botRoute from './routes/botRoute.js';

dotenv.config();          
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('test');
  });
  
mongoose
    .connect(mongoDB)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });