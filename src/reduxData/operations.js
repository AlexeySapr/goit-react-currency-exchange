import { createAsyncThunk } from '@reduxjs/toolkit';
import nowDate from 'services/getNowDate';

// const formatCurrency = curArray => {
//   const result = { UAH: 1 };
//   curArray.forEach(element => {
//     const curValue = Math.round((1 / element.rate) * 10000000) / 10000000;
//     if (curValue !== 0) {
//       result[element.cc] = curValue;
//     }
//   });
//   return result;
// };

const formatCurrency = curArray => {
  return curArray.reduce(
    (resultObj, { cc, rate }) => {
      const curValue = Math.round((1 / rate) * 10000000) / 10000000;
      if (curValue !== 0) {
        resultObj[cc] = curValue;
      }
      return resultObj;
    },
    { UAH: 1 },
  );
};

export const fetchCurrencyRate = createAsyncThunk(
  'exchange/fetchCurrencyRate',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${nowDate}&json`,
      );
      const data = await response.json();
      console.log('data: ', data);

      const transformData = formatCurrency(data);

      return transformData;
    } catch (error) {
      return rejectWithValue(
        'Something went wrong :( The server is not responding',
      );
    }
  },
);
