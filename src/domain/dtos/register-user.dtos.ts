// Dtos: Objeto de transferencia de datos

import { Validator } from "../../config/validators";

interface UserDto {
    [key: string]: any;
}

export class RegisterUserDto {

    private constructor(
        public name: string,
        public email: string,
        public password: string
    ) { }


    static create(object: UserDto): [string?, RegisterUserDto?] {

        //Definir las reglas del objeto
        const { name, email, password } = object

        // === Inicio de las validaciones ===
        if (!name) return ['nombre es requerido', undefined]

        if (!email) return ['correo electrónico es requerido', undefined]

        if (!Validator.email.test(email)) return ['correo electrónico inválido', undefined]

        if (!password) return ['contraseña es requerida', undefined]

        if (password.length < 8) return ['contraseña debe tener al menos 8 caracteres', undefined]

        if (!Validator.password.test(password)) return ['contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número', undefined]

        // === Fin de las validaciones ===

        // === Si todo sale bien, retornamos el objeto ===
        return [undefined, new RegisterUserDto(name, email, password)]
    }

}
