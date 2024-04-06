import express from 'express';
import { PORT, mongoDB } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import botRoute from './routes/botRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/bot', botRoute);

app.get('/', (req, res) => {
    return res.status(200).send('Server running..');
});
  
mongoose.connect(mongoDB).then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});