import { Jwt } from '../../../config/jwt';
import { CustomError, LoginUserDto } from '../../index.domain';
import { AuthRepository } from '../../repositories/auth.domain.repository';

interface LoginUserUseCase {
    execute(loginUserDto: LoginUserDto): Promise<any>
}

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

export class LoginUserUseCaseImplementation implements LoginUserUseCase {
    //Inyectar dependencias
    constructor(private readonly authRepository: AuthRepository, private readonly sign: SignToken = Jwt.sing) { }

    async execute(loginUserDto: LoginUserDto): Promise<UserToken> {

        const user = await this.authRepository.login(loginUserDto)

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
