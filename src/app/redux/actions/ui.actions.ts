import { createAction, props } from "@ngrx/store";

export const onResizeScreen = createAction(
  '[UI] onResizeScreen',
  props<{ screenWidth: number }>()
);

export const onToggle = createAction(
  '[UI] onToggle'
);


