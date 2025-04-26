import { createActionGroup, props } from "@ngrx/store";

export const GameActions = createActionGroup({
    source: 'Game',
    events: {
        'Set Path': props<{ path: string }>()
    }
});
