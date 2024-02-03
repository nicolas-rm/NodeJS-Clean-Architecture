import { RegisterUserDto, UserEntity, LoginUserDto } from "../index.domain";

export abstract class AuthDataSource {

    // Metodo para iniciar sesion
    abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>

    //DTO: Data Transfer Object, son objetos que se utilizan para transferir datos entre diferentes procesos: Validaciones, Persistencia, etc.
    abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>

}
