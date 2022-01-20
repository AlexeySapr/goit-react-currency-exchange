import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const currency = createReducer('UAH', {
  [actions.changeFromCurrency]: (_, { payload }) => payload,
});

const value = createReducer(0, {
  [actions.changeFromValue]: (_, { payload }) => payload,
});

const changingForm = combineReducers({ currency, value });
// const toForm = createReducer([], {
//   [actions.addContact]: (state, { payload }) => {
//     return [...state, payload];
//   },
//   [actions.delContact]: (state, { payload }) => {
//     return state.filter(contact => contact.id !== payload);
//   },
// });

// const filter = createReducer('', {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

export default combineReducers({
  changingForm,
  //   toForm,
});
