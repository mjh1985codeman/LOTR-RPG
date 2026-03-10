const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: process.env.DB_HOST || "localhost",
      dialect: "mysql",
      port: process.env.DB_PORT || 3306,
    });

module.exports = sequelize;
