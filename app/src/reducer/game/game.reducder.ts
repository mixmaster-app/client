import { Game } from "@entity/store/game";
import { createReducer, on } from "@ngrx/store";
import { GameActions } from "./game.action";

export const defaultState: Game = new Game();

export const gameReducer = createReducer(
    defaultState,
    on(GameActions.setPath, (_state, { path }) => {
        let game = new Game();
        game.setExeFullPath(path);
        return game;
    })
);
