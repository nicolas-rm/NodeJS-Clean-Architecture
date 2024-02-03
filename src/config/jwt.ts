// JWT

import { SignOptions, sign, verify } from 'jsonwebtoken';
import { envs } from './envs';

// SEED
const secret: string = envs.JWT_SECRET;

export class Jwt {


    constructor() {
    }

    static async sing(payload: Object, duration: string = '2h'): Promise<string | null> {

        return new Promise((resolve, reject) => {
            sign(payload, secret, { expiresIn: duration }, (err, token) => {

                if (err) return resolve(null)

                if (!token) return resolve(null)

                resolve(token); // Si no hay error, resolvemos la promesa
            })
        });
    }

    static async verify<T>(token: string): Promise<T | null> {

        return new Promise((resolve, reject) => {
            verify(token, secret, (err, decoded) => {

                if (err) return resolve(null)

                resolve(decoded as T); // Si no hay error, resolvemos la promesa
            })
        });
    }
}
