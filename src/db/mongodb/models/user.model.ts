// Modelo de datos para la colección de usuarios
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        unique: [true, 'El email ya existe'],
        required: [true, 'El email es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,

    },
    roles: {
        type: [String],
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE'],
        default: ['USER_ROLE']
    }
})

export const UserModel = mongoose.model('User', userSchema);
