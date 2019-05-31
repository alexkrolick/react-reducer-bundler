import * as React from "react";

type ColorState = {
  isLoading: boolean;
  selectedColor: string;
};

type ColorActions =
  | { type: "NEW:START"; payload: void }
  | { type: "NEW:DONE"; payload: { selectedColor: string } };

export default {
  // the name becomes the reducer name in the resulting state
  name: "color",
  // the reducer function for synchronous actions
  reducer: (state: ColorState, action: ColorActions) => {
    switch (action.type) {
      case "NEW:START":
        return { ...state, isLoading: true };
      case "NEW:DONE":
        return {
          ...state,
          isLoading: false,
          selectedColor: action.payload.selectedColor
        };
    }
    return state;
  },
  // optional init method is ran after store is created and passed the
  // store object.
  init: store => {
    // action creators are bound and attached to store as methods
    store.doUpdateUser();

    // selectors are also "bound" and attached to store as methods
    store.selectActiveUsers();
  }
};
