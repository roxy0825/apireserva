import {ServicioReserva} from "../service/ServicioReserva.js"

export class ControladorReservas{

    constructor(){}
    
   async registrandoReserva(peticion,respuesta){
        let objetoservicioReserva= new ServicioReserva()

        try{
            let datosreserva=peticion.body
            await objetoservicioReserva.registrar(datosreserva)
            respuesta.status(200).json({
                "mensaje":"exito agregando datos",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    async buscandoReserva(peticion,respuesta){
        let objetoservicioReserva=new ServicioReserva()
        try{
            let idReserva=peticion.params.idreserva
            console.log(idReserva)
            respuesta.status(200).json({
                "mensaje":"exito buscando reserva",
                "reserva": await objetoservicioReserva.buscarPorId(idReserva)
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
                
            })
        }
    }
    async buscandoReservas(peticion,respuesta){
        let objetoservicioReserva = new ServicioReserva()
        try{
            respuesta.status(200).json({
                "mensaje":"exito buscando reservas",
                "reservaciones": await objetoservicioReserva.buscarTodas()
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    async editandoReserva(peticion,respuesta){
        let idReserva=peticion.params.idReserva
        let datosReserva=peticion.body
        let objetoservicioReserva=new ServicioReserva()
        try{
            await objetoservicioReserva.editar(idReserva,datosReserva)
            respuesta.status(200).json({
                "mensaje":"exito editando habitacion",
            })

        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }
   async eliminarReserva(peticion,respuesta){
        let idReserva= peticion.params.idReserva
        let datosReserva=peticion.body
        let objetoservicioReserva=new ServicioReserva()
        try{
            await objetoservicioReserva.eliminar(idReserva,datosReserva)
            respuesta.status(204).json({
                "mensaje":"exito eliminando reserva",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }


 }