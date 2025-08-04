import React, { Component } from "react";
import "./App.css";
class Getuser extends Component {
  state = {
    person: {},
    loading: true
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]);
  }

  render() {
    const { person, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{person.name.title} {person.name.first}</h2>
        <img src={person.picture.large} alt="User" />
      </div>
    );
  }
}

export default Getuser;