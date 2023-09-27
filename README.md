# Front-end MyDemands:

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

## EXECUTAR COM DOCKER

Para executar este projeto como container, siga os passos:

1 - Baixe as 3 APIs e o Frontend e coloque-os dentro da mesma pasta.

2 - Crie um arquivo na raiz com o nome docker-compose.yml e cole o seguinte código:

version: "3"

volumes:
api_empresa:
api_pessoa:
api_oportunidade:
front_end:

services:
service-1:
container_name: api_empresa
build:
context: ./api_empresa
stop_signal: SIGINT
ports: - "5001:5001"
volumes: - api_empresa:/api_empresa
restart: unless-stopped
networks: - mvp3
command: ["python", "run.py"]

service-2:
container_name: api_pessoa
build:
context: ./api_pessoa
stop_signal: SIGINT
ports: - "5002:5002"
volumes: - api_pessoa:/api_pessoa
restart: unless-stopped
networks: - mvp3
command: ["python", "run.py"]

service-3:
container_name: api_oportunidade
build:
context: ./api_oportunidade
stop_signal: SIGINT
ports: - "5003:5003"
volumes: - api_oportunidade:/api_oportunidade
restart: unless-stopped
networks: - mvp3
command: ["python", "run.py"]

service-4:
container_name: frontend
build:
context: ./front_end
stop_signal: SIGINT
ports: - "3000:3000"
volumes: - front_end:/front_end - /front_end/node_modules
restart: unless-stopped
stdin_open: true
networks: - mvp3
command: ["npm", "start"]

networks:
mvp3:
driver: bridge

3 - Acesse esta pasta pelo terminal ou pelo VSCODE e execute o comando:

```
docker compose up -d
```

4 - Espere até que os 4 containers sejam criados e estejam em execução.

5 - Execute a aplicação em :

```
http://localhost:3000/
```
