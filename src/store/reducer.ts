type Reducer = {
  isNavOpen: boolean;
};

export const initialState: Reducer = {
  isNavOpen: false,
};

export const types = {
  TOGGLE_NAV: "TOGGLE_NAV",
};

export const reducer = (
  state: Reducer,
  { type, payload }: { payload: boolean; type: string }
): Reducer => {
  switch (type) {
    case types.TOGGLE_NAV:
      return { ...state, isNavOpen: payload };

    default:
      throw new Error();
  }
};
