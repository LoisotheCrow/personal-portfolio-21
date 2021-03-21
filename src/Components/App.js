import { useReducer } from 'react';
import {
  reducer as locReducer,
  defaultState as locDefaultState,
} from '../state/localisation';
import {
  reducer as themeReducer,
  defaultState as themeDefaultState,
} from '../state/theme';
import Localisator from './Localisator';
import Themer from './Themer';
import LocaleContext from './LocaleContext';
import ThemeContext from './ThemeContext';

export default () => {
  const [locState, locDispatch] = useReducer(locReducer, locDefaultState);
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeDefaultState,
  );
  const { localeId } = locState;
  const { themeId } = themeState;

  return (
    <ThemeContext theme={themeId}>
      <LocaleContext locale={localeId}>
        <Localisator dispatch={locDispatch} localeState={locState} />
        <Themer dispatch={themeDispatch} themeState={themeState} />
      </LocaleContext>
    </ThemeContext>
  );
};
