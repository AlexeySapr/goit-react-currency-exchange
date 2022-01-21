import { createAction } from '@reduxjs/toolkit';

const changeFromCurrency = createAction('exchange/changeFromCurrency');
const changeFromValue = createAction('exchange/changeFromValue');

const changeToCurrency = createAction('exchange/changeToCurrency');
const changeToValue = createAction('exchange/changeToValue');

const changeCurrency = createAction('exchange/changeCurrency');

export {
  changeFromCurrency,
  changeFromValue,
  changeToCurrency,
  changeToValue,
  changeCurrency,
};
