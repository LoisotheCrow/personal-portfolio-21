import { memo, createContext } from 'react';
import { defaultTheme } from '../constants/defaults';
import { tryConstructTheme } from '../logic/theme';

export const themeContext = createContext(tryConstructTheme(defaultTheme));

export default memo(({ children, theme }) => (
  <themeContext.Provider value={tryConstructTheme(theme)}>
    {children}
  </themeContext.Provider>
));
