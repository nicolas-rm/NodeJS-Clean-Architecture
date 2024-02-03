// Configuraciones para los entornos de desarrollo y producción

import { config } from 'dotenv';
config();

// Obtenemos el valor de la variable de entorno
import { get } from 'env-var';

export const envs = {

    // PORT: Puerto del servidor NodeJS
    PORT: get('PORT').required().asPortNumber(),

    // Configuraciones para la base de datos
    MONGO_INITDB_DATABASE: get('MONGO_INITDB_DATABASE').required().asString(),
    MONGO_INITDB_ROOT_USERNAME: get('MONGO_INITDB_ROOT_USERNAME').required().asString(),
    MONGO_INITDB_ROOT_PASSWORD: get('MONGO_INITDB_ROOT_PASSWORD').required().asString(),
    MONGO_INITDB_URL: get('MONGO_INITDB_URL').required().asString(),

    // Configuraciones para JWT
    JWT_SECRET: get('JWT_SECRET').required().asString()
}
