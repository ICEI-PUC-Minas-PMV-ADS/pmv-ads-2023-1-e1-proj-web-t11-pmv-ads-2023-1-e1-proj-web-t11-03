const express = require('express');
const path = require('path');

const app = express();

const pagesPath = 'dist/src/pages';

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, 'login.html'));
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});