import express from 'express'
import {ControladorHabitaciones} from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controllers/ControladorReserva.js'

let controladorHabitacion=new ControladorHabitaciones()

let controladorreserva=new ControladorReservas()

//VOY A SEPARAR Y PERSONALIZAR LAS RUTAS DE CADA SERVICIO
//DEL API REST
export let rutas=express.Router()

rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitacion.buscandoHabitacion)
rutas.post('/registrarhabitacion',controladorHabitacion.registrandoHabitacion)
rutas.put('/editarhabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)
rutas.delete('/eliminarhabitacion/:idhabitacion',controladorHabitacion.eliminarHabitacion)


rutas.get('/buscarreservas',controladorreserva.buscandoReservas)
rutas.get('/buscarreserva/:idhabitacion',controladorreserva.buscandoReserva)
rutas.post('/registrarreserva',controladorreserva.registrandoReserva)
rutas.put('/editarreserva/:idhabitacion',controladorreserva.editandoReserva)
rutas.delete('/eliminarreserva/:idhabitacion',controladorreserva.eliminarReserva)
