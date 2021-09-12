#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node servers"
cd /home/ubuntu/express-app
yarn run stop
