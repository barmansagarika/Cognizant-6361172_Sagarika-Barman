import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './Trainerslist';
import TrainerDetail from './TrainerDetails';
import trainersData from './TrainersMock';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderBottom: '2px solid #ddd',
          textAlign: 'center'
        }}>
          <h1 style={{
            margin: '0 0 15px 0',
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#333'
          }}>
            My Academy Trainers App
          </h1>
          <nav>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <Link 
                to="/" 
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  fontSize: '16px'
                }}
                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
              >
                Home
              </Link>
              <span style={{ color: '#333' }}>|</span>
              <Link 
                to="/trainers" 
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  fontSize: '16px'
                }}
                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
              >
                Show Trainers
              </Link>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={trainersData} />} />
          <Route path="/trainer/:id" element={<TrainerDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;