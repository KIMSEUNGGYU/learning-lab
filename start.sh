#/bin/bash

DOCKER_CONTAIER=$(docker ps -a -q)
echo "=== Docker Container Stop and Remove==="
if [ -n "$DOCKER_CONTAIER" ]; then
    echo "Container Stop and Remove"
    docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)
fi

echo -e "\n=== Create Server Container ==="
docker run -d --name server -p 3000:3000 -v C:\\Users\\gyu\\git\\learning-lab\\server:/usr/src/server server

echo -e "\n=== Create Swagger Container ==="
docker run -d --name swagger -p 5000:5000 -v C:\\Users\\gyu\\git\\learning-lab\\swagger:/usr/src/swagger swagger

echo -e "\n=== Create Nginx Container ==="
docker run -d --name nginx -p 80:80 --link server:server --link swagger:seagger -v C:\\Users\\gyu\\git\\learning-lab\\nginx\\nginx.conf:/etc/nginx/nginx.conf nginx
