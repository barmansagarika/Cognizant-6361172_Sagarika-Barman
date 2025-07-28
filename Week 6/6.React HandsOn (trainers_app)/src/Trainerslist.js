import React from 'react';
import { Link } from 'react-router-dom';

const TrainersList = ({ trainers }) => {
  return (
    <div style={{ 
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '28px',
        color: '#333'
      }}>
        Trainers List
      </h2>
      
      <div style={{
        backgroundColor: '#f9f9f9',
        border: '2px solid #ddd',
        borderRadius: '8px',
        padding: '30px',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0,
          margin: 0
        }}>
          {trainers.map(trainer => (
            <li key={trainer.TrainerId} style={{ 
              margin: '15px 0',
              paddingBottom: '10px',
              borderBottom: '1px solid #eee'
            }}>
              <Link 
                to={`/trainer/${trainer.TrainerId}`}
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '500',
                  display: 'block',
                  padding: '5px 0'
                }}
                onMouseOver={(e) => {
                  e.target.style.textDecoration = 'underline';
                  e.target.style.color = '#0056b3';
                }}
                onMouseOut={(e) => {
                  e.target.style.textDecoration = 'none';
                  e.target.style.color = '#007bff';
                }}
              >
                {trainer.Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TrainersList;