# Instruções de utilização

## Instalação do Site

O site utiliza Bootstrap para estilização, Webpack para compilar o SASS e nos permitir editar o bootstrap
E ExpressJS para permitir navegação pelas páginas com URL amigável.

O primeiro passo é `git pull` para pegar as últimas alterações.

Instale o NodeJS na sua máquina (ele é necessário para rodar o projeto): https://nodejs.org/en

Depois disso utilizando terminal(Linux) ou o CMD(Windows) entre no diretório raiz do projeto e rode o seguinte comando

`npm install`

Depois de esperar o comando finalizar a execução rode:

`npm start`

Para acessar o conteúdo abra a URL: http://localhost:3000

Caso queira editar ou criar uma página as páginas do projeto se encontram em:

     pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/
    ├── src/
    │   ├── pages
    │      └── index.html
           └── login.html

Caso queira editar o CSS altere o arquivo:

     pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/
    ├── src/
    │   ├── scss/
    │       └── styles.scss

Após alterado um arquivo finalize e rode o comando `npm start` novamente e abra a página.

Caso tenha criado uma nova página não se esqueça de adicionar a rota no arquivo ` server.js`, na pasta raiz do projeto: (caso contrário a página não será encontrada)

*OBS: A nova rota que será criada pode ser um CTRL+C e CTRL+V das rotas existentes sendo necessário mudar apenas o URL e o nome da página. Por exemplo supõe que precisemos criar uma página de favoritos ficaria da senguinte forma:

```
app.get('/favoritos', (req, res) => {
    res.sendFile(path.join(__dirname, pagesPath, 'favoritos.html'));
});
```

E acessamos na URL: http://localhost:3000/favoritos
