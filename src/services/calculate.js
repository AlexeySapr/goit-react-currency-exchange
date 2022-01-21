import { currencyRate } from './currencyRate';

export const calculate = (changingCur, getingCur, value) => {
  const newValue =
    (currencyRate[getingCur] / currencyRate[changingCur]) * value;
  return Math.round(newValue * 100) / 100;
};
