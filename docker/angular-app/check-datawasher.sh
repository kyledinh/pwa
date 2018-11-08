#!/bin/bash

cmd1='curl --insecure -XGET https://datawasher-api/create?limit=10&first_name=MOX_RFN&last_name=MOX_RLN&email=MOX_EMAIL&addr=MOX_RSA&code=MOX_RI_1000&state=MOX_STATE&sex=MOX_RSMF'
docker exec -w /usr/src/app -it docker_react-app_1 $cmd1
