// importa o knex
const knex = require("knex");

// importa configurações do banco de dados
const configuration = require("../../knexfile");

const config = process.env.NODE_ENV === "test" ? configuration.test : configuration.development;

// cria conexão
const connection = knex(config);

// exporta a conexão
module.exports = connection;