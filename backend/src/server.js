const express = require('express');  // Importando a biblioteca express (o express é uma expressao que quando chamada cria um novo servidor que é uma nova porta de entrada para receber requisiçoes e retornar respostas)
const mongoose = require('mongoose');  // Importando biblioteca mongoose
const cors = require('cors'):

const routes = require('./routes');  // Importando as rotas (importante notar que o ./ esta dizendo que o routes esta na mesma pasta, e deve ser utilizado pois nao é um modulo importado. Caso nao estivese seria necessario colocar o caminho para o arquivo das rotas)

const server = express();  // o comando const cria uma constante somente para leitura, nao pode ser alterada ( server foi criado utilizando a funcao express)

mongoose.connect('mongodb+srv://joaopedromgoulart:tao159357@cluster0-0nf8z.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());  // liberando acesso para acesso de outros enderecos
server.use(express.json());  // "Avisa" para o server que a comunicação sera em JSON
server.use(routes);

server.listen(3333);  // A partir daqui é possivel o servidor esta ouvindo (comunicando) com a porta 3333
