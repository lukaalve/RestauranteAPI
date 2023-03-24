const express = require('express')

const MesaModels = require('./../models/MesaModels')
const router = express.Router()

router.get('/mesas', async (req, res) => {
    const mesas = await MesaModels.find()
    return res.status(200).send(mesas)
})


router.post('/mesas', async (req, res) => {
    try {
        const mesacriada = await MesaModels.create({
            numero: req.body.numero
        })
        return res.status(200).send('Mesa Criada')


    } catch (error) {
        if (error.code == 11000) {
            return res.status(400).send('Numero de Mesa ja existe')

        }

        return res.status(500).send(error)
    }
})



router.delete('/mesas/:numero', async (req, res) => {
    const numero = req.params.numero;
    await MesaModels.findOneAndDelete({ numero: numero })

})

module.exports = router