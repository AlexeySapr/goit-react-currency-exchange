import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const changingForm = createReducer('UAH', {
  [actions.changeFromCurrency]: (_, { payload }) => payload,
});

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
