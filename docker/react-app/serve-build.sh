#!/bin/bash

open http://127.0.0.1:9000
cmd='some-build-serve-cmd --hostname 0.0.0.0 --port 9000 blahblah'
docker exec -w /child/dirpath/src -it docker_react-app_1 $cmd
