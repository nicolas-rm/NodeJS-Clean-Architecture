// Validaciones

export class Validator {

    // Validador regex avanzado para email
    static get email(): RegExp {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    }

    // Validador regex avanzado para password
    // caracteres especiales, mayusculas, minusculas, numeros
    static get password(): RegExp {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    }

}
