#!/bin/bash

cmd1='npm run build'
docker exec -w /usr/src/app -it pwa_react_app $cmd1

cmd3="webpack-dev-server --mode=production --host 0.0.0.0 --port 3000 --content-base build/"
docker exec -w /usr/src/app -it pwa_react_app $cmd3

open http://127.0.0.1:3000
