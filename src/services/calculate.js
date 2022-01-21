const currencyRate = {
  EUR: 1,
  USD: 1.1228,
  UAH: 32,
  RUB: 85.3333,
};

export const calculate = (changingCur, getingCur, value) => {
  const newValue =
    (currencyRate[getingCur] / currencyRate[changingCur]) * value;
  return Math.round(newValue * 100) / 100;
};
