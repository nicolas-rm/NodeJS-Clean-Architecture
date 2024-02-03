// UserMapper

import { CustomError, UserEntity } from "../../domain/index.domain"

interface UserMapperKeys {
    [key: string]: any
}

export class UserMapper {

    constructor() { }

    // map: Mapea los datos de la base de datos a nuestra entidad
    static userEntityToModel(userEntity: UserMapperKeys): UserEntity {

        const { id, _id, name, email, password, roles } = userEntity

        // Si existe el id o _id, entonces es un usuario de la base de datos
        if(!id || !_id) throw CustomError.badRequest('No se puede crear una entidad de usuario id o _id incorrecto')

        // Name
        if(!name) throw CustomError.badRequest('El nombre es incorrecto')

        // Email
        if(!email) throw CustomError.badRequest('El email es incorrecto')

        // Password
        if(!password) throw CustomError.badRequest('La contraseña es incorrecta')

        // Roles
        if(!roles) throw CustomError.badRequest('Los roles son incorrectos')

        return new UserEntity(
            id || _id,
            name,
            email,
            password,
            roles
        )
    }

}
