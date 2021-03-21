import { defaultTheme } from '../constants/defaults';

export const actionTypes = {
  setTheme: 'theme.setTheme',
};

export const actions = {
  setLocale: (value) => ({
    type: actionTypes.setTheme,
    data: { themeId: value },
  }),
};

export const reducer = (state, { type, data }) => {
  const { themeId } = data;

  switch (type) {
    case actionTypes.setTheme: {
      return { themeId };
    }
    default: {
      return state;
    }
  }
};

export const defaultState = {
  themeId: defaultTheme,
};
