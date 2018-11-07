#!/bin/bash

cmd1='ng new angular-app'
docker exec -w /usr/src/app -it docker_react-app_1 $cmd1
