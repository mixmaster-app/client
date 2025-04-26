export interface IGame {
    path: string | undefined;
}

/**
 * Store configuration about the game
 */
export class Game implements IGame {
    // Path to the game `.exe` file
    path: string | undefined = undefined;

    constructor() {}

    getPath() { return this.path; }
    setPath(path: string | undefined) : Game {
        this.path = path;
        return this;
    }

}
