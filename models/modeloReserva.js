import mongoose from 'mongoose'

const Schema = mongoose.Schema
const Reserva =new Schema({
    id:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    fechainicio:{
        type:Date,
        required:true
    },
    fechafinal:{
        type:Date,
        required:true
    },
    numeropersonas:{
        type:Number,
        required:true
    },
    numeroniños:{
        type:Number,
        required:true
    },
    numeroadulto:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
})
export const modeloReserva=mongoose.model('reserva',Reserva)