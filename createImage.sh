DOCKER_CONTAIER=$(docker ps -a -q)
echo "=== Docker Container Stop and Remove==="
if [ -n "$DOCKER_CONTAIER" ]; then
    echo "Container Stop and Remove"
    docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)
fi

DOCKER_IMAGES=$(docker images -a -q)
echo -e "\n=== Docker Image Remove ==="
if [ -n "$DOCKER_IMAGES" ]; then
    echo "Remove Image"
    docker rmi $(docker images -a -q)
fi

echo -e "\n=== Docker Image Create ==="
echo -e "\nCreate Server Image"
docker build -t server -f ./Dockerfiles/dev.server.Dockerfile .
echo -e "\nCreate Swagger Image"
docker build -t swagger -f ./Dockerfiles/dev.swagger.Dockerfile .
echo -e "\nCreate Nginx Image"
docker build -t nginx -f ./Dockerfiles/dev.nginx.Dockerfile .


