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
NEXT_BASE_URL="http://localhost:3000";

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=

GOOGLE_ID=
GOOGLE_CLIENT_SECRET=

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION="sa-east-1"
AWS_BUCKET_NAME="collectionimagesalb"
AWS_BUCKET_URL="https://collectionimagesalb.s3.sa-east-1.amazonaws.com"

DATABASE_URL="mysql://root@localhost:3306/collection"

RESEND_API_KEY=
```

### Setup Prisma
```shell
npx prisma generate
npx prisma db push
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
