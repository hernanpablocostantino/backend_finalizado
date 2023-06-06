const express = require('express')
 
const app = express()

const archivoBD = require('./conexion')

const rutausuario = require('./rutas/usuario')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (_req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...')
})

app.listen(5000, function(){
    console.log('El servidor NODE está corriendo correctamente')
})

module.exports = archivoBD;