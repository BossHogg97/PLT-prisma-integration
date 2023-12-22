# Startup

This is a generated [Platformatic DB](https://docs.platformatic.dev/docs/reference/db/introduction) application.

## Requirements

You'll need to have [Node.js](https://nodejs.org/) >= v18.8.0 or >= v20.6.0

## Setup

```bash
# install dependencies
pnpm i
```

## Usage

Start the server with:

```bash
pnpm dev
```

Open browser to http://localhost:5003/doc. You will redirect to doc page

## Build

```bash
pnpm build

```

## Advanced

### Create and seed the database

At start of application the migration contained into `migrations' folder will define and seed initial database.

### Create docker file and start compose

command shortcut

```
pnpm docker:build
```

Show content

```
docker run -it gemini-api /bin/sh
```

### Explore

- ⚡ The Platformatic DB server is running at http://localhost:5003/
- 📔 View the REST API's Swagger documentation at http://localhost:5003/documentation/

## Prisma setup
Following the command list for setup and integrate Prisma
```
1. 
npx prisma init --datasource-provider postgresql

2. 
npx prisma db pull

3.
npx platformatic db migrations apply

4.
npx prisma db pull

5.
npx prisma generate

6.
npx platformatic db start
```

## Custom routes
When update routes remove **dist** folder. This because when `pnpm start` is executed update dist and doesn't change old routes