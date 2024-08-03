import {Schema, model} from 'mongoose'

export const esquemaProductosF= new Schema({ 
    Producto:{
        type: String
    },
    Cuantos_faltan:{
        type: Number
    }
 })
 

 export const ModeloProductosF = new model ('productos F', esquemaProductosF)