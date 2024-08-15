import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'
import submitRouter from './routes/submit';

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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});
