const express = require('express');
const plantelJson = require('./plantel.json')

const app = express();

app.disable('x-powered-by');

const PORT = process.env.PORT ?? 1234;

app.use(express.json());

app.get('/plantel', (req, res) => {
    res.json(plantelJson);
});

app.post('/agregar', (req, res) => {
    res.status(201).send(req.body);
});

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})