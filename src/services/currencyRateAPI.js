import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const currencyRateApi = createApi({
  reducerPath: 'currencyRate',

  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://bank.gov.ua/NBU_Exchange',
    baseUrl: 'https://api.privatbank.ua/p24api',
  }),

  endpoints: builder => ({
    getCurrencyRate: builder.query({
      //   query: date => `exchange?json&date=${date}`,
      query: date => `exchange_rates?json&date=23.01.2022`,
      //   query: date => ({
      //     url: `exchange?json`,
      //     params: date,
      //   }),
    }),
  }),
});

export const { useGetCurrencyRateQuery } = currencyRateApi;

// https://bank.gov.ua/NBU_Exchange/exchange?json&date=23012022
