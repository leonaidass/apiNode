// const random = require('random')

// const numeroR= ()=>random.int((min = 1), (max = 5))
// let numeronuevo=[]


// for (let index = 0; index < 5; index++) {
    
//          numeronuevo.push(numeroR())
       
    
// }
// console.log(numeronuevo)
const express = require('express')

const app =express();

app.get('/',(req,res)=>{
    const vari=["leo","juan","pedro"]
    res.send(vari)
})

const PORT=8080;
const server = app.listen(PORT,()=>{
    console.log("servidor funcionando en puerto",PORT )
})
server.on("error",error=>console.log(`error ${error}`))

