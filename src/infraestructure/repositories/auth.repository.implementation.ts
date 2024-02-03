import { AuthDataSource, AuthRepository, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain/index.domain";


export class AuthRepositoryImplementation implements AuthRepository {

    constructor(private readonly authDataSource: AuthDataSource) {
    }

    // Metodo para iniciar sesion
    login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.authDataSource.login(loginUserDto)
    }

    // Metodo para registrar un usuario
    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDataSource.register(registerUserDto)
    }

}
