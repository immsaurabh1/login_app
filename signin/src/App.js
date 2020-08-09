import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavComponent from './components/Layout/NavComponent'
import SignInComponent from './components/Route/SignInComponent'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent />
      </header>
      <div className="App-body">
        <SignInComponent />
      </div>
    </div>
  );
}

export default App;
