import { createAction } from '@reduxjs/toolkit';

const changeFromCurrency = createAction('exchange/changeFromCurrency');
const changeFromValue = createAction('exchange/changeFromValue');

const changeToCurrency = createAction('exchange/changeToCurrency');
const changeToValue = createAction('exchange/changeToValue');

export { changeFromCurrency, changeFromValue, changeToCurrency, changeToValue };
