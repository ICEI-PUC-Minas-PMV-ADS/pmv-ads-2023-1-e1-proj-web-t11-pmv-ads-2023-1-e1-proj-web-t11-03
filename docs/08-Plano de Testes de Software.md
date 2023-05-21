# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

## ATENÇÃO, EXEMPLO ABAIXO (é para editar)

|     Caso de Teste     | CT-01 - Visualizar notícias principais |
|:---------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados | <strong>RF-01</strong> - O site deve apresentar na página principal notícias dinâmicas obtidas por meio de canais de notícias da Internet (API) <br> <strong>RF-02</strong> - O site deve apresentar, para cada notícia, uma imagem correspondente ao assunto apresentado (thumbnail) |
|   Objetivo do Teste   | Verificar se a carga de notícias está acontecendo corretamente |
|         Passos        | 1) Acessar o Navegador <br> 2) Informar o endereço do Site <br> 3) Visualizar a página principal |
|   Critérios de Êxito  | Deve haver uma requisição AJAX no painel NETWORK das ferramentas do Desenvolvedor (recurso do Navegador). As notícias devem ser exibidas corretamente no site, sendo necessárias pelo menos 3 notícias sendo apresentadas As notícias devem trazer imagens visíveis associadas ao assunto da notícia |
