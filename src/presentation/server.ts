// Objetivo: Archivo principal de la aplicación, donde se configura el servidor
import express, { Application, Router } from 'express';

//Morgan
import morgan from 'morgan';

// Interfaz para las opciones del servidor
interface OptionsServer {
    port?: number;
    routes: Router;
}

export class Server {

    public readonly app: Application = express();
    private readonly PORT!: number
    private readonly routes: Router

    constructor(options: OptionsServer) {
        const { port, routes } = options;
        this.PORT = port || 3000;

        // Todas las rutas de la aplicación
        this.routes = routes
    }

    async start() {

        // ======== Middlewares ========

        // Morgan
        this.app.use(morgan('dev'));

        // Body parser
        this.app.use(express.json());

        //Extensión de urlencoded: x-www-form-urlencoded
        this.app.use(express.urlencoded({ extended: true }));

        // Rutas de la aplicación
        this.app.use(this.routes);


        // ======== Iniciar el servidor ========
        this.app.listen(this.PORT, () => {
            // Console log color verde con el puerto en color blanco
            console.log('\n'+'\x1b[32m%s\x1b[0m', `Servidor corriendo: \x1b[37m${this.PORT}\x1b[0m`);
        });
    }

}
