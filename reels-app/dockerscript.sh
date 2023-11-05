#!bin/bash

docker rm -f $(docker ps -aq)
docker image prune -a
docker-compose up -d
