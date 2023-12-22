FROM platformatic/platformatic:latest

USER root

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml tsconfig.json global.d.ts platformatic.db.json ./

COPY migrations   migrations
COPY types        types
COPY routes       routes
COPY plugins      plugins
COPY public       public
COPY prisma       prisma

RUN pnpm install --fix-lockfile --frozen-lockfile --prod --ignore-scripts
RUN npx prisma generate

RUN pnpm run build

EXPOSE 5003

CMD ["platformatic", "start"]

#ENTRYPOINT ["tail", "-f", "/dev/null"] # Allows developers to exec bash command to debug container internals
