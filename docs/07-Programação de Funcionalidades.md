# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema, bem como
os requisitos que elas atendem.

<h2>Visualização de Pets</h2>

<p>É a tela principal do sistema onde será feito o acesso dos visitantes e onde os adotantes poderão visualziar os pet.    Segue abaixo um exemplos da tela</p>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/219e4463-7b21-41ca-8fd4-a1656e9cb172)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/eef8f165-91a2-49f0-9362-00dbceaf54d5)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/d4f2c286-e4ed-4112-9ef9-6da7f60ba947)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/f7993487-2751-4f95-83f8-03cb82bfde71)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/2e64c350-753c-4ab4-8e0f-a864c7e448f9)

<h4>Requisitos atendidos: </h4>
<ul>
    <li>RF-01</li>
    <li>RF-02</li>
    <li>RF-03</li>
    <li>RF-04</li>
    <li>RF-05</li>
    <li>RF-06</li>
</ul>
 <h4>Artefatos da funcionalidade</h4>
 <ul>
     <li>src/pages/index.html</li>
     <li>src/scss/styles.scss</li>
     <li>src/js/home.js</li>
     <li>src/js/main.js</li>
     <li>src/img</li>
 </ul>

<h4>Instruções de Acesso</h4>
 <ol>
     <li>Ao rodar o projeto acesse http://localhost:3000. Para rodar o projeto acesse as instruções que estão no README da pasta /src deste repositório</li>
     <li>Será a primeira a tela a aparecer ao rodar o projeto</li>
 </ol>

<h2>Cadastro de Usuários e Login</h2>
<p>Existem dois tipos de usuários, ACA e Adotante. Os cadastros para esses usuários começam na mesma tela, mas conforme
resposta são direcionados para fluxos diferentes. Segue abaixo um exemplos das telas: </p>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/932becfc-763a-49aa-ae06-e2a4bb282284)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/2f134cbc-4dd4-427c-912d-4d6c1a988fa4)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/1693e7d5-edaf-45e3-a657-6221a5183fea)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/1fdf051b-3b5f-498d-bf97-ce294f4d9058)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/a5bb90e7-4ab1-4978-a8d0-d62e9d0a8e8e)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/7e8ea2e0-f944-45f0-b267-8138270f0777)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/e3efe148-1333-4471-bf16-d9bd5d4060f1)



<h4>Requisitos atendidos: </h4>
<ul>
<li>RF-07</li>
<li>RF-08</li>
<li>RF-09</li>
</ul>

<h4>Artefatos da funcionalidade</h4>
<ul>
<li>src/pages/cadastro.html</li>
<li>src/pages/cadastro-tipo-de-conta.html</li>
<li>src/pages/cadastro-adotante.html</li>
<li>src/pages/cadastro-aca.html</li>
<li>src/scss/styles.scss</li>
<li>src/js/main.js</li>
</ul>

<h4>Instruções de Acesso</h4>
<ol>
<li>Ao rodar o projeto acesse http://localhost:3000/cadastro e siga o fluxo conforme o tipo de usuário escolhido</li>
</ol>

<h2>Painel de Controle do ACA</h2>

 <p>Os ACAs terão acesso a essa tela para visualizar os pets cadastrados. Segue abaixo um exemplos das telas: </p>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/963bed10-7291-41ac-9695-d5692b8c42e7)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/fd373f4e-3feb-4a96-9dd5-7641bddeecb1)

<h4>Requisitos atendidos: </h4>
<ul>
<li>RF-10</li>
<li>RF-11</li>
<li>RF-13</li>
</ul>

<h4>Artefatos da funcionalidade</h4>
<ul>
<li>src/pages/home-aca.html</li>
<li>src/scss/styles.scss</li>
<li>src/js/main.js</li>
<li>src/img</li>
</ul>
<h4>Instruções de Acesso</h4>
<ol>
<li>Ao rodar o projeto acesse http://localhost:3000/home-aca</li>
</ol>

<h2>Cadastro de Pet</h2>

<p>Nessa tela serão cadastrados os pets e serão vinculados a ACA que fez este cadastro. Segue abaixo um exemplos das telas: </p>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/f1be2c81-156f-4c64-b1c5-a3dd26bada46)

<h4>Requisitos atendidos: </h4>
<ul>
    <li>RF-12</li>
</ul>

<h4>Artefatos da funcionalidade</h4>
<ul>
    <li>src/pages/cadastro-pet.html</li>
    <li>src/scss/styles.scss</li>
    <li>src/js/main.js</li>
    <li>src/img</li>
</ul>
<h4>Instruções de Acesso</h4>
<ol>
    <li>Ao rodar o projeto acesse http://localhost:3000/cadastro/pet</li>
</ol>

<h2>Adotantes Interessados</h2>

<p>Nessa tela o ACA poderá visualizar os possíveis adotantes que se interessaram em um pet que ele cadastrou. Segue abaixo um exemplos das telas: </p>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/cda43a7e-85d7-45f0-b1c7-bda3dc6b52b2)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03/assets/16339610/2a967602-d9f6-4259-bf46-b58502509ca1)

<h4>Requisitos atendidos: </h4>
<ul>
    <li>RF-14</li>
    <li>RF-15</li>
</ul>

<h4>Artefatos da funcionalidade</h4>
<ul>
    <li>src/pages/adotantes-interessados.html</li>
    <li>src/scss/styles.scss</li>
    <li>src/js/main.js</li>
    <li>src/img</li>
</ul>
<h4>Instruções de Acesso</h4>
<ol>
    <li>Ao rodar o projeto acesse http://localhost:3000/home-aca/adotantes-interessados</li>
</ol>
