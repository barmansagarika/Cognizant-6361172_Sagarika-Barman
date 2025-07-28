import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      { itemname: "Laptop", price: 80000 },
      { itemname: "TV", price: 120000 },
      { itemname: "Washing Machine", price: 50000 },
      { itemname: "Mobile", price: 30000 },
      { itemname: "Fridge", price: 70000 }
    ];
  }

  render() {
    const containerStyle = {
      textAlign: 'center',
      marginTop: '50px',
      fontFamily: 'Arial'
    };

    const headingStyle = {
      color: 'green',
      fontWeight: 'bold',
      fontSize: '28px',
      marginBottom: '20px'
    };

    const tableWrapperStyle = {
      display: 'inline-block',
      backgroundColor: '#E6E6FA',
      border: '1px solid black',
      padding: '10px', 
      borderRadius: '4px' 
    };

    const tableStyle = {
      borderCollapse: 'separate',
      borderSpacing: '3px'
    };

    const thStyle = {
      backgroundColor: 'white',
      border: '1px solid black',
      padding: '10px',
      fontWeight: 'bold',
      color: 'green'
    };

    const tdStyle = {
      backgroundColor: 'white',
      border: '1px solid black',
      padding: '10px'
    };

    return (
      <div style={containerStyle}>
        <div style={headingStyle}>Items Ordered :</div>
        <div style={tableWrapperStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.items.map((item, index) => (
                <Cart key={index} itemname={item.itemname} price={item.price} tdStyle={tdStyle} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default OnlineShopping;
