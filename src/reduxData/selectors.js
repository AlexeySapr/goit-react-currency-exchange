const getСhangingCurrency = state => state.currencyExchange.changingCurrency;
const getСhangingValue = state => state.currencyExchange.changingValue;

const getGetingCurrency = state => state.currencyExchange.getingCurrency;
const getGetingValue = state => state.currencyExchange.getingValue;

const getCurrencyRate = state => state.currencyExchange.currencyRate;

export {
  getСhangingCurrency,
  getСhangingValue,
  getGetingCurrency,
  getGetingValue,
  getCurrencyRate,
};
