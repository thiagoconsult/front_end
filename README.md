# Front-end MyDemands

Esta APP foi desenvolvida para entrega do MVP da Sprint 3 da PUC-RIO. Ela foi desenvolvida em React e irá funcionar com 3 micro serviços desenvolvidos em Python/Flask.

## Microserviços para utilizar esta APP:

| Microserviço                  | Funcionalidade                                  | Link                                                               |
| ----------------------------- | ----------------------------------------------- | ------------------------------------------------------------------ |
| microservico_api_empresa      | CRUD de Empresas                                | https://github.com/thiagoconsult/microservico_api_empresa.git      |
| microservico_api_pessoa       | CRUD de Pessoas                                 | https://github.com/thiagoconsult/microservico_api_pessoa.git       |
| microservico_api_oportunidade | CRUD de oportunidades que utiliza as APIS acima | https://github.com/thiagoconsult/microservico_api_oportunidade.git |

**É pré requisito que você execute as 3 APIs acima.**

## Executar esta APP:

Será necessário ter o [Nodejs](https://nodejs.org/en/download/) instalado.

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Para executar a interface basta executar o comando:

```
$ npm start
```

A aplicação será iniciada na página:

```
http://localhost:3000/
```

Abra o [http://localhost:3000/#/](http://localhost:3000/) no navegador.

## Créditos:

Foi utilizado o serviço de API externa da VIACEP. No site não existe nada sobre o licenciamento, por isto estou colocando os créditos aqui.

[VIACEP](https://viacep.com.br//)

Esta API externa foi utilizada no cadastro de empresas, onde, ao colocar o CEP, recebemos o endereço completo, porém, para esta aplicação, utilizamos apenas alguns dados.
