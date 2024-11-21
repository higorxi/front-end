# Projeto Front-End E-paper

Este é um projeto Next.js criado para testar conhecimento e validar conhecimento utilizando ferramentas como Nextjs, Typescript, Prisma, Vercel e outras.

## Requisitos

Antes de rodar o projeto, certifique-se de que você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (Recomendado: versão LTS)
- [Docker]([https://nodejs.org/](https://www.docker.com/))
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (Gerenciador de pacotes)

## Instalação

Siga os passos abaixo para rodar o projeto localmente.

### 1. Clone o repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/higorxi/front-end
cd front-end
```

### 2. Instalar o projeto

```bash
npm install
```


### 3. Rodar Localmente

Para rodar localmente é necessário ter o Docker, pois iremos subir um container de Postgress para o nosso banco.
Em produção estou utilizando Supabase para nos servir:

```bash
docker compose up -d
```

Após rodar o container, temos que definir a nova variável de ambiente, para isso deve ser criado um arquivo .env na raiz do projeto e adicionado as seguintes variáveis:

NEXT_PUBLIC_API_URL='http://localhost:3000'

DATABASE_URL=""

# ATENÇÃO
CERTIFIQUE-SE SE ESTÁ APONTANDO PARA A PORTA CORRETAMENTE DE SEU FRONT E BACK DA APLICAÇÃO.
# ATENÇÃO


### 4. Rodar em modo desenvolvimento

```bash
npm run dev
```


