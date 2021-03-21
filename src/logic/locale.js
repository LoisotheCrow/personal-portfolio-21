import enLocale from '../constants/enLocale';
import ruLocale from '../constants/ruLocale';
import errorMessages from './errorMessages';

export const tryGetLocaleById = (id) => {
  switch (id) {
    case 'en': {
      return enLocale;
    }
    case 'ru': {
      return ruLocale;
    }
    default: {
      throw new Error(errorMessages.localeWrongId(id));
    }
  }
};
