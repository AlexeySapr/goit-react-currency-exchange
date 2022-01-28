// import resp from '../data/response.json';
// // console.log('resp: ', resp);

// let currencyRate = {};
// resp.forEach(element => {
//   // console.log('element: ', element);
//   currencyRate[element.CurrencyCodeL] = element.Amount;
// });

// export { currencyRate };

// import nowDate from 'services/getNowDate';

// const getCurrencyRate = async () => {
//   try {
//     const response = await fetch(
//       `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${nowDate}&json`,
//     );
//     const data = await response.json();
//     console.log('response: ', data);
//     return data;
//   } catch (error) {
//     // throw error.response.data.status_message;
//     console.log('error: ', error);
//   }
// };

// export const currencyAxiosRate = getCurrencyRate();

export const currencyRate = {
  EUR: 1,
  USD: 1.1228,
  UAH: 32,
  RUB: 85.3333,
};
