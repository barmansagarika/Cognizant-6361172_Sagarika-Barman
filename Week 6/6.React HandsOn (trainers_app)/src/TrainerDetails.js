import React from 'react';
import { useParams, Link } from 'react-router-dom';
import trainersData from './TrainersMock';

const TrainerDetail = () => {
  const { id } = useParams();
  
  const trainer = trainersData.find(t => t.TrainerId === id);
  
  if (!trainer) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Trainer not found!</div>;
  }
  
  return (
    <div style={{ 
      padding: '40px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      minHeight: '80vh'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        fontSize: '28px',
        color: '#333'
      }}>
        Trainers Details
      </h2>
      
      <div style={{ 
        border: '2px solid #ddd', 
        padding: '30px', 
        borderRadius: '8px',
        width: '100%',
        maxWidth: '500px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'left'
      }}>
        <div style={{ marginBottom: '15px', fontSize: '16px' }}>
          <strong>{trainer.Name} ({trainer.Technology})</strong>
        </div>
        <div style={{ marginBottom: '10px', fontSize: '16px' }}>
          {trainer.Email}
        </div>
        <div style={{ marginBottom: '20px', fontSize: '16px' }}>
          {trainer.Phone}
        </div>
        <div style={{ fontSize: '16px' }}>
          <ul style={{ 
            marginTop: '10px', 
            marginLeft: '20px',
            lineHeight: '1.6',
            paddingLeft: '0'
          }}>
            {trainer.Skills.map((skill, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <Link 
          to="/trainers" 
          style={{ 
            color: '#007bff', 
            textDecoration: 'none',
            padding: '12px 24px',
            border: '2px solid #007bff',
            borderRadius: '6px',
            display: 'inline-block',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: 'white',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#007bff';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#007bff';
          }}
        >
          Back to Trainers List
        </Link>
      </div>
    </div>
  );
};

export default TrainerDetail;