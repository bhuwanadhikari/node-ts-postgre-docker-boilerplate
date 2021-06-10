FROM node:lts-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app
# COPY ./ ./
COPY package.json ./
COPY tsconfig.json ./
RUN npm install 

EXPOSE 8080
CMD npm run dev