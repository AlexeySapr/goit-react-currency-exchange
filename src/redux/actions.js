import { createAction } from '@reduxjs/toolkit';

const changeFromCurrency = createAction('exchange/changeFromCurrency');
const changeFromValue = createAction('exchange/changeFromValue', value => {
  return {
    payload: Number(value),
  };
});

const changeToCurrency = createAction('exchange/changeToCurrency');
const changeToValue = createAction('exchange/changeToValue', value => {
  return {
    payload: Number(value),
  };
});

const changeCurrency = createAction('exchange/changeCurrency');

export {
  changeFromCurrency,
  changeFromValue,
  changeToCurrency,
  changeToValue,
  changeCurrency,
};
