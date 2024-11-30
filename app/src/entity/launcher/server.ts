class Server {
    private ip: string;
    private port: number;
    private launcherPath: string;

    constructor(ip: string, port: number, launcherPath: string) {
        this.ip = ip;
        this.port = port;
        this.launcherPath = launcherPath;
    }

    public getIp() {
        return this.ip;
    }

    public getPort() {
        return this.port;
    }

    public getLauncherPath() {
        return this.launcherPath;
    }
}

export default Server
