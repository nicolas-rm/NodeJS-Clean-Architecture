// Dtos: Objeto de transferencia de datos

import { Validator } from "../../config/validators";

interface UserDto {
    [key: string]: any;
}

export class LoginUserDto {

    private constructor(public email: string, public password: string) {
    }


    // login DTO
    static login(object: UserDto): [string?, LoginUserDto?] {

        const { email, password } = object

        // === Inicio de las validaciones ===
        if (!email) return ['Correo es requerida', undefined]

        if (!password) return ['Contraseña es requerida', undefined]

        if (password.length < 8) return ['contraseña debe tener al menos 8 caracteres', undefined]

        if (!Validator.password.test(password)) return ['contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número', undefined]

        // === Fin de las validaciones ===

        return [undefined, new LoginUserDto(email, password)]

    }

}
