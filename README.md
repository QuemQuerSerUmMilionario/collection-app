# collection app


### Prerequisites

**Node version 18.7.x**

### Cloning the repository

```shell
git clone https://github.com/QuemQuerSerUmMilionario/collection-app.git
```

### Install packages

```shell
npm i
```

### Setup .env.local file


```js
NEXT_BASE_URL=

NEXTAUTH_URL=
NEXTAUTH_SECRET=

GOOGLE_ID=
GOOGLE_CLIENT_SECRET=

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=
AWS_BUCKET_URL=
DATABASE_URL=
RESEND_API_KEY=
```

### Setup Prisma 
```shell
npx prisma generate
npx prisma db push (utilizar em caso de banco local)
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |


## Estrutura do projeto
```shell
  
prisma
├── schema.prisma
└── migrations
app
├── api
│   ├── [next-auth]
│   └── route.js
├── page.jsx
│    
└── main.js
actions
└── actions.js
components
└── components.jsx
lib
└── libraries.js
data
└── data.js
```

1. **prisma:**
   - **Descrição:** Contém o arquivo `schema.prisma` para definição do modelo de dados.
   - **Referências:** https://www.prisma.io/docs

2. **app:**
   - **Descrição:** Núcleo da aplicação, organizado em módulos principais.
   - **app/api/[next-auth]:** Implementação e configuração do NextAuth para autenticação.
   - **app/api/:** Lógica das API routes do Next.js.
   - **app/:** Componentes e lógica associada para páginas e rotas no front-end.

3. **actions:**
   - **Descrição:** Next server actions , são utilizadas para deixar o back end mais integrado com o front,
                    uma das vantagens é a agilidade de desenvolvimento.
   - **Referências:** https://nextjs.org/docs/app/building-your-application/data-fetching/       server-actions-and-mutations

4. **components:**
   - **Descrição:**  Componentes React reutilizáveis para o front-end.

5. **lib:**
   - **Descrição:** Bibliotecas e utilitários gerais.

6. **data:**
   - **Descrição:**  utilitários relacionados a dados dos modelos.



  
