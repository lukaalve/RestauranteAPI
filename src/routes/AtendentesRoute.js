const express = require('express')
const md5 = require('md5')
const router = express.Router()
const AtendenteModels = require('../models/AtendenteModels')

router.get('/atendentes', async (req, res) => {
    const atendente = await AtendenteModels.find({

    })

    return res.status(200).send(atendente)
})


router.post('/atendentes', async (req, res) => {
    try {
        const atendente = await AtendenteModels.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            email: req.body.email,
            telefone: req.body.telefone,
            senha: md5(req.body.senha)
        })



        return res.status(200).send('Atendente Criado')


    } catch (error) {
        if (error.code == 11000) {
            return res.status(400).send('Atendente ja Existe')

        } console.log(error)

        return res.status(500).send(error)
    }
})

router.get('atendente/cpf', async (req, res) => {

    const cpf = req.params.cpf
    const atendente = await AtendenteModels.find({ cpf: cpf })

})


router.put('/atendentes/:id', async (req, res) => {
    const id = req.params.id
    const atualizado = await AtendenteModels.findOneAndUpdate({ _id: id }, req.body, { upsert: false, new: true, })
})

router.delete('/atendentes/:id', async (req, res) => {
    const id = req.params.id;
    await AtendenteModels.findByIdAndDelete({ _id: id })
    return res.status(200).send('Atendente Excluido')
})




module.exports = router