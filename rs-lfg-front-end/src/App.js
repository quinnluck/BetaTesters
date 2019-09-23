import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router className="App">
          <Route path="/" component={Home} />
        </Router>
      </header>
    </div>    
  );
}

export default App;
