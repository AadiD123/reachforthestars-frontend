#!/bin/bash

docker build -t roblburris/rfts:prod .
docker push roblburris/rfts:prod