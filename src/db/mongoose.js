const mongoose = require('mongoose')


const DB_URL = process.env.DB_URL
mongoose.connect(DB_URL, { dbName: 'restaurantes_DB', }
)


    .then(() => {

        console.log('Banco de dados conectado com sucesso')

    })
    .catch(error => {

        console.log(' Erro ao se conectar com o banco de dados' + error)
    })
