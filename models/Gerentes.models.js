import {Schema, model} from 'mongoose'

export const esquemaGerentes= new Schema({ 
    name:{
        type: String
    },
    cantidad:{
        type: Number
    }
 })
 

 export const ModeloGerentes = new model ('productos', esquemaGerentes)