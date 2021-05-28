const express = require ("express"); // modulo de tercero - se invoca solo con el nombre
const app = express (); // funcion de alto nivel llamada express
const port = 3000

// req ->>> request (peticion)
// res ->>> response (respuesta)

app.get('/',(req,res)=> res.send('GGiroud Rata')) //ruta raiz localhost:3000

app.get('/contactos',(req,res)=> res.send('Página de contacto'))

app.get('/productos',(req,res)=> res.send('Listado de productos'))

app.listen(port,() => console.log("Servidor funcionando en el puerto "+ port )) // 3000 es el numero de puerto - seguido de un callback

