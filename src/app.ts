// Importamos las configuraciones del servidor
import { serverOptions } from './config/index.config';
import { mongoConfig } from './config/mongoConfig';
import { MongoDb } from './db/mongodb/mongo-db';

import { Server } from './presentation/server';

// Ejecutamos la función main
(async () => await main())();

async function main() {
    try {

        //Conección a la base de datos
        await MongoDb.connect(mongoConfig);

        // Objetivo: Archivo principal de la aplicación, donde se configura el servidor
        const server = new Server(serverOptions)
        await server.start();
    } catch (error) {
        console.log(error);
    }
}
