const express = require('express')
const cors = require('cors');
const path = require('path');
const { dbconnect } = require('../database/config');

require('dotenv').config();


class Server {

    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        
        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi app
        this.routes();

        // Poner a escuchar en un puerto
        this.listen();
    };

    async conectarDB() {
        await dbconnect();
    }

    middlewares() {
        // Usar cors
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json());
        // Servir contenido estatico, es lo que se ejecuta como el / busca el index.html
        this.app.use(express.static('public'));
    };

    routes() {
        const finalpath = path.join( __dirname, '..'); // Salgo de routers

        this.app.use('/api/usuarios', require('../routes/usuarios'));

        this.app.get('*', (req, res) => {
            res.sendFile( finalpath + "/public/404.html");
        });
    };

    listen() {

        this.app.listen(this.port, () => {
            console.log('Escuchando en http://localhost:', this.port);
        });
    }

}

module.exports = Server;