FROM node:14

WORKDIR /usr/src/server

# Specify port app runs on
EXPOSE 3000

# Run the app
CMD [ "npm", "start" ]