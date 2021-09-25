const db = require('../db/dbConfig');

const getAllConnections = async () => {
    try {
        const allConnections = await db.any('SELECT * FROM connections');
        return allConnections
    } catch (error) {
        console.log(error)
    }
}
const getOneConnection = async (id) => {
    try {
        const getOneConnection = await  db.one('SELECT * FROM connections WHERE id=$1', id)
        return getOneConnection
    } catch (error) {
     console.log(error)   
    }
}
module.exports = {
    getAllConnections,
    getOneConnection
}