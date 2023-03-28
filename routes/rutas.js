import express from 'express'

//VOY A SEPARAR Y PERSONALIZAR LAS RUTAS DE CADA SERVICIO
//DEL API REST
export let rutas=express.Router()

rutas.get('/buscarhabitaciones', function (req, res) {
    res.send('estoy buscando todas las habitaciones')
})
rutas.get('/buscarhabitacion', function (req, res) {
    res.send('estoy buscando una habitacion')
})
rutas.post('/registrarhabitacion', function (req, res) {
    res.send('estoy registrando una habitacion')
})
rutas.put('/editarhabitacion', function (req, res) {
    res.send('estoy actualizando una habitacion')
})