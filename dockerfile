FROM node:16

WORKDIR /usr/app

COPY . .

RUN npm install

COPY .env .env

EXPOSE 3000

CMD ["node", "index.js"]
