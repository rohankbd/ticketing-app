import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import NewTicketPage from './pages/NewTicketPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/landing"
          element={
            <LandingPage username="Sam" />}
        />
        <Route path="/new-ticket" element={<NewTicketPage />} />
      </Routes>
    </Router>
  );
};

export default App;
