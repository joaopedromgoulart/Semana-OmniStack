const express = require('express'); // Importando biblioteca express
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

/* routes.get('/', (req, res) => {
    n = req.query.name; // recebe o nome disponibilizado na URL Eg.(http://localhost:3333/?name=joao)
    return res.json({ message: `Helo ${n}`});
});
cadastrar informacoes dentro da aplicacao*/

routes.get('/Devs', DevController.index);
routes.post('/Devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;  // exportando as rotas para server.js
