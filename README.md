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

2 - Baixe o arquivo docker-compose.yml do repositório abaixo e coloque-o na raiz da pasta que você criou no item acima:"

[docker-compose.yml](https://github.com/thiagoconsult/arquivo_docker-compose-mvp.git)

3 - Acesse esta pasta pelo terminal ou pelo VSCODE e execute o comando:

```
docker compose up -d
```

4 - Espere até que os 4 containers sejam criados e estejam em execução.

5 - Execute a aplicação em :

```
http://localhost:3000/
```

## REQUISITOS DA MVP:

**Requisitos para componente A (principal) (3,0 pts):**

    [Caso de uma API] (2,0 pts) API REST implementada em Python e Flask com pelo menos 5 rotas, e devem ser implementadas pelo menos uma com os métodos POST, PUT, DELETE, GET:
        Obs: A ausência de um dos métodos implicará na penalização de 0,5 pts.

    [Caso de um FRONT] (2,0 pts) Desenvolvimento de uma interface do usuário, utilizando HTML, CSS e JavaScript:
        Será permitido a utilização de bibliotecas ou frameworks baseadas em Javascript, como React, Vue, e outras;
        Será permitido o uso de bibliotecas de componentes, como o Material UI, Bootstrap, e outras;
        A interface do usuário deve fazer chamadas a pelo menos 5 rotas diferentes.
            Obs: caso chame menos de 5 rotas, haverá uma penalização de 0,5 pts
    ```
    $ Frontend entregue em React.
    ```
     (1,0 pts) Documentação:
        Caso tenha sido desenvolvido uma API, a documentação deverá ser feita em Swagge;
        Caso tenha sido desenvolvido uma interface do usuário, a documentação deverá estar no arquivo readme.
    ```
    $ Este README.md é a documentação do Frontend.
    ```
    (1,0 pts) Dockerfile com todo o processo de implementação da solução em um container docker.
        OBS: A não execução correta ou não entrega do DockerFile implicará na penalização de 1,0 pts
    ```
    $ O Dockerfile do Frontend está na raiz /front_end, assim como o Dockerfile de cada uma das 3 APIs.
    O docker-compose para subir os 3 containers das APIs e o container do Frontend está no link abaixo:
    ```
    [docker-compose.yml](https://github.com/thiagoconsult/arquivo_docker-compose-mvp.git)

**Requisitos para componente B (2,0 pts):**

        (1,0 pts) Uso de uma API externa pública e que ofereça um serviço não pago;
        (1,0 pts) Apresentar na documentação a componente A a API externa que será utilizada, deixando claro informações como: licença de uso, cadastro (se necessário) e rotas que serão utilizados.
        ```
        $ Utilizado o serviço VIACEP, os créditos estão neste README.md
        ```

**Requisitos para componente C (3,0 pts):**

    (2,0 pts) API REST ou GraphQL.
        Obs: a ausência de um dos métodos implicará na penalização de 0,5 pts.
    (0,5 pts) Documentação feita em Swagger.
    (0,5 pts) Dockerfile com todo o processo de implementação da solução em um container docker:
        Obs: a não execução correta ou não entrega do DockerFile implicará na penalização de 1,0 pts.
    ```
    $ Foram desenvolvidos 3 componentes C, os 3 estão listados no início deste documento. Os arquivos Dockerfile de cada serviço estão na raiz de cada API.
    ```

**Quanto a organização dos códigos (1,0 pts):**

        (0,5 pts) Deve ser criado um projeto/repositório por componente desenvolvido;
        ```
        $
        | Entregável                    | Funcionalidade                                  | Link                                                            |
        | ----------------------------- | ----------------------------------------------- | --------------------------------------------------------------- |
        | microservico api_empresa      | CRUD de Empresas                                | https://github.com/thiagoconsult/api_empresa.git                |
        | microservico api_pessoa       | CRUD de Pessoas                                 | https://github.com/thiagoconsult/api_pessoa.git                 |
        | microservico api_oportunidade | CRUD de oportunidades que utiliza as APIS acima | https://github.com/thiagoconsult/api_oportunidade.git           |
        | microservico front_end        | Frontend que utiliza os 3 serviços acima        | https://github.com/thiagoconsult/front_end.git                  |
        | docker-compose.yml            | arquivo que sobe toda a aplicação               | https://github.com/thiagoconsult/arquivo_docker-compose-mvp.git |
        ```

        (0,5 pts) Qualidade da organização do código.
        ```
        $ Aí é com vcs PUC RIO rs
        ```

**Caso você queira inserir novos componentes dos tipos B e C:**

        (0,5 pts extra) para cada nova API externa (componente do tipo B)
        (1,5 pts extra) para cada novo microsserviço desenvolvido (componente do tipo C)
            Lembrar de que cada componente deve estar em um projeto/repositório diferente e não esquecer do Dockerfile.
        ```
        $ Foram feitos 3 APIs, cada um com seu Dockerfile
        ```
