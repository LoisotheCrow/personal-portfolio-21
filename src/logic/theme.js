import lightTheme from '../constants/lightTheme';
import darkTheme from '../constants/darkTheme';
import commonTheme from '../constants/commonTheme';
import errorMessages from './errorMessages';

const tryGetThemeById = (id) => {
  switch (id) {
    case 'light': {
      return lightTheme;
    }
    case 'dark': {
      return darkTheme;
    }
    case 'common': {
      return commonTheme;
    }
    default: {
      throw new Error(errorMessages.themeWrongId(id));
    }
  }
};

export const tryConstructTheme = (id) => {
  try {
    const common = tryGetThemeById('common');
    const color = tryGetThemeById(id);
    return { ...common, ...color };
  } catch (e) {
    throw new Error(errorMessages.themeFailedConstruct(e.message));
  }
};
