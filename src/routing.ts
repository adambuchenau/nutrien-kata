import express from 'express';
import { generateHistogram } from './services/histogram-service';

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => {
    res.status(200).send({ status: 'ok' });
});

app.get('/:column/histogram', (req, res) => {
    var data = generateHistogram(req.params.column)
    res.status(200).json(data)
})

export default app;
