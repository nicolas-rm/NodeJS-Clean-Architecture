import { AuthDataSource, AuthRepository, RegisterUserDto, UserEntity } from "../../domain/index.domain";


export class AuthRepositoryImplementation implements AuthRepository {

    constructor(private readonly authDataSource: AuthDataSource) {
    }

    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDataSource.register(registerUserDto)
    }

}
