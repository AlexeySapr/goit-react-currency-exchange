import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyRateApi = createApi({
  reducerPath: 'currencyRate',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bank.gov.ua/NBUStatService/v1/statdirectory',
  }),

  endpoints: builder => ({
    getCurrencyRate: builder.query({
      query: date => `exchange?date=${date}&json`,
    }),
  }),
});

export const { useGetCurrencyRateQuery } = currencyRateApi;
