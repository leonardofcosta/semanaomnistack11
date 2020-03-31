// importa o express
const express = require("express");

// modulo que determina quem vai poder acessar nossa aplicação (npm install cors)
const cors = require("cors");

const { errors } = require("celebrate");

// importa as rotas, foi colocado o './' para que ele entenda que estou passando um 
// arquivo e não um pacote, como por exemplo o express
const routes = require("./routes");

const app = express();

// permite que todas as aplicações front-end possam acessar nosso back-end
app.use(cors());

app.use(express.json());

// informo ao express para usar as rotas informadas na constante routes
app.use(routes);

app.use(errors());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar / Listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o símbolo de '?' (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos 
 * Request Body: Corpo da requisição, utilizado par criar ou alterar recursos
 */

/**
 * SQL: MySQL, -> SQLite <-, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: select * from users
 * -> Query Builder: table("users").select('*').where()
 *    knex.js
 */



module.exports = app;