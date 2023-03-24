const mongoose = require('mongoose')

const MesaSchame = new mongoose.Schema({
    numero: {

        type: String,
        unique: true,
        require: true
    }
})


const MesaModels = mongoose.model('Mesa', MesaSchame)

module.exports = MesaModels