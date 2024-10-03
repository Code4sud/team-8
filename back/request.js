require("dotenv").config(); // Charger les variables d'environnement depuis le fichier .env
const mysql = require("mysql2/promise");

const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

const getDataFromTable = async (tableName) => {
  let connection;
  try {
    connection = await mysql.createConnection(connectionConfig);
    const [rows] = await connection.execute(`SELECT * FROM ${tableName}`);
    return rows;
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

module.exports = { getDataFromTable };
