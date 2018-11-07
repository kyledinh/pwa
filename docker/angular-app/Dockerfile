FROM node:10.13

ENV DEBIAN_FRONTEND noninteractive
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN apt-get update && apt-get -y install bash && apt-get -y install vim
RUN npm install -g -y @angular/cli
