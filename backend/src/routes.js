// importa o express
const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

// Desacopla o módulo de rotas do express, adicionando-o em uma nova constante
const routes = express.Router();

// Fazer login
routes.post("/sessions", SessionController.create);

// Rota para listagem de ongs
routes.get("/ongs", OngController.index);

// Rota para criação de uma ong
routes.post("/ongs", OngController.create);

// Lista incidentes/casos por ong
routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);

routes.post("/incidents", IncidentController.create);

routes.delete("/incidents/:id", IncidentController.delete);

// exporta as rotas
module.exports = routes;