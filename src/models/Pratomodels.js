const mongoose = require('mongoose')

const PratoSchema = new mongoose.Schema({
    nome: String,
    preço: Number,
    descrição: String,
    info: Object,
    imagens: String,

})

const Pratomodels = mongoose.model('pratos', PratoSchema)




module.exports = Pratomodels;
