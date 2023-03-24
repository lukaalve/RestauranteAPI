const mongoose = require('mongoose')

//Schema 

const AtendenteSchema = new mongoose.Schema({

    nome: {

        type: String,
        required: true,

    },

    cpf: {

        type: String,
        required: true,
        unique: true

    },

    telefone: {


        type: String,
        require: true,


    },

    email: {

        type: String,
        require: true,
        unique: true
    },

    senha: {
        type: String,
        require: true


    }

}, { timestamps: true })


const AtendenteModels = mongoose.model('Atendentes', AtendenteSchema)
module.exports = AtendenteModels