require('dotenv').config()
const express = require('express')
const app=express()
const PORT =4000

app.get('/',(req,res)=>{

    res.send("Hello word")

})

app.get('/twitter',(req,res)=>{
    res.send('<h1>rohitjadhav</h1>')
})


app.listen(process.env.PORT,()=>{
    console.log('Hello rohit how can i help you',{PORT});
    
})