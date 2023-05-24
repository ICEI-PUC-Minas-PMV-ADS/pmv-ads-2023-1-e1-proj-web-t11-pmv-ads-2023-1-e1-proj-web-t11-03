# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com o uso de um formulário online divulgado nas redes sociais e por mensagem a pessoas conhecidas dos membros do grupo de forma a coletar as informações necessárias para construir não só as personas e histórias de usuários, como também as principais dores e necessidades dos nossos usuários. 

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nas Figuras que se seguem. 

![Personas - Marina](img/persona-marina.png)
![Personas - Osvaldo](img/persona-osvaldo.png)
![Personas - Valquiria](img/persona-valquiria.png)
![Personas - Anderson](img/persona-anderson.png)


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Marina  | um meio confiável de encontrar um animal de estimação           | encontrar um cãozinho idoso para adotar                |
|Osvaldo       | quero ter certeza de que um adotante interessado é confiável                  | Ppara que o pet esteja em boas mãos no novo lar  |
|Valquíria       | poder anunciar pets pra adoção de forma simples e intuitiva                | facilitar meu dia a dia administrando minha ONG  |
|Osvaldo       | quero buscar um lar temporário confiável                 | para que um animal resgatado tenha suporte até que seja adotado definitivamente  |
|Anderson       | gostaria de encontrar meu futuro pet o mais próximo possível da minha casa                 | para agilizar o meu processo de adoção  |
|Marina       | ter o perfil completo dos pets que me interesso (constando sexo, porte, vacinado ou não, castrado ou não, etc)                 | para filtrar melhor as opções de pets dentro do perfil que eu quero  |
|Valquíria       | saber qual o perfil e histórico dos adotantes interessados nos pets anunciados pela minha ONG                 | facilitar a escolha de um futuro tutor ideal  |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A homepage da aplicação, logada ou não, deverá apresentar uma barra de busca que permitirá ao usuário filtrar os pets da página inicial por localização ou espécie.   | ALTA |
|RF-002| A homepage da aplicação, logada ou não, deve apresentar para cada pet um card com imagem e breves informações, possibilitando que o usuário clique nela e veja os detalhes sobre aquele pet.   | ALTA | 
|RF-003| Ao acessar a página inicial da aplicação estando deslogado, o usuário deverá ver no cabeçalho da página um menu contendo itens que o permitirá: navegar até a tela de cadastro ou navegar até a tela de login.  | ALTA |
|RF-004| Ao acessar a página inicial da aplicação estando deslogado, o usuário poderá clicar em um dos cards de pets cadastrados na plataforma e visualizar um modal com informações mais detalhadas sobre ele  | ALTA |
|RF-005| A aplicação deverá ter uma tela para login, a fim de permitir que o usuário seja autenticado | ALTA |
|RF-006| A página de login, além do formulário em si, deve ter também um botão de Criar cadastro que o enviará para o fluxo de cadastramento na plataforma  | ALTA |
|RF-007| Ao logar, caso inicie a sessão como ACA, verá sua home administrativa. Caso inicie sessão como adotante, verá a homepage da aplicação com a barra de filtragem de pets e também cards de pets disponíveis, além de cabeçalho com menu específico de adotante  | ALTA |
|RF-008| Para se cadastrar, a aplicação deve apresentar uma página inicial de cadastro que pede dados comuns entre ACAs e adotantes, como nome de usuário, e-mail e senha  | ALTA |
|RF-009| Após a conclusão da etapa descrita na RF-008, a etapa seguinte será uma página com dois botões, um redirecionando para cadastro de ACA e outro pra cadastro de adotante | ALTA |
|RF-010| Ao clicar no botão de ACA descrito na RF-009, deve abrir uma página de cadastro focado nas informações necessárias para um Agente da Causa Ambiental criar seu cadastro  | ALTA |
|RF-011| Ao clicar no botão de Adotante descrito na RF-009, deve abrir uma página de cadastro focado nas informações necessárias para um Adotante criar seu cadastro  | ALTA |
|RF-012| Ao estar logado como adotante e clicar no botão inserido no modal de detalhes de um pet, a aplicação deverá apresentar um modal que indica sucesso se a ação for bem sucedida  | MÉDIA |
|RF-013| Ao realizar a ação da RF-012, o modal de sucesso terá um botão que enviará o adotante para a página de pets salvos por ele | MÉDIA |
|RF-014| Ao estar logado como adotante, quando clica no botão de Pets Salvos que se encontra no menu do cabeçalho da sua sessão, o usuário deve ser enviado para a página que mostra os pets que está interessado em adotar  | ALTA |
|RF-015| Na homepage, ao clicar em um dos cards de pets, mostrará por meio de um modal as informações sobre o animal e também sobre a ACA responsável | ALTA |
|RF-016| Ao estar logado como adotante, o usuário deverá ser capaz de clicar no botão de Dados da Conta que se encontra no menu do cabeçalho da sua sessão, onde será enviado para a página que o permite alterar seus dados cadastrais | MÉDIA |
|RF-017| Na home administrativa do ACA, terá um menu lateral com as opções de ver os pets cadastrados, os adotantes interessados, os dados da conta e também sair da sessão | ALTA |
|RF-018| Assim que loga como ACA, a aplicação deverá redirecionar o usuário diretamente para a home administrativa na funcionalidade onde é possível ver os pets cadastrados por ele.  | MÉDIA |
|RF-019| Na página de pets cadastrados pela ACA, será possível ver os pets em cards e um botão de cadastrar pet  | ALTA |
|RF-020| Ao clicar em um dos pets na página de pets cadastrados pela ACA, abrirá um modal administrativo daquele pet que, além de mostrar as informações mais detalhadas dele, também permitirá que a ACA possa marcar como adotada, editar as informações ou excluir o registro desse pet  | ALTA |
|RF-021| Ao clicar em Marcar como adotado no botão do modal descrito na RF-020, o modal se fechará e aquele pet não deve mais aparecer na lista de pets cadastrados pela ACA  | ALTA |
|RF-022| Ao clicar em Editar no botão do modal descrito na RF-020, a ACA será enviada para a página de edição dos dados do pet  | ALTA |
|RF-023| Ao clicar em Excluir no botão do modal descrito na RF-020, a ACA receberá um feedback de sucesso na exclusão do pet de sua lista, com um botão que o manda para a página de pets cadastrados  | ALTA |
|RF-024| Na página de pets cadastrados pela ACA, ao clicar no botão Cadastrar Pet, o usuário será direcionado para a página de cadastro de pet onde, ao finalizar o preenchimento dos dados necessários para criar o registro de um novo pet disponível para adoção, será redirecionado de volta para a sua home administrativa | ALTA |
|RF-025| Na home administrativa do ACA, será possível acessar a página dos adotantes interessados ao clicar no botão do menu lateral referente a essa funcionalidade  | ALTA |
|RF-026| Na página descrita na RF-025, terão cards com imagem e breves informações sobre os adotantes interessados nos pets | ALTA |
|RF-027| Na home administrativa do ACA, será possível acessar a página com os dados cadastrais do usuário para edita-los caso queira  | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade   |  MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  |  ALTA | 
|RNF-005| O site deverá armazenar os dados dos usuários em local seguro a fim de evitar problemas com a Lei Geral de Proteção de Dados (LGPD)  |  ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend  |
|02| A equipe não pode subcontratar o desenvolvimento do trabalho.        |
|03| O projeto não é responsável pela adoção final ou qualquer transporte de animal até o adotante.        |
|04| O projeto não terá solicitação de ajuda aos ACAs em relação de animais que foram encontrados.         |