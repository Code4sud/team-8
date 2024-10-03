"use strict";

const path = require("node:path");
const AutoLoad = require("@fastify/autoload");
require("dotenv").config();
const { checkAndCreateDatabase } = require("./db");

const cors = require("@fastify/cors");

// Pass --options via CLI arguments in command to enable these options.
const options = {};

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  const dbName = process.env.DB_NAME;
  await checkAndCreateDatabase(dbName);

  fastify.register(cors, {
    origin: "*", // Autorise toutes les origines, change cette valeur pour limiter les domaines
    methods: ["GET", "POST", "PUT", "DELETE"], // Méthodes HTTP autorisées
  });
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};

module.exports.options = options;
