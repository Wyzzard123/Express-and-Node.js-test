# README

Following tutorial for Express JS and Node JS here: https://www.youtube.com/watch?v=G8uL0lFFoN0

## How to use

1. Use npm run dev to run server using nodemon that autorefreshes.

1. Install postgresql here: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

## Library notes
1. sequelize = ORM system
    1. Default .sequelizerc config can be found here: https://sequelize.org/master/manual/migrations.html#the--code--sequelizerc--code--file
    1. Must modify the default .sequelizerc file then use sequelize init 
    1. Must modify the new config.js file (default name is database.json)
    1. Migrate with sequelize db:migrate

1. pg = low level library to install postgresql
1. Also should use npm install sequelize-cli

## Postgres notes
1. You must have '' around the password and end your statements with ;, or the SQL queries will not work.
