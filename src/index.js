const { request, response } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Rutas
app.use('/api/people', require('./routes/people')); //Personas
app.use('/api/beer', require('./routes/beer')); //Cerveza

//Corremos el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});