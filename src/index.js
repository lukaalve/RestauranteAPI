const express = require('express')

const app = express()

require('./db/mongoose')

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send('Api do Restaturante')
})

//Rotas - mesas 

const MesaRoute = require('./routes/MesaRoute')
app.use(MesaRoute)

const AtendentesRoute = require('./routes/AtendentesRoute')
app.use(AtendentesRoute)

const pratos = require('./routes/pratos')
app.use(pratos)

const carregarModels = require('./models')
carregarModels()


const pedidos = require('./routes/pedido')
app.use(pedidos)

app.listen(3000, () => {

    console.log('Api rodando')
})










