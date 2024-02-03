import mongoose, { ConnectOptions } from "mongoose";

interface MongoConfig extends ConnectOptions {
    url: string;
}

export class MongoDb {

    static async connect(mongoConfig: MongoConfig) {

        const { dbName, url, user, pass } = mongoConfig;

        try {
            const connect = await mongoose.connect(url, {
                dbName,
                user,
                pass,
            })
            // Console log color verde con  el nombre de la base de datos en color blanco
            console.log('\n'+'\x1b[32m%s\x1b[0m', `Database Conectada: \x1b[37m${dbName}\x1b[0m`);

        } catch (error) {
            // Mensaje en color rojo con blanco
            console.log('\n'+'\x1b[31m%s\x1b[0m', `Error connecting to ${dbName} database`);
            throw error
        }
    }
}
