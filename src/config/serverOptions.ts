import { AppRoutes } from "../presentation/app.routes";

// Importamos las variables de entorno
import { envs } from "./index.config";

// Configuraciones del servidor
export const serverOptions = {
    port: envs.PORT,
    routes: AppRoutes.routes
}
