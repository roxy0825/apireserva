import {modeloReserva}from "../models/modeloReserva.js"

export class ServicioReserva {
    constructor(){}
        async registrar (datosReserva){
            let reservaNueva = new modeloReserva(datosReserva)
            return await reservaNueva.save();
        }
       async buscarTodas(){
            let buscandoReservas = await modeloReserva.find()
            return buscandoReservas
        }
       async buscarPorId(idReserva){
            let reservaId = await modeloReserva.findById(idReserva)
            return reservaId
        }
        
        async editar(idReserva,datosReserva){
              return await modeloReserva.findByIdAndUpdate(idReserva,datosReserva)
}
        async eliminar (idReserva){
             return await modeloReserva.findByIdAndDelete(idReserva)
}

}