const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');

//Editar texto: Selecionar texto e ctrl+D
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);



module.exports = routes;