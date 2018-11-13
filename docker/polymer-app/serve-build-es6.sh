#!/bin/bash

open http://127.0.0.1:8000
cmd='polymer serve --hostname 0.0.0.0 --port 8000 build/es6-bundled'
docker exec -w /usr/src/app -it pwa_polymer_app $cmd
