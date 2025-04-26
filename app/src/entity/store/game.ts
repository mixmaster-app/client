export interface IGame {
    exeFullPath: string | undefined;
}

export class Game implements IGame {
    
    exeFullPath: string | undefined;

    constructor() {
        this.exeFullPath = undefined;
    }

    getExeFullPath() { return this.exeFullPath; }
    setExeFullPath(path: string | undefined) : Game {
        this.exeFullPath = path;
        return this;
    }

}
