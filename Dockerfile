FROM node:16-alpine

WORKDIR /var/www/app

COPY package*.json .

RUN yarn install
RUN yarn add -D @swc/cli @swc/core

COPY . .



CMD [ "yarn", "dev" ]