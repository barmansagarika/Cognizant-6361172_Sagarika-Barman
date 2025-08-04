import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  }

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full Name must be 5 characters long!"
            : "";
        break;
      case "email":
        const validEmailRegex = RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
        );
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be 8 characters long!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      alert("Valid Form");
    } else {
      if (this.state.errors.fullName !== "")
        alert(this.state.errors.fullName);
      if (this.state.errors.email !== "")
        alert(this.state.errors.email);
      if (this.state.errors.password !== "")
        alert(this.state.errors.password);
    }
  };

  render() {
    const headerStyle = {
      color: "red",
      fontWeight: "bold",
      fontSize: "20px",
    };
    return (
      <div style={{ marginLeft: "10px", marginTop: "20px" }}>
        <h2 style={headerStyle}>Register Here!!!</h2>
        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="fullName"
              onChange={this.handleChange}
              value={this.state.fullName}
            />
          </div>
          <br />
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <br />
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;