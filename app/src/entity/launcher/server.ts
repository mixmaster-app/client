class Server {
    private ip: string;
    private port: number;

    constructor(ip: string, port: number) {
        this.ip = ip;
        this.port = port;
    }

    public getIp() {
        return this.ip;
    }

    public getPort() {
        return this.port;
    }

}

export default Server
