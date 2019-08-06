const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,  // Cria uma coluna (createdAt) em cada registro de desenvolvedor salvo, armazenando a data de criacao e uma coluna (updatedAt) que registra datas de alteraçoes
});

module.exports = model('Dev', DevSchema);
