
import { RegisterUserDto, UserEntity } from "../index.domain";

export abstract class AuthRepository {

    // abstract login()

    //DTO: Data Transfer Object, son objetos que se utilizan para transferir datos entre diferentes procesos: Validaciones, Persistencia, etc.
    abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>

}
