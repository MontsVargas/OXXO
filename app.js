import mongoose from 'mongoose'; 
import express from 'express'; 
import cors from 'cors'; 
import dotenv from 'dotenv'; 
import { test } from './backend/Empleados.controller.js';
import { test2 } from './backend/Gerentes.controller.js';
import { test3 } from './backend/ProductosOXXO.controller.js';
import { test4 } from './backend/ProductosF.controller.js';


dotenv.config();
mongoose.connect(process.env.url) 
.then (()=> {
    console.log("Si funciona la base de datos")
})
.catch((error)=>{
    console.log ("No funciona la base de datos")
})
const app =express(); 
app.use (cors());

app.listen(4008,()=>{
    console.log ('Funciona mi servidor')
})

test ()
test2 ()
test3 ()
test4 ()