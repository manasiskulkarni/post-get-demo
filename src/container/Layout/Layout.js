import React, { Component } from "react";
import Input from "../../component/Input/Input";
import Details from "../../component/Details/Details";
import axios from "../../axios";
import validator from "validator";

class Layout extends Component {
  state = {
    list: [],
    errorMessages: [],
    name: "",
    phno: "",
    email: "",
    gender: "female",
    age: [1, 2, 3, 4, 5],
    password: "",
    errors: {},
  };

  componentDidMount() {
    axios
      .get("/posts.json")
      .then((response) => {
        this.setState({ list: response.data });
        console.log(this.state.list);
      })
      .catch((error) => console.log(error));
  }

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changePhno = (e) => {
    this.setState({ phno: e.target.value });
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onValueChange = (e) => {
    this.setState({ gender: e.target.value });
  };

  changedAge = (e) => {
    this.setState({ age: e.target.value });
  };

  submit = () => {
    const { name, phno, email, password } = this.state;
    let errors = { phno: "", name: "", email: "", password: "" };

    if (name.length < 6 || name.length > 25) {
      errors.name =
        "name should not be null and name length should be less than 25 and greater than 6";
      console.log(errors.name);
    } else if (isNaN(phno) || phno.length !== 10) {
      errors.phno =
        "phone number should be number only and must contain 10 characters";
      console.log(errors.phno);
    } else if (!validator.isEmail(email)) {
      errors.email = "please enter valid email";
      console.log(errors.email);
    } else if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      errors.password = "please enter valid password ";
      console.log(errors.password);
    } else {
      const post = {
        name: this.state.name,
        phno: this.state.phno,
        email: this.state.email,
        gender: this.state.gender,
        age: this.state.age[0],
        password: this.state.password,
      };
      axios
        .post("/posts.json", post)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      this.clear();
    }
    this.setState({ errors });
  };

  clear = () => {
    this.setState({
      name: "",
      phno: "",
      email: "",
      gender: "f",
      age: [1, 2, 3, 4, 5],
      password: "",
    });
  };

  render() {
    return (
      <React.Fragment>
        <Input
          name={this.state.name}
          phno={this.state.phno}
          email={this.state.email}
          gender={this.state.gender}
          age={this.state.age[0]}
          password={this.state.password}
          changedAge={this.changedAge}
          changedGender={this.onValueChange}
          changeName={this.changeName}
          changePhno={this.changePhno}
          changeEmail={this.changeEmail}
          changePassword={this.changePassword}
          submit={this.submit}
          errors= {this.state.errors}
        />
        <Details list={this.state.list} />
      </React.Fragment>
    );
  }
}

export default Layout;
