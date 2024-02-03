// Todas las rutas de autenticación

import { Router } from "express";
import { AuthController } from "./auth.controller";
import { AuthDataSourceImplementation, AuthRepositoryImplementation } from "../../infraestructure/index.infraestructure";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        // Implementacion: Base de datos
        const dataBase = new AuthDataSourceImplementation()

        // repository: Conexion e interacción con la base de datos
        const authRepository = new AuthRepositoryImplementation(dataBase)

        // Instanciar la clase 'AuthController
        const authController = new AuthController(authRepository)

        // Definir las rutas
        router.post('/login', authController.loginUser)
        router.post('/register', authController.registerUser)
        router.get('/', [AuthMiddleware.validateJwt] ,authController.getUsers)


        return router
    }

}
