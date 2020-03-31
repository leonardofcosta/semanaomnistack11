// importa o express
const express = require("express");

const { celebrate, Segments, Joi } = require("celebrate");

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
routes.post("/ongs", celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(13),
    cidade: Joi.string().required(),
    uf: Joi.string().required().length(2)  
  })
}), OngController.create);

// Lista incidentes/casos por ong
routes.get("/profile", celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProfileController.index);

routes.get("/incidents", celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), IncidentController.index);

routes.post("/incidents", IncidentController.create);

routes.delete("/incidents/:id", celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), IncidentController.delete);

// exporta as rotas
module.exports = routes;