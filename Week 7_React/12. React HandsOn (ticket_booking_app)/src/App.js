import React, { useState } from 'react';
import './App.css';

function GuestPage() {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>You can view flight details but need to login to book tickets.</p>
    </div>
  );
}

function UserPage(props) {
  return (
    <div>
      <h2>Welcome, {props.name}!</h2>
      <p>You can now book your flight tickets.</p>
    </div>
  );
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserPage name={props.name} />;
  }
  return <GuestPage />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>Logout</button>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userName = "User";

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <LogoutButton onClick={() => setIsLoggedIn(false)} />
      ) : (
        <LoginButton onClick={() => setIsLoggedIn(true)} />
      )}
      <Greeting isLoggedIn={isLoggedIn} name={userName} />
    </div>
  );
}

export default App;
