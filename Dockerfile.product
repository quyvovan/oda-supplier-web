FROM node:16.17.0-alpine3.15

RUN apk add --no-cache libc6-compat
RUN npm i -g npm

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

WORKDIR /var/www/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --omit=optional
RUN npx browserslist@latest --update-db
RUN npx next telemetry disable

# need to install linux specific swc builds
RUN yarn add -D @swc/cli @swc/core

COPY . .

RUN yarn build

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

CMD [ "yarn", "start" ]