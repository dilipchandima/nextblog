export interface Reducer {
  isNavOpen: boolean;
  isDarkMode: boolean;
}

export const initialState: Reducer = {
  isNavOpen: false,
  isDarkMode: false,
};

export const types = {
  TOGGLE_NAV: "TOGGLE_NAV",
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
};

export const reducer = (
  state: Reducer,
  { type, payload }: { payload?: any; type: string }
): Reducer => {
  switch (type) {
    case types.TOGGLE_NAV:
      return { ...state, isNavOpen: !state.isNavOpen };
    case types.TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };

    default:
      throw new Error();
  }
};
