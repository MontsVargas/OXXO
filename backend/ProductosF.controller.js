import { ModeloProductosF} from "../models/ProductosF.models.js";

export const test4 = () =>{
    console.log('funciona el controlador de ProductosF')
}

ModeloProductosF.create({
    Producto: "Fanta",
    Cuantos_faltan: 54
})