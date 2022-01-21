import { combineReducers } from '@reduxjs/toolkit';
import { changingForm } from './changingReduser';
import { getingForm } from './getingReduser';

export default combineReducers({
  changingForm,
  getingForm,
});
