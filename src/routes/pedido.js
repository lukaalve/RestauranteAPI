const express = require('express')
const router = express.Router()

router.get('/pedidos', (req, res) => {

    return res.status(200).send(DB_Pedidos)
})


router.post('/pedidos', (req, res) => {
    DB_Pedidos.push(req.body)
    return res.status(200).send('Pedido Criado')



})


router.delete('/pedidos/:mesa', (req, res) => {
    const mesa = req.params.mesa;
    const index = DB_Pedidos.findIndex(pedido => pedido.mesa == mesa)
    if (index != -1) {

        DB_Pedidos.splice(index, 1)
        return res.status(200).send('Pedido deletado com sucesso')
    }

    return res.status(400).send('Pedido ja foi deletado')

})

module.exports = router