const getСhangingCurrency = state => state.currencyExchange.changingCurrency;
const getСhangingValue = state => state.currencyExchange.changingValue;

const getGetingCurrency = state => state.currencyExchange.getingCurrency;
const getGetingValue = state => state.currencyExchange.getingValue;

const getCurrencyRate = state => state.currencyExchange.currencyRate;

const getIsLoading = state => state.currencyExchange.isLoading;
const getError = state => state.currencyExchange.error;

export {
  getСhangingCurrency,
  getСhangingValue,
  getGetingCurrency,
  getGetingValue,
  getCurrencyRate,
  getIsLoading,
  getError,
};
