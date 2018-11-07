#!/bin/bash

cmd1='ng serve --host 0.0.0.0'
docker exec -w /usr/src/app -it docker_react-app_1 $cmd1
