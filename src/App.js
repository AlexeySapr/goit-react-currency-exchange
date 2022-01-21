import { Routes, Route } from 'react-router-dom';

import './App.css';
import AppHeader from './components/appHeader/AppHeader';
import HomePage from './views/HomePage';
import SuccessPage from './views/SuccessPage';

const App = () => {
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
