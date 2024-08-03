import {Schema, model} from 'mongoose'

export const esquemaProductosOXXO = new Schema({ 
    Marca:{
        type: String
    },
    Codigobarras:{
        type: String
    }
 })
 

 export const ModeloProductosOXXO = new model ('status', esquemaProductosOXXO)