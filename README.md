# Desafio ToGov - Frontend do Sistema de Gerenciamento de Tarefas
## Objetivo Geral

Medir conhecimentos básicos a respeito das tecnologias utilizadas no projeto SISGP em desenvolvimento pela ToGov.
Objetivo do Desafio

Desenvolver um Sistema básico de Gerenciamento de Tarefas.
Tecnologias Base

    React
    Vite
    Ant Design

Requisitos do Projeto
Frontend (React com Ant Design)
Páginas

    Login
    Dashboard de tarefas

Componentes

    Formulário de cadastro de tarefas
    Tabelas de tarefas

Integração

    Consumir a API do backend para todas as operações de CRUD.

Design

    Utilizar o Ant Design para criar os itens previstos de interface.

Como Rodar o Projeto
Pré-requisitos

    Node.js v14 ou superior
    NPM ou Yarn
    Docker
    Docker Compose

Instruções

    Clone o repositório:

    bash

git clone https://github.com/Rharan-Ru/ToGovChallenge-Frontend

cd ToGovChallenge-Frontend

Instale as dependências:

npm install
# ou
yarn install

Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis:

VITE_API_BASE_URL=http://localhost:3000

Inicie o projeto localmente:

    npm run dev
    # ou
    yarn dev

    A aplicação estará disponível em http://localhost:8080.

Iniciando com Docker Compose

    Certifique-se de que o backend esteja rodando conforme as instruções do [README do Backend](link para o README do backend).

    Inicie o frontend com Docker Compose:

    docker-compose up --build

    A aplicação estará disponível em http://localhost:8080.

Tempo Gasto

Tempo total gasto: 6 horas
