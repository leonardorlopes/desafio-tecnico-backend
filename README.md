# Desafio técnico Javascript Backend

Desenvolvido por [Leonardo Rodrigues Lopes de Souza](https://github.com/leonardorlopes).

Esse repositório contém um projeto de software que soluciona o desafio proposto [desafio-tecnico-backend](https://gitlab.com/gabriel.militello1/desafio-tecnico-backend)


# O Desafio

Disponibilizar uma API que fará a persistência de dados de um quadro de kanban seguindo os [Requisitos](https://gitlab.com/gabriel.militello1/desafio-tecnico-backend#requisitos).


# Resolvendo o desafio

Para o back end será utilizado Typescript com Nodejs + Express, além de utilizar no MongoDb para armazenar os dados.
Para realizar a conexão com o banco de dados foi escolhido o [mongoose](https://www.npmjs.com/package/mongoose), que é a ODM(Object Data Modeling) do Mongodb em nodejs.

Visando atender aos requisitos, a aplicação utiliza validação de token JWT, garantindo que o client esteja autenticado para consumir os recursos do backend.
As validações de entrada de dados estão distribuidas entre os middlewares.

Será utilizado o ESLint como linter da aplicação.


## Solução proposta
 
 ![Arquitetura](/images/Arquitetura.png)

 
## Execução

Para executar o projeto e suas dependências, foi utilizado o Docker, visando facilitar a execução da aplicação.

- Para executar a aplicação conteinerizada:
  Primeiro devem ser setadas as variaveis de ambiente no arquvio /BACK/.env.
  Navegar até a raiz do projeto via terminal(de sua preferência) 
  Executar o comando `docker-compose up`

- Para executar o linter:
  Navegar até a pasta /BACK do projeto via terminal(de sua preferência)
  Executar o comando `npm run lint`, 

- Para executar o linter com correção de erros: 
  Executar o comando `npm run lint-and-fix`


## Acessando a Aplicação (desafio-tecnico-backend)

Frontend: http://localhost:3000
Backend: http://localhost:5000
Banco de dados: http://localhost:27017
