const getСhangingCurrency = state =>
  state.currencyExchange.changingForm.currency;
const getСhangingValue = state => state.currencyExchange.changingForm.value;

export { getСhangingCurrency, getСhangingValue };
