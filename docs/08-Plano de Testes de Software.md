# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

|     Caso de Teste     | CT-XX - Visualizar página dos adotantes interessados (Visão ACA) |
|:---------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados | <strong>RF-025</strong> - Na home administrativa do ACA, será possível acessar a página dos adotantes interessados ao clicar no botão do menu lateral referente a essa funcionalidade.  <br> <strong>RF-026</strong> - Na página descrita na RF-025, terão cards com imagem e breves informações sobre os adotantes interessados nos pets. |
|   Objetivo do Teste   | Verificar se a página de adotantes interessados está renderizando corretamente. |
|         Passos        | 1) Acessar o Navegador <br> 2) Informar o endereço do Site <br> 3) Visualizar a homepage deslogada <br> 4) Logar como ACA <br> 5) Visualizar a página administrativa do ACA <br> 5) Clicar em Adotantes interessados, no menu à esquerda 6) Deve ser redirecionado para a página de adotantes interessados |
|   Critérios de Êxito  | A página deve apresentar texto referente à seção de adotantes interessados, além de cards interativos com imagem do adotante e breves informações sobre ele. |

|     Caso de Teste     | CT-XX - Abrir modal ao clicar em adotante interessado (Visão ACA) |
|:---------------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados |<strong>RF-028</strong> - Ao clicar em um dos cards de adotantes interessados, descrito na RF-025, abrirá um modal com informações mais detalhadas sobre aquela pessoa e também qual pet ela está interessada. |
|   Objetivo do Teste   | Verificar se, ao clicar em um adotante interessado, abre um modal com detalhes sobre ele. |
|         Passos        | 1) Acessar o Navegador <br> 2) Informar o endereço do Site <br> 3) Visualizar a homepage deslogada <br> 4) Logar como ACA <br> 5) Visualizar a página administrativa do ACA <br> 5) Clicar em Adotantes interessados, no menu à esquerda <br> 6) Deve ser redirecionado para a página de adotantes interessados<br> 7) Clicar em Saber mais, dentro do card de um dos adotantes interessados |
|   Critérios de Êxito  | Deve abrir um modal com informações mais detalhadas sobre aquele adotante interessado e também qual pet ele está interessado. |
