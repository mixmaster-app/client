import Server from "@entity/launcher/server";
import { APP_CONFIG } from "@env/environment";

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
