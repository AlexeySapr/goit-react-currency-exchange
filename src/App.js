import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrencyRate } from './reduxData/operations';

import './App.css';
import AppHeader from './components/appHeader/AppHeader';
import HomePage from './views/HomePage';
import SuccessPage from './views/SuccessPage';

const App = () => {
  const disparch = useDispatch();
  useEffect(() => {
    disparch(fetchCurrencyRate());
  }, [disparch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppHeader title={'Currency exchange'} />}>
          <Route index element={<HomePage />} />
          <Route path="success" element={<SuccessPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
