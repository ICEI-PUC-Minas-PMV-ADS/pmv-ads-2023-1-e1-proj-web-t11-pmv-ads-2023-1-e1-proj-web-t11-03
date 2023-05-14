
# Metodologia

A metodologia utilizada para resolver o problema será uma adaptação do SCRUM e Kanban de maneira a gerenciarmos as tarefas que serão atribuídas aos integrantes dos times bem como seus papéis dentro do projeto. O time usuará o Discord como ferramenta de comunicação assíncrona e fará reuniões semanais para definir a atribuição de tarefas ao longo da semana. Para controle de versão do código será utilizado o Git e o repositório em que o código será o Github. Para gestão das tarefas do time será utilizado o próprio Github que dispõe de uma ferramenta própria para isso no próprio repositório. 

## Relações do ambiente de trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue: 

|Ambiente     | Plataforma  |Link de acesso |
|-------|-------------------------|----|
|Repositório do código fonte| GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-03  | 
|Documentos do projeto | Teams | https://teams.microsoft.com/_#/school/conversations/Grupo%203%20-%2019-00hs%20as%2019-30hs?threadId=19:5a130323baff45b8a28895216094b487@thread.tacv2&ctx=channel | 
|Projeto de Interface e  Wireframes | Figma | https://www.figma.com/file/KiubNfiGnDBtfM9WmSQKwo/PETHUB?node-id=0-1&t=SkzFq1ciWVnhxMN1-0  | 
|Projeto de Interface e  Wireframes | Figma | https://www.figma.com/file/KiubNfiGnDBtfM9WmSQKwo/PETHUB?node-id=0-1&t=SkzFq1ciWVnhxMN1-0  | 
Gerenciamento do Projeto | GitHub Projects | https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/402  | 

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `release/v*.*`: versão do software que estável porém será utilizada para testes e receber merge das branches de desenvolvimento.
- `bugfix/nome-do-bug`: versão de desenvolvimento do software para resolver um bug
- `hotfix/nome-do-bug`: versão de desenvolvimento do software para resolver um bug crítico que deve ir direto para main
- `feature/nome-da-feature`: versão de desenvolvimento do software para criação de uma nova funcionalidade

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `Atualização de texto`: Issue para atualização na documentação do projeto
- `Código`: Issue que envolve desenvolvimento de código fonte
- `Crítico`: Tarefa crítica que tem curto prazo
- `Dúvida`: Tarefa que dependerá de um esclarecimento com a professora ou monitor
- `Erro`: Tarefa para corrigir um erro tanto em documentação quanto em código fonte
- `Interface`: Tarefa que envolve desenvolvimento de interface do projeto
- `Necessita ajuda`: Funcionalidade que precisará de mais de uma pessoa para ser executada
- `Tarefa do time`: Tarefa que envolve o time todo em um encontro síncrono para ser executada

Iremos usar o Git para controle de versão do código fonte e documentação. As estratégias de merge utilizadas serão:
- Se for um `bugfix` ou `feature` os commits podem ser feitos livremente, e deverá ser feito um merge request para a branch de release e será analisado por qualquer membro do time antes do merge
- Se um `hotfix` será feito um merge request diretamente para a branch `main` que será revisado por qualquer membro do time antes de feito o merge
- Após a `release` ser testada, será feito um merge request para a `main` que será analisado por qualquer membro do time

Os issues serão criados, serão atribuídas tags dependendo da natureza da tarefa e serão traduizadas em branches ou não dependendo do que o time decidir no planejamento semanal.

## Gerenciamento de Projeto

### Divisão de Papéis

<b>Scrum Master:</b>  Giulia Brião

<b>Product Owner:</b> Rodrigo Soares

<b>Equipe de Desenvolvimento:</b>
- Atos Pereira
- Fernanda Rios
- Giulia Brião
- Luiz Felipe
- Rodrigo soares 

<b>Equipe de Design</b>
- Atos Pereira

### Processo

Para gerenciamento do time e aplicação de metodologias ágeis, será utilizado os recursos `Projects` e `Issues` do Github. O Project possuirá os seguintes quadros:
- `Product Backlog`: Com o backlog do produto 
- `To Do`: Issues a serem feitas
- `In progress`: Issues que já estão sendo desenvolvidas pelo time
- `In Review`: Issues em análise já realizada porém em análise por algum membro do time
- `Done`: Issues já concluídas

As Sprints ocrrerão conforme as etapas do Projeto definidas no Canvas e serão `Milestones` no Github será possível acompanhar o adamento do projeto através das `Milestones` conforme os `Issues` vão sendo resolvidos.

### Ferramentas

As ferramentas empregadas no projeto são:

- Visual Studio Code, Jetbrains Fleet para edição de código fonte.
- Git Kraken, SourceTree e Visual Studio Code como cliente Git.
- Discord, Whatsapp, Microsoft Teams e Github Projects para comunicação.
- Figma para prototipação de interface.

Os editores de código e clientes Git foram escolhidos porque possuem integração com o
sistema de versão e são os que os membros do time possuem experiência. As ferramentas de comunicação utilizadas são as que o time consegue se comunicar e gerenciar as tarefas e o Figma foi escolhido porque o designer do time já possuia experiência prévia, então foi escolhida para melhor captar as necessidades da solução.
