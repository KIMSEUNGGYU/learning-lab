module.exports = {
  development: {
    username: "root",
    password: "dev_password",
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: "root",
    password: "test_password",
    database: "database_test",
    host: "127.0.0.1",
    port: 3307,
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
};
