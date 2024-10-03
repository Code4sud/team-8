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

// fonction qui récupère la moyenne par an de chaque polluant

const getAverageByYear = async (tableName) => {
  let connection;
  try {
    connection = await mysql.createConnection(connectionConfig);
    const [rows] = await connection.execute(
      `SELECT YEAR(date) as year, AVG(SO2) as SO2, AVG(NO) as NO, AVG(NO2) as NO2, AVG(NOx) as NOx, AVG(PM10) as PM10, AVG(PM2_5) as PM2_5, AVG(PM1) as PM1 FROM ${tableName} GROUP BY YEAR(date)`
    );
    return rows;
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

// fonction qui récupère la moyenne par jour de chaque polluant
const getAverageByDay = async (tableName) => {
  let connection;
  try {
    connection = await mysql.createConnection(connectionConfig);
    const [rows] = await connection.execute(
      `SELECT DATE(date) as jour, AVG(SO2) as SO2, AVG(NO) as NO, AVG(NO2) as NO2, AVG(NOx) as NOx, AVG(PM10) as PM10, AVG(PM2_5) as PM2_5, AVG(PM1) as PM1 FROM ${tableName} GROUP BY jour`
    );
    return rows;
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

module.exports = { getDataFromTable, getAverageByYear, getAverageByDay };
