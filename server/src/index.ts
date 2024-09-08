import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'
import submitRouter from './routes/submit';
import axios from 'axios';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);
app.use(express.static("build"));

app.use('/api/submit', submitRouter)
app.use('/api/upload', async (req, res) => {
    const { text } = req.body

    if (!text) {
        return res.status(400).json({ message: 'Text is required' });
    }

    console.log(text)
    const { data } = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAMWxsM-qSg3-SfOLks6WCFyVVoIU9_yc0', {
        contents: [{
            parts: [{
                text: text
            }]
        }]
    })

    console.log(data)
    return res.status(200).json({ data: data })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});
