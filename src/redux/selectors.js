const getСhangingCurrency = state =>
  state.currencyExchange.currency.changingCurrency;
const getСhangingValue = state => state.currencyExchange.value.changingValue;

const getGetingCurrency = state =>
  state.currencyExchange.currency.getingCurrency;
const getGetingValue = state => state.currencyExchange.value.getingValue;

export {
  getСhangingCurrency,
  getСhangingValue,
  getGetingCurrency,
  getGetingValue,
};
