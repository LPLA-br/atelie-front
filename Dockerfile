# syntax=docker/dockerfile:1
FROM node:latest
LABEL maintainer="pluiz0674@gmail.com"
WORKDIR /ateliefront
ENV VERSAO="0.0.1"
COPY . .
RUN npm install
EXPOSE 8080
ENTRYPOINT [ "npm","run", "start" ]

