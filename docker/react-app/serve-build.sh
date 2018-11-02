#!/bin/bash

cmd1='npm run build'
docker exec -w /usr/src/app -it docker_react-app_1 $cmd1

cmd2="webpack-dev-server --mode=production --host 0.0.0.0 --port 3000 --content-base build/"
docker exec -w /usr/src/app -it docker_react-app_1 $cmd2

open http://127.0.0.1:3000
