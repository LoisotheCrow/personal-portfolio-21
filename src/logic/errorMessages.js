export default {
  localeWrongId: (id) => `Failed to use locale or id is wrong. id: ${id}`,
  typeWrong: (typeExpected, typeGot, place) => {
    const where = place ? ` in ${place}:` : ' :';
    return `Got wrong type${where} ${typeGot} instead of ${typeExpected}`;
  },
  themeWrongId: (id) => `Failed to use theme or id is wrong. id: ${id}`,
  themeFailedConstruct: (msg) => `Failed to construct a theme: ${msg}`,
};
