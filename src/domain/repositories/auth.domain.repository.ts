
import { RegisterUserDto, UserEntity } from "../index.domain";
import { LoginUserDto } from '../dtos/login-user.dtos';

export abstract class AuthRepository {

    abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>

    //DTO: Data Transfer Object, son objetos que se utilizan para transferir datos entre diferentes procesos: Validaciones, Persistencia, etc.
    abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>

}
