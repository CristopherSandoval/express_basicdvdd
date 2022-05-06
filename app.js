const express = require("express");

const app = express()
const port = 3000
//Aquí se les da un url por ejemplo el de abajo launchx.
app.get('/', (req, res) => {
    res.send('Holaa a todos omeu');
})
//Iniciamos la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
//Agregando una nueva ruta
//respondiendo texto
app.get('/launchx', (req, res) => {
    res.send('Estoy en launchx!');
})
//agregando una nueva ruta y regresando un objeto.
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})