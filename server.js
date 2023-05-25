const express = require('express');
const path = require('path');

const app = express();

const pagesPath = 'dist/pages';

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, '/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, '/home.html'));
});

app.get('/home-aca', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, '/home-aca.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, '/login.html'));
});

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, '/cadastro.html'));
});

app.get('/cadastro/tipo-de-conta', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, '/cadastro-tipo-de-conta.html'));
});

app.get('/cadastro/aca', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, '/cadastro-aca.html'));
});

app.get('/cadastro/adotante', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, '/cadastro-adotante.html'));
});

app.get('/cadastro/pet', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, '/cadastro-pet.html'));
});

app.get('/home-aca/adotantes-interessados', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, '/adotantes-interessados.html'));
});

app.get('/home-aca/editar-pet', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, '/edicao-pet.html'));
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});