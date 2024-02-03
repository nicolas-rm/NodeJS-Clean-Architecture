import { NextFunction, Request, Response } from "express";
import { Jwt } from "../../config/jwt";
import { UserModel } from "../../db/mongodb/index.db";

export class AuthMiddleware {

    constructor() { }

    static async validateJwt(req: Request, res: Response, next: NextFunction) {

        // Validar si existe el token
        const autorization = req.header('Authorization')

        // Si no es proporcionado el token
        if (!autorization) return res.status(401).json({ error: 'Token no proporcionado' })

        // Si existe el token pero no es del tipo Bearer
        if (!autorization.startsWith('Bearer')) return res.status(401).json({ error: 'Token incorrecto' })

        // Si existe el token
        const token = autorization.split(' ').at(1) || ''

        try {

            const payload = await Jwt.verify<{ id: string }>(token)

            // Si el token no es valido
            if (!payload) return res.status(401).json({ error: 'Token no valido' })

            const user = await UserModel.findById(payload.id)

            // Si el usuario no existe
            if (!user) return res.status(401).json({ error: 'Usuario no encontrado' })


            // Agregamos el payload al body
            req.body.user = user

            console.log('\n' + '\x1b[33m%s\x1b[0m', `Validando JWT: \x1b[37mValido\x1b[0m`);
            next()
        } catch (error) {

            //console color rojo para error
            console.log('\n' + '\x1b[31m%s\x1b[0m', `Validando JWT: \x1b[37mError\x1b[0m`);
            console.log(error)

            // 500: Error interno del servidor
            return res.status(500).json({ error: 'Error interno del servidor' })
        }
    }
}
