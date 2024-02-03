// Entidad de usuario

export class UserEntity {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public roles: string[],
        public img?: string
    ) {

    }

}
