import { defaultLocale } from '../constants/defaults';

export const actionTypes = {
  setLocale: 'localisation.setLocale',
};

export const actions = {
  setLocale: (value) => ({
    type: actionTypes.setLocale,
    data: { localeId: value },
  }),
};

export const reducer = (state, { type, data }) => {
  const { localeId } = data;

  switch (type) {
    case actionTypes.setLocale: {
      return { localeId };
    }
    default: {
      return state;
    }
  }
};

export const defaultState = {
  localeId: defaultLocale,
};
