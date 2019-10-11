import React from "react";
import ReactDOM from "react-dom";

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
    
  changeHandler(e) {
    this.props.parentFunction(e.target.value)
  }
  
  render() {
    return (
      <div>
        <label>{this.props.labelName}</label>
        <input type={this.props.inputType} id={this.props.id} onChange={this.changeHandler} />
      </div>
    )
  }
}

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      email: "",
      password: ""
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.setFirstName = this.setFirstName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }
  
  setFirstName(firstName) {
    this.setState({firstName: firstName})
  }
  
  setEmail(email) {
    this.setState({email: email})
  }
  
  setPassword(password) {
    this.setState({password: password})
  }
  
  clickHandler() {
    // put your own code here
    alert(`First Name: ${this.state.firstName} Email: ${this.state.email} Password: ${this.state.password}`)
  }
  
  render() {
    return (
      <div>
        <Input id="firstName" labelName="First Name:" inputType="text" parentFunction={this.setFirstName} />
        <Input id ="email" labelName="Email: " inputType="text" parentFunction={this.setEmail}  />
        <Input id ="password" labelName="Password: " inputType="password" parentFunction={this.setPassword} /> 
        <button onClick={this.clickHandler}>{this.props.buttonName}</button>
      </div>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <SignUpForm buttonName="Submit"/>
      </div>
    )
  }
}

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Content />
      </div>
    )
  }
}

ReactDOM.render(<SignUp />, document.getElementById('app'))