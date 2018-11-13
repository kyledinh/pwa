#!/bin/bash

cmd1='npm install'
docker exec -w /usr/src/app -it pwa_react_app $cmd1

cmd2="npm install webpack, npm link webpack"
docker exec -w /usr/src/app -it pwa_react_app $cmd2

cmd3="npm install -g webpack-dev-server"
docker exec -w /usr/src/app -it pwa_react_app $cmd3
