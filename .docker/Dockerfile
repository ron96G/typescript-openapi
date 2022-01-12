FROM node:16-alpine

WORKDIR /usr/src/app


COPY package*.json ./
RUN npm install

COPY build .
COPY public public 

EXPOSE 8080
CMD [ "node", "index.js" ]