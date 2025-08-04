import React from 'react';
import officeImage from './office.jpg';

function App() {
  const heading = <h1>Office Space Rental</h1>;

  const office = {
    name: 'Tech Park Office',
    rent: 75000,
    address: 'MG Road, Bangalore'
  };

  const offices = [
    { name: 'Tech Park', rent: 75000, address: 'MG Road' },
    { name: 'Startup Hub', rent: 58000, address: 'BTM Layout' },
    { name: 'CoWorkZone', rent: 61000, address: 'Koramangala' },
    { name: 'Elite Office', rent: 45000, address: 'Indiranagar' },
  ];

  const containerStyle = {
    padding: '20px'
  };

  const imageStyle = {
    width: '400px',
    height: '200px',
    objectFit: 'cover'
  };

  let rentColor;
  if (office.rent < 60000) {
    rentColor = 'red';
  } else {
    rentColor = 'green';
  }

  return (
    <div style={containerStyle}>
      {heading}

      <img src={officeImage} alt="Office" style={imageStyle} />

      <h1>Single Office Detail</h1>
      <h3><p><strong>Name:</strong> {office.name}</p></h3>
      <p>
        <strong>Rent:</strong>{' '}
        <span style={{ color: rentColor }}>{office.rent}</span>
      </p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>All Office Listings</h2>
      <ul>
        {offices.map((o, index) => {
          let currentColor;
          if (o.rent < 60000) {
            currentColor = 'red';
          } else {
            currentColor = 'green';
          }

          return (
            <li key={index}>
              <h2><p><strong>Name:</strong> {o.name}</p></h2>
              <p>
                <strong>Rent:</strong>{' '}
                <span style={{ color: currentColor }}>{o.rent}</span>
              </p>
              <p><strong>Address:</strong> {o.address}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;