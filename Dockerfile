FROM node:latest

ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY **/*/*.* ./

EXPOSE 3000
EXPOSE 80
