FROM node:lts-alpine


# Create and define the node_modules's cache directory.
RUN mkdir /usr/cache
WORKDIR /usr/cache

# Install the application's dependencies into the node_modules's cache directory.
COPY package.json ./
# COPY package-lock.json ./
RUN npm install

# Create and define the application's working directory.
RUN mkdir /usr/app
WORKDIR /usr/app