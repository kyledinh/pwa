#!/bin/bash

docker exec -it pwa_postgres_db psql -U postgres -c "CREATE DATABASE pwa;"
