import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { publicRoutes } from './components/Routes/Routes';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
