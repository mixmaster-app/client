import { createActionGroup, props } from "@ngrx/store";

// Events about the game reducer
export const GameActions = createActionGroup({
    source: 'Game',
    events: {
        'Set Path': props<{ path: string }>()
    }
});
