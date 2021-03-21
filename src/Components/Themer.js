import { memo, useCallback, useContext } from 'react';
import { actions } from '../state/theme';
import themes from '../constants/themes';
import { localeContext } from './LocaleContext';

export default memo(({ dispatch, themeState }) => {
  const themeAction = useCallback(
    (locale) => dispatch(actions.setLocale(locale)),
    [dispatch],
  );
  const { themeId } = themeState;
  const locale = useContext(localeContext);

  const switchTheme = () => {
    const {
      dark: { id: darkId },
      light: { id: lightId },
    } = themes;
    if (themeId === darkId) {
      themeAction(lightId);
    } else {
      themeAction(darkId);
    }
  };

  return (
    <div>
      <button onClick={switchTheme}>{locale.buttons.switchTheme}</button>
    </div>
  );
});
