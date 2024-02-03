// Clase authController

import { Request, Response } from "express"
import { AuthRepository, CustomError, LoginUserDto, LoginUserUseCaseImplementation, RegisterUserDto, RegisterUserUseCaseImplementation } from "../../domain/index.domain"
import { Jwt } from "../../config/jwt"
import { UserModel } from "../../db/mongodb/index.db"

export class AuthController {

    // Inyectar dependencias
    constructor(private readonly authRepository: AuthRepository) {

    }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }

        console.log(error) // Agregar Winston o similar
        return res.status(500).json({ error: 'Error interno del servidor' })
    }

    // Registrar usuario
    registerUser = async (req: Request, res: Response) => {
        try {
            // Validar todos los campos
            const [error, registerUserDto] = RegisterUserDto.create(req.body);

            // Si hay un error
            if (error) return res.status(400).json({ error });

            // Registrar usuario
            const user = await (new RegisterUserUseCaseImplementation(this.authRepository).execute(registerUserDto!));

            // Si no hay error
            res.status(201).json(user);


        } catch (error) {
            this.handleError(error, res);
        }
    }


    // Login de usuario
    loginUser = async (req: Request, res: Response) => {
        try {

            // Validar todos los campos
            const [error, loginUserDto] = LoginUserDto.login(req.body);

            // Si hay un error
            if (error) return res.status(400).json({ error });

            // Login
            const user = await (new LoginUserUseCaseImplementation(this.authRepository, Jwt.sing).execute(loginUserDto!));

            // Si no hay error
            res.status(200).json(user);
        } catch (error) {

            this.handleError(error, res);
        }
    }

    // Obtener usuarios
    getUsers = async (req: Request, res: Response) => {
        try {
            const users = await UserModel.find();

            //si hay usuarios
            res.status(200).json({ user: req.body.user });
        } catch (error) {
            this.handleError(error, res);
        }
    }

}
