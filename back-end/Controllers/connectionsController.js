const express = require('express');
const connections = express.Router({
    mergeParams: true
});

// const { checkFirebaseToken } = require("../middleware/auth");
const {getAllConnections, getOneConnection} = require('../Queries/Connections')

connections.get('/', async(req, res) => {
    try {
        const connections = await getAllConnections();
        res.json(connections)
    } catch (error) {
        console.log(error)
        res.status(404).send(`Message: ${error}`)
    }
});

connections.get(`/:id`, async(req, res) => {
    const {id} = req.params
    try {
        const oneConnection = await getOneConnection(id)
        res.json(oneConnection)
    } catch (error) {
        return error;
    }
})
module.exports = connections