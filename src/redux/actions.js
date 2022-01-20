import { createAction } from '@reduxjs/toolkit';

const changeFromCurrency = createAction('exchange/changeFromCurrency');
const changeFromValue = createAction('exchange/changeFromValue');

export { changeFromCurrency, changeFromValue };
