const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/todo-list.json");

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const server = app.listen(process.env.PORT || 5000, () => console.log(`Listening on port ${server.address().port}`));