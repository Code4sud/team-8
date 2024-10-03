"use strict";

const {
  getDataFromTable,
  getAverageByYear,
  getAverageByDay,
} = require("../request");

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return "this is an example";
  });

  fastify.get("/test", async function (request, reply) {
    return { test: true };
  });

  fastify.get("/data/:tableName", async function (request, reply) {
    const { tableName } = request.params;
    const data = await getDataFromTable(tableName);
    return { data };
  });

  fastify.get("/averageYear/:tableName", async function (request, reply) {
    const { tableName } = request.params;
    const data = await getAverageByYear(tableName);
    return { data };
  });

  fastify.get("/averageDay/:tableName", async function (request, reply) {
    const { tableName } = request.params;
    const data = await getAverageByDay(tableName);
    return { data };
  });
};
