
// import './App.css';
import React, { createContext, useContext, useState } from 'react';
import MainRouter from './MainRouter';

const AppContext = createContext();

function AppProvider({ children }) {
  const [email, setEmail] = useState("");
  // You can define functions to modify globalState here

  return (
    <AppContext.Provider value={{ email, setEmail }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

function App() {

  return (
    <AppProvider>
      <div className="App">
        <MainRouter/>
      </div>
    </AppProvider>
    
  );
}


export { App, useAppContext };
