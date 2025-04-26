import Server from "@entity/launcher/server";
import { APP_CONFIG } from "@env/environment";

/**
 * Get default server based on the application configuration
 * @returns default server
 */
function createDefaultServer(): Server {
    let serverConfig = APP_CONFIG.default_server;

    return new Server(
        serverConfig.ip,
        serverConfig.port
    );
}

export {
    createDefaultServer
}
