FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./src /usr/src/app

EXPOSE 8080
RUN npm install --registry=https://nexus.pbh.gov.br/repository/npm-group/ 
CMD ["npm", "start"]