import { Game } from "@entity/store/game";
import { createReducer, on } from "@ngrx/store";
import { GameActions } from "./game.action";

export const defaultState: Game = new Game();

export const gameReducer = createReducer(
    defaultState,
    // Handle the setPath action
    on(GameActions.setPath, (_state, { path }) => {
        let game = new Game();
        game.setPath(path);
        return game;
    })
);
