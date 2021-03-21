import { memo, createContext } from 'react';
import { defaultLocale } from '../constants/defaults';
import { tryGetLocaleById } from '../logic/locale';

export const localeContext = createContext(tryGetLocaleById(defaultLocale));

export default memo(({ children, locale }) => (
  <localeContext.Provider value={tryGetLocaleById(locale)}>
    {children}
  </localeContext.Provider>
));
