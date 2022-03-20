 const random = require('random')

const express = require('express');
const { json } = require('express/lib/response');
const Contenedor= require('./controllers/index')
const archivos= new Contenedor("./productos.txt")
const app =express();

app.get('/productos',  async (req,res)=>{
    let respuesta = await archivos.leer()
            res.send(respuesta) 
})

app.get('/productosRandom',  async (req,res)=>{
    let numeroR= random.int((min = 1), (max = 8))
    
    let respuesta = await archivos.leerPorId(numeroR)
            res.send(respuesta) 
})

const PORT=8080;
const server = app.listen(PORT,()=>{
    console.log("servidor funcionando en puerto",PORT )
})
server.on("error",error=>console.log(`error ${error}`))

