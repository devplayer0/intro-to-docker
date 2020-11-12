FROM node:lts-alpine

WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install

COPY server.js ./

EXPOSE 3000
CMD ["node", "server.js"]
