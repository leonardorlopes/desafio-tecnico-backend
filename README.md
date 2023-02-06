# ADA Tech - Desafio técnico Javascript Backend

Desenvolvido por [Leonardo Rodrigues Lopes de Souza](https://github.com/leonardorlopes).

Esse repositório contém um projeto de software que soluciona o desafio proposto [desafio-tecnico-backend](https://gitlab.com/gabriel.militello1/desafio-tecnico-backend)

# Desafio

Disponibilizar uma API que fará a persistência de dados de um quadro de kanban seguindos os requisitos: [Requisitos](https://gitlab.com/gabriel.militello1/desafio-tecnico-backend#requisitos).

# Escolhendo as tecnologias

Para o back end será utilizado Typescript com Nodejs + Express, além de utilizar no MongoDb para armazenar os dados.
Para realizar a conexão com o banco de dados foi escolhido o [mongoose](https://www.npmjs.com/package/mongoose), que é a ODM(Object Data Modeling) do Mongodb em nodejs.

Visando atender aos requisitos, a aplicação utiliza validação de token JWT, garantindo que o client esteja autenticado para consumir os recursos do backend.
As validações de entrada de dados estão distribuidas entre os middlewares.

# Solução proposta
 
 ![Arquitetura](/images/Arquitetura.png)
 
 ## Execução

Para executar o projeto e suas dependências, foi utilizado o Docker, visando facilitar a execução da aplicação

Para executar:
  Primeiro devem ser setadas as variaveis de ambiente no arquvio /BACK/.env.
  Navegar até a raiz do projeto via terminal(de sua preferência)
  Executar o comando `docker-compose build` , em seguida:
  Executar o comando `docker-compose up`

### Aplicação (desafio-tecnico-backend)

Frontend: http://localhost:3000
Backend: http://localhost:5000
Banco de dados: http://localhost:27017
