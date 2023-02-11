FROM node:16.15.0

RUN mkdir /server
WORKDIR /server
COPY ./package.json ./package.json
COPY ./src ./src
RUN npm install
WORKDIR /server/src
EXPOSE 3001
CMD node App.js