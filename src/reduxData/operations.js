import { createAsyncThunk } from '@reduxjs/toolkit';
import nowDate from 'services/getNowDate';

const formatCurrency = curArray => {
  const result = { UAH: 1 };
  curArray.forEach(element => {
    const curValue = Math.round((1 / element.rate) * 10000000) / 10000000;
    if (curValue !== 0) {
      result[element.cc] = curValue;
    }
  });
  return result;
};

export const fetchCurrencyRate = createAsyncThunk(
  'exchange/fetchCurrencyRate',
  async () => {
    const response = await fetch(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${nowDate}&json`,
    );
    const data = await response.json();
    const transformData = formatCurrency(data);
    return transformData;
  },
);
