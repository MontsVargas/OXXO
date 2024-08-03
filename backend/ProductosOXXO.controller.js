import { ModeloProductosOXXO} from "../models/ProductosOXXO.models.js";

export const test3 = () =>{
    console.log('funciona el controlador de Productos')
}

ModeloProductosOXXO.create({
    Producto: "Coca Cola",
    Codigobarras: 54321
})