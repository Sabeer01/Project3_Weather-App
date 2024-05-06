import React from 'react';
import "./App.css";
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='app-container'>
        <h1 className="text-center fw-bold">Weather App</h1>
         <Weather/>
    </div>
  )
}

export default App