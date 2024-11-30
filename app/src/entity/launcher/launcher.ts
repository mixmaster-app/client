class Launcher {
    private path: string;
    private name: string;
    private fullScreen: boolean;

    constructor(path: string, name: string) {
        this.path = path;
        this.name = name;
        this.fullScreen = false;
    }

    getPath() {
        return this.path;
    }

    getName() {
        return this.name;
    }

    enableFullScreen() {
        this.fullScreen = true;
    }

    disableFullScreen() {
        this.fullScreen = false;
    }

    isFullScreen() {
        return this.fullScreen;
    }
}

export default Launcher
