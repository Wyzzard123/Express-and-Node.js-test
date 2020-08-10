// Starts off as a JSON when using sequelize init.
// Must add the module.exports =
// Must configure the username, password, databasename, and dialect.
// Must add a port.
module.exports = {
  "development": {
    //To log into database: psql express-mvp-db express-mvp-dbuser
    "username": "express-mvp-dbuser",
    "password": "mvp_db",
    "database": "express-mvp-db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    // Add the port in
    "port": 5432
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
