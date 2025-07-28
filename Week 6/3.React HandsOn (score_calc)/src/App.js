import React from 'react';
import { CalculateScore } from './Components/CalculateScore';
import './App.css';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name={"Sagarika Barman"}
        School={"Radiant International School"}
        total={468}
        goal={5}
      />
    </div>
  );
}

export default App;