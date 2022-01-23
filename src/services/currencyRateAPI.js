import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
// https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20220123&json
export const currencyRateApi = createApi({
  reducerPath: 'currencyRate',

  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://api.privatbank.ua',
    // baseUrl: 'https://bank.gov.ua/NBU_Exchange',
    baseUrl: 'https://bank.gov.ua/NBUStatService/v1/statdirectory',
  }),

  endpoints: builder => ({
    getCurrencyRate: builder.query({
      // query: date => `/p24api/exchange_rates?json&date=23.01.2022`,
      // query: date => `exchange?json&date=${date}`,
      query: date => `exchange?date=20220123&json`,
    }),
  }),
});

export const { useGetCurrencyRateQuery } = currencyRateApi;

// https://bank.gov.ua/NBU_Exchange/exchange?json&date=23012022
