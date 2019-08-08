// Todas as rotas ligasdas a cricao de desenvolvedores, deletar, alaterar ,listar ....
const axios = require('axios');  //Pacote para requisicao de dados de API's
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res){
        const { user } = req.headers;  // buscando o user no header
        const loggedUser = await Dev.findById(user); // guarda todas as infos do user no logged user
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } },
            ]
        })
        return res.json(users);
    },

    async store(req, res) { //para se utilizar o await é necessario informar que a funcao é assincorina com async
        const { username } = req.body;  // Desestrutura e permite a utilizacao do username na funcao store, ao inves de fazer req.body.username
        
        const userExists = await Dev.findOne({user: username});  // find one é uma funcao do mongoose
        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`); // a constante response recebe os dados da API do link
// O await indica que o programa tem que esperar o axios.get para dar continuidade
        const { name, bio, avatar_url: avatar } = response.data; // desestruturacao para pegar apenas os dados que serao utilizados

        const dev = await Dev.create({ //passando informacoes
            name,
            user: username,
            bio,
            avatar

        })

        return res.json(dev);  // .data é onde o axios armazena os dados da req
    }
}