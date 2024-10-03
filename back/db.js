// db.js
require("dotenv").config(); // Charger les variables d'environnement depuis le fichier .env
const mysql = require("mysql2/promise");
const fs = require("fs");
const csv = require("csv-parser");

// Configuration de la connexion en utilisant les variables d'environnement
const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const variables = {
  date: "date",
  "01": "SO2",
  "02": "NO",
  "03": "NO2",
  12: "NOx",
  24: "PM10",
  39: "PM2_5",
  68: "PM1",
};

const types = {
  date: "DATETIME",
  SO2: "FLOAT",
  NO: "FLOAT",
  NO2: "FLOAT",
  NOx: "FLOAT",
  PM10: "FLOAT",
  PM2_5: "FLOAT",
  PM1: "FLOAT",
};

// Fonction pour créer une table à partir du CSV
const createTableFromCsv = async (csvFilePath, dbName) => {
  let connection;
  try {
    // ajout de la base de données
    connectionConfig.database = dbName;
    // Connexion à la base de données
    connection = await mysql.createConnection(connectionConfig);

    // Lire les colonnes du fichier CSV
    const columns = [];
    const columnsHeader = [];
    const rows = [];

    // Lire le fichier CSV
    await new Promise((resolve, reject) => {
      fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on("headers", (headers) => {
          // Créer la liste des colonnes
          headers.forEach((header) => {
            columnsHeader.push(
              `${variables[header]} ${types[variables[header]]}`
            );
            columns.push(variables[header]);
          });
        })
        .on("data", (row) => {
          // Ajouter chaque ligne du CSV dans le tableau rows
          rows.push(row);
        })
        .on("end", resolve)
        .on("error", reject);
    });

    // Nom de la table (tu peux personnaliser cela)
    const tableName =
      csvFilePath.split(".")[1] === "/FR00008" ? "marseille" : "bouc_bel_air";

    // Création de la table dans MariaDB
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (id INT PRIMARY KEY AUTO_INCREMENT,
    ${columnsHeader.join(",")})`;
    await connection.query(createTableQuery);
    console.log(`Table "${tableName}" créée avec succès.`);

    // Insertion des données par lots
    const batchInsertSize = 100; // Nombre de lignes par lot
    let batchValues = [];

    let columnsInsert = Object.keys(rows[0])
      .map((key) => variables[key])
      .join(",");

    for (const row of rows) {
      //   const columns = Object.keys(row)
      //     .map((key) => variables[key])
      //     .join(",");

      const values = Object.entries(row)
        .map(([key, value]) => {
          if (key === "date" && value) {
            const date = new Date(value);
            return `'${date.toISOString().slice(0, 19).replace("T", " ")}'`;
          }
          return value === "" ? "NULL" : `'${value}'`;
        })
        .join(",");

      batchValues.push(`(${values})`);

      // Insérer le lot si la taille dépasse batchInsertSize
      if (batchValues.length === batchInsertSize) {
        console.log("Insertion d'un lot de données...");
        const insertQuery = `INSERT INTO ${tableName} (${columnsInsert}) VALUES ${batchValues.join(
          ","
        )}`;
        await connection.query(insertQuery);
        batchValues = []; // Réinitialiser le lot
      }
    }

    // Insérer les restes après la boucle
    if (batchValues.length > 0) {
      console.log("Insertion des données restantes...");
      const insertQuery = `INSERT INTO ${tableName} (${columnsInsert}) VALUES ${batchValues.join(
        ","
      )}`;
      await connection.query(insertQuery);
    }

    console.log("Les données ont été insérées avec succès.");
  } catch (err) {
    console.error(
      "Erreur lors de la création de la table ou de l'insertion des données:",
      err
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

// // Appel de la fonction avec le chemin vers le fichier CSV
// createTableFromCsv("data.csv");

// Vérification et création de la base de données si elle n'existe pas
const checkAndCreateDatabase = async (dbName) => {
  let connection;
  try {
    // Connexion à MariaDB/MySQL
    connection = await mysql.createConnection(connectionConfig);

    // Vérifier si la base de données existe
    const [rows] = await connection.query(`SHOW DATABASES LIKE '${dbName}'`);
    if (rows.length === 0) {
      // La base de données n'existe pas, la créer
      await connection.query(`CREATE DATABASE ${dbName}`);
      console.log(`La base de données "${dbName}" a été créée avec succès.`);
      await createTableFromCsv("./FR00008.csv", dbName);
      await createTableFromCsv("./FR00019.csv", dbName);
    } else {
      console.log(`La base de données "${dbName}" existe déjà.`);
    }
  } catch (err) {
    console.error(
      "Erreur lors de la vérification ou de la création de la base de données:",
      err
    );
  } finally {
    // Fermer la connexion
    if (connection) {
      await connection.end();
    }
  }
};

module.exports = { checkAndCreateDatabase };
