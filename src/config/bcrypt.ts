import { compareSync, hashSync } from 'bcryptjs'

export class Bcrypt {

    // hashSync: Genera un hash de la contraseña
    static hash(password: string): string {
        return hashSync(password)
    }

    // compareSync: Compara la contraseña con el hash
    static compare(password: string, hash: string): boolean {
        return compareSync(password, hash)
    }

}
