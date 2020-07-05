import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DisplayPage from './components/DisplayPage';
import CovidProvider from './context/globalState';

function App() {
  const screenConfig = useState(0);
  return (
    <CovidProvider>
      <div className="background">
      <Header screenConfig={screenConfig} />
      <DisplayPage currentScreen={screenConfig[0]} />
      </div>
    </CovidProvider>
  );
}

export default App;
