import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      complaint: ''
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const txnId = Math.floor(Math.random() * 100) + 1;
    var msg = `Thanks ${this.state.name}\nYour Complaint was Submitted.\nTransaction ID is: ${txnId}`;
    alert(msg);
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px'
        }}
      >
        <h1 style={{ color: 'blue', fontWeight: 'bold' }}>
          Register your complaints here!!!
        </h1>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          style={{ textAlign: 'left' }}
        >
          <div
            style={{
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <label style={{ marginRight: '10px', minWidth: '90px' }}>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div
            style={{
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <label style={{ marginRight: '10px', minWidth: '90px' }}>Complaint:</label>
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={(e) => this.handleChange(e)}
              rows="3"
              cols="30"
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;