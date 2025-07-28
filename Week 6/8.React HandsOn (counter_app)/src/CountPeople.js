import React from 'react';

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  UpdateEntry = () => {
    this.setState({ entrycount: this.state.entrycount + 1 });
  }

  UpdateExit = () => {
    this.setState({ exitcount: this.state.exitcount + 1 });
  }

  render() {
    const containerStyle = {
      textAlign: 'center',
      marginTop: '100px',
      fontFamily: 'Arial'
    };

    const countStyle = {
      fontSize: '24px',
      margin: '10px 0'
    };

    const buttonStyle = {
      margin: '10px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer'
    };

    return (
      <div style={containerStyle}>
        <h2>Entry Control</h2>
        <div style={countStyle}>People Entered: {this.state.entrycount}</div>
        <div style={countStyle}>People Exited: {this.state.exitcount}</div>
        <button style={buttonStyle} onClick={this.UpdateEntry}>Login</button>
        <button style={buttonStyle} onClick={this.UpdateExit}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;