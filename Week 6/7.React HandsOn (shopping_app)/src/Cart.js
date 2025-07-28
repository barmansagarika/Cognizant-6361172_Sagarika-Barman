import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <tr>
        <td style={this.props.tdStyle}>{this.props.itemname}</td>
        <td style={this.props.tdStyle}>{this.props.price}</td>
      </tr>
    );
  }
}

export default Cart;
