export class CustomError extends Error {

    constructor(public readonly statusCode: number, public readonly message: string) {
        super(message)
    }

    // badRequest:  Es un error que se produce cuando el cliente envía una solicitud incorrecta al servidor.

    static badRequest(message: string) {
        return new CustomError(400, message)
    }

    // unauthorized: Es un error que se produce cuando el cliente no está autorizado para acceder a un recurso.

    static unauthorized(message: string) {
        return new CustomError(401, message)
    }

    // forbidden: Es un error que se produce cuando el cliente no tiene permiso para acceder a un recurso.

    static forbidden(message: string) {
        return new CustomError(403, message)
    }

    // notFound: Es un error que se produce cuando el cliente intenta acceder a un recurso que no existe.

    static notFound(message: string) {
        return new CustomError(404, message)
    }

    // internalServerError: Es un error que se produce cuando el servidor encuentra una situación inesperada.

    static internalServerError(message: string) {
        return new CustomError(500, message)
    }

    // badGateway: Es un error que se produce cuando el servidor recibe una respuesta no válida de otro servidor.

    static badGateway(message: string) {
        return new CustomError(502, message)
    }

    // serviceUnavailable: Es un error que se produce cuando el servidor no está disponible para procesar la solicitud.

    static serviceUnavailable(message: string) {
        return new CustomError(503, message)
    }

    // gatewayTimeout: Es un error que se produce cuando el servidor no recibe una respuesta a tiempo.

    static gatewayTimeout(message: string) {
        return new CustomError(504, message)
    }

    // conflict: Es un error que se produce cuando el cliente envía una solicitud que entra en conflicto con el estado actual del servidor.

    static conflict(message: string) {
        return new CustomError(409, message)
    }

    // preconditionFailed: Es un error que se produce cuando el cliente envía una solicitud que no se puede procesar debido a un estado previo incorrecto.

    static preconditionFailed(message: string) {
        return new CustomError(412, message)
    }

    // unsupportedMediaType: Es un error que se produce cuando el cliente envía una solicitud con un tipo de medio no admitido.

    static unsupportedMediaType(message: string) {
        return new CustomError(415, message)
    }

    // unprocessableEntity: Es un error que se produce cuando el cliente envía una solicitud que no se puede procesar debido a errores de sintaxis.

    static unprocessableEntity(message: string) {
        return new CustomError(422, message)
    }

    // tooManyRequests: Es un error que se produce cuando el cliente envía demasiadas solicitudes en un período de tiempo determinado.

    static tooManyRequests(message: string) {
        return new CustomError(429, message)
    }

    // methodNotAllowed: Es un error que se produce cuando el cliente envía una solicitud con un método que no está permitido.

    static methodNotAllowed(message: string) {
        return new CustomError(405, message)
    }

    // notAcceptable: Es un error que se produce cuando el cliente envía una solicitud con un tipo de medio que no es aceptable.

    static notAcceptable(message: string) {
        return new CustomError(406, message)
    }

    // lengthRequired: Es un error que se produce cuando el cliente envía una solicitud sin la cabecera de longitud.

    static lengthRequired(message: string) {
        return new CustomError(411, message)
    }

    // requestHeaderFieldsTooLarge: Es un error que se produce cuando el cliente envía una solicitud con encabezados de solicitud que son demasiado grandes.

    static requestHeaderFieldsTooLarge(message: string) {
        return new CustomError(431, message)
    }

    // requestEntityTooLarge: Es un error que se produce cuando el cliente envía una solicitud con un cuerpo de solicitud que es demasiado grande.

    static requestEntityTooLarge(message: string) {
        return new CustomError(413, message)
    }

    // uriTooLong: Es un error que se produce cuando el cliente envía una solicitud con una URL que es demasiado larga.

    static uriTooLong(message: string) {
        return new CustomError(414, message)
    }

    // requestTimeout: Es un error que se produce cuando el cliente no recibe una respuesta a tiempo.

    static requestTimeout(message: string) {
        return new CustomError(408, message)
    }

}
