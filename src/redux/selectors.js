const getСhangingCurrency = state =>
  state.currencyExchange.changingForm.currency;
const getСhangingValue = state => state.currencyExchange.changingForm.value;

const getGetingCurrency = state => state.currencyExchange.getingForm.currency;
const getGetingValue = state => state.currencyExchange.getingForm.value;

export {
  getСhangingCurrency,
  getСhangingValue,
  getGetingCurrency,
  getGetingValue,
};
