require('dotenv').config()
const express = require('express') //importar el paquete express
const app = express()
const port = 2222  //Definir el puerto

//servidor contenido estatico
//Establecer el directorio donde se encuentran los archivos html
app.use(express.static('public'));



app.get('/',(req, res)=>{
    res.send('Hola Mundo')
})

app.get('/registrarPedido',(req,res)=>{
    res.sendFile(__dirname + '/public/views/registrarPedido.html')

})

app.get('/Contacto', (req, res)=>{
    res.send('Contacto')

})


app.get('*', (req, res)=>{
    //res.send('Pagina no encontrada)
    res.sendFile(__dirname + '/Public/404.html');  //llamar a la pagina

})

app.get('*',(req,res)=>{
    res.send('Pagina no encotrada')
})

app.listen(port,() =>{
    console.log(`Escuchando por el puerto ${port}`)
})

