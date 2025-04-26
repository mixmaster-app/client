import { Game } from "@entity/store/game";
import { createFeatureSelector, createSelector } from "@ngrx/store";

// Selector of the whole game object
export const getGameConfiguration = createFeatureSelector<Game>('Game');

// Selector of some part of the game object
export const getGamePath = createSelector(
    getGameConfiguration,
    (game) => {
        return game.getPath();
    }
);
