#!/bin/bash

cmd1='ng serve --host 0.0.0.0'
docker exec -w /usr/src/app -it docker_angular_app $cmd1
