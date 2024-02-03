import { ConnectOptions } from "mongoose";
import { envs } from "./envs";

interface MongoConfig extends ConnectOptions{
    url: string;
}

export const mongoConfig: MongoConfig = {
    url: envs.MONGO_INITDB_URL,
    dbName: envs.MONGO_INITDB_DATABASE,
    user: envs.MONGO_INITDB_ROOT_USERNAME,
    pass: envs.MONGO_INITDB_ROOT_PASSWORD
}
