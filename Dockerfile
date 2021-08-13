FROM node:16-slim

WORKDIR /user/src/app
COPY package.*json .
COPY . .

RUN yarn install
