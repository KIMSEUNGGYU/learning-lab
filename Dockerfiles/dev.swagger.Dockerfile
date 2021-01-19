FROM node:14

WORKDIR /usr/src/swagger

# Specify port app runs on
EXPOSE 5000

# Run the app
CMD [ "npm", "start" ]