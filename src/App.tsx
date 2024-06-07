import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Payment from './views/gmtpay/Payment';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Payment />} path="/:number" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
