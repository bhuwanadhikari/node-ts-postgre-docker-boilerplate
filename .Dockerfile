FROM node:lts-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
COPY ./ ./
# COPY package.json tsconfig.json wait.sh ./
RUN chmod +x /wait
RUN npm install 

EXPOSE 8080
CMD /wait && npm run dev