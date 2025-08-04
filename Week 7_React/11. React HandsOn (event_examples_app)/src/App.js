import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('Euro');
  const handleIncrement = () => {
    setCount(count + 1);
    sayHello();
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = () => {
    alert("Welcome");
  };

  const handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = parseFloat(amount) * 80;
    alert(`Converting to ${currency} Amount is ${result}`);
  };

  return (
    <div className="App">
      <p>{count}</p>

      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={sayWelcome}>Say welcome</button>
      <br />
      <button onClick={handleSyntheticEvent}>Click On me</button>

      <br /><br />

      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>

      <form onSubmit={handleSubmit}>
        <label>Amount:</label><br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /><br />
        <label>Currency:</label><br />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option>Euro</option>
        </select><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;