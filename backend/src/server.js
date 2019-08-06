const express = require('express');  // Importando a biblioteca express (o express é uma expressao que quando chamada cria um novo servidor que é uma nova porta de entrada para receber requisiçoes e retornar respostas)

const server = express();  // o comando const cria uma constante somente para leitura, nao pode ser alterada ( server foi criado utilizando a funcao express)

server.get('/', (req, res) => {
    n = req.query.name // recebe o nome disponibilizado na URL Eg.(http://localhost:3333/?name=joao)
    return res.json({ message: `Helo ${n}`})
    //return res.send(`Hello ${nome}`);  // envia hello Joao, umportante notar a sintaxe usando crases para poder retornar uma vairiavel
    //return res.send(`Hello ${req.query.name}`);  >> Opcao refatorada
});

server.listen(3333);  // A partir daqui é possivel o servidor esta ouvindo (comunicando) com a porta 3333
