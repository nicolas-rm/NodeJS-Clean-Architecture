// Es la implementación de la interfaz de AuthDataSource de abstracción de la capa de infraestructura
// Se utiliza para implementar el patrón de inyección de dependencias

import { UserModel } from "../../db/mongodb/index.db";
import { AuthDataSource, CustomError, RegisterUserDto, UserEntity } from "../../domain/index.domain";
import { Bcrypt } from '../../config/bcrypt';
import { UserMapper } from "../index.infraestructure";

type HashSyncPassword = (password: string) => string
type CompareSyncPassword = (password: string, hash: string) => boolean

export class AuthDataSourceImplementation implements AuthDataSource {

    constructor(private readonly hashSyncPassword: HashSyncPassword = Bcrypt.hash, private readonly compareSyncPassword: CompareSyncPassword = Bcrypt.compare) {
    }

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {

        const { name, email, password } = registerUserDto

        try {

            //1.- Validar que el usuario no exista
            const exists = await UserModel.findOne({ email })
            if (exists) throw CustomError.badRequest('El usuario ya existe')

            //2.- Encriptar la contraseña
            const user = await (await UserModel.create({ name, email, password: this.hashSyncPassword(password) })).save()

            //3.- mapear la respuesta a nuestra entidad
            return UserMapper.userEntityToModel(user)


        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }

            throw CustomError.internalServerError('')
        }
    }



}
