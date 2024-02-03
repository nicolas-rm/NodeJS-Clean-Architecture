import { Jwt } from '../../../config/jwt';
import { RegisterUserDto } from '../../dtos/register-user.dtos';
import { CustomError } from '../../index.domain';
import { AuthRepository } from '../../repositories/auth.domain.repository';

// Esta interfaz es para el caso de uso de registro de usuario
interface RegisterUserUseCase {
    execute(registerUserDto: RegisterUserDto): Promise<any>
}

// Token Usuario
interface UserToken {
    token: string
    user: {
        id: number,
        email: string,
        name: string
    }
}

// Tipo Token
type SignToken = (payload: Object, duration?: string) => Promise<string | null>

export class RegisterUserUseCaseImplementation implements RegisterUserUseCase {

    //Inyectar dependencias
    constructor(private readonly authRepository: AuthRepository, private readonly sign: SignToken = Jwt.sing) { }

    // Aquí se inyecta el repositorio de usuarios
    async execute(registerUserDto: RegisterUserDto): Promise<UserToken> {

        // Crear usuario
        const user = await this.authRepository.register(registerUserDto)

        // Token
        const token = await this.sign({ id: user.id })

        if (!token) {
            // Si no se genera el token, lanzar error
            throw CustomError.internalServerError('Error al generar token')
        }

        // Retornar token y usuario
        return {
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        }

    }

}
