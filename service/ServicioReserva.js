import {modeloReserva}from "../models/modeloReserva.js"

export class ServicioReserva {
    constructor(){}
        async registrar (datosReserva){
            let reservaNueva=new modeloReserva(datosReserva)
            return await reservaNueva.save()
        }
       async buscarTodas(){
            let habitaciones = await modeloReserva.find()
            return habitaciones
        }
       async buscarPorId(idReserva){
            let habitacion = await modeloReserva.findById(idReserva)
            return habitacion
        }
        
        async editar(idReserva,datosReserva){
              return await modeloReserva.findByIdAndUpdate(idReserva,datosReserva)
}
        async eliminar (idReserva,datosReserva){
             return await modeloReserva.findByIdAndDelete(idReserva,datosReserva)
}

}