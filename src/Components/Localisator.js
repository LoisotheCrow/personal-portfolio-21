import { useCallback, memo, useContext } from 'react';
import { actions } from '../state/localisation';
import localisations from '../constants/localisations';
import { localeContext } from './LocaleContext';

export default memo(({ dispatch, localeState }) => {
  const localeAction = useCallback(
    (locale) => dispatch(actions.setLocale(locale)),
    [dispatch],
  );
  const { localeId } = localeState;
  const locale = useContext(localeContext);

  const switchLocale = () => {
    const {
      en: { id: enId },
      ru: { id: ruId },
    } = localisations;
    if (localeId === enId) {
      localeAction(ruId);
    } else {
      localeAction(enId);
    }
  };

  return (
    <div>
      <button onClick={switchLocale}>{locale.buttons.changeLocale}</button>
    </div>
  );
});
