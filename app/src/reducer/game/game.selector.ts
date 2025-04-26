import { Game } from "@entity/store/game";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getGameConfiguration = createFeatureSelector<Game>('Game');

export const getGameExePath = createSelector(
    getGameConfiguration,
    (game) => {
        console.log("hello world!");
        return game.getExeFullPath();
    }
);
