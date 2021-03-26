FROM node:14

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 4002

CMD ["npm", "start"]
