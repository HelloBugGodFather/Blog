#!/bin/bash

cd /app/backend
source .venv/bin/activate
python main.py &

sleep 3

nginx -g 'daemon off;'