# syntax=docker/dockerfile:1
#FROM node:14.19.1
FROM node:16.14.2
ENV NODE_ENV=development
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
#COPY ["src", "tsconfig.json", "./"]
RUN npm install -g npm@8.7.0
RUN npm install
#RUN npm install nodemon
#RUN npm install temporalio --build-from-source
#RUN npm i @temporalio/core-bridge --build-from-source
#RUN apt-get install libc6
#RUN apt-get update 
#RUN apt-get install build-essential -y
#RUN wget http://ftp.gnu.org/gnu/glibc/glibc-2.25.tar.gz
COPY . .
