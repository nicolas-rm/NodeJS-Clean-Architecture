// Custom Success Response

export class CustomSuccess {

    constructor(public readonly statusCode: number, public readonly message: string) { }

    // ok: Es una respuesta exitosa que se produce cuando el cliente envía una solicitud correcta al servidor.

    static ok(message: string) {
        return new CustomSuccess(200, message)
    }

    // created: Es una respuesta exitosa que se produce cuando el cliente envía una solicitud correcta al servidor y se crea un nuevo recurso.

    static created(message: string) {
        return new CustomSuccess(201, message)
    }

    // accepted: Es una respuesta exitosa que se produce cuando el cliente envía una solicitud correcta al servidor, pero la solicitud aún no se ha procesado.

    static accepted(message: string) {
        return new CustomSuccess(202, message)
    }

    // noContent: Es una respuesta exitosa que se produce cuando el cliente envía una solicitud correcta al servidor, pero no hay contenido para devolver.

    static noContent(message: string) {
        return new CustomSuccess(204, message)
    }

    // nonAuthoritativeInformation: Es una respuesta exitosa que se produce cuando el cliente envía una solicitud correcta al servidor, pero el contenido de la respuesta no se ha validado.

    static nonAuthoritativeInformation(message: string) {
        return new CustomSuccess(203, message)
    }

    // resetContent: Es una respuesta exitosa que se produce cuando el cliente envía una solicitud correcta al servidor, pero el cliente debe restablecer la vista.

    static resetContent(message: string) {
        return new CustomSuccess(205, message)
    }

    // partialContent: Es una respuesta exitosa que se produce cuando el cliente envía una solicitud correcta al servidor, pero solo se devuelve una parte del contenido.

    static partialContent(message: string) {
        return new CustomSuccess(206, message)
    }

    // multiStatus: Es una respuesta exitosa que se produce cuando el cliente envía una solicitud correcta al servidor, pero hay más de un recurso disponible.

    static multiStatus(message: string) {
        return new CustomSuccess(207, message)
    }

    // alreadyReported: Es una respuesta exitosa que se produce cuando el cliente envía una solicitud correcta al servidor, pero el documento ha sido modificado.

    static alreadyReported(message: string) {
        return new CustomSuccess(208, message)
    }

    // imUsed: Es una respuesta exitosa que se produce cuando el cliente envía una solicitud correcta al servidor, pero el servidor ha completado la solicitud.

    static imUsed(message: string) {
        return new CustomSuccess(226, message)
    }

    // multipleChoices: Es una respuesta de redirección que se produce cuando el cliente envía una solicitud incorrecta al servidor.

    static multipleChoices(message: string) {
        return new CustomSuccess(300, message)
    }
}
