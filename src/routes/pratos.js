const express = require('express')
const Pratomodels = require('../models/Pratomodels')
const router = express.Router()

router.get('/pratos', async (req, res) => {
    const pratos = await Pratomodels.find({})
    return res.status(200).send(pratos)
})


router.post('/pratos', async (req, res) => {
    try {
        const pratos = await Pratomodels.create({
            nome: req.body.nome,
            preço: req.body.preço,
            descrição: req.body.descrição,
            info: req.body.info,
            imagem: req.body


        })
        return res.status(200).send('Prato Adicionado')


    } catch (error) {
        if (error.code == 11000) {
            return res.status(400).send('Prato ja existe')

        }

        return res.status(500).send(error)
    }
})


router.put('/pratos/:id', async (req, res) => {
    const id = req.params.id
    const atualizado = await Pratomodels.findOneAndUpdate({ _id: id }, req.body, { upsert: false, new: true, })
})


router.delete('/pratos/:id', async (req, res) => {
    const id = req.params.id;
    await Pratomodels.findByIdAndDelete({ _id: id })
    return res.status(200).send('Prato Excluido')
})




module.exports = router