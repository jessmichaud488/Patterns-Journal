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

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }
  
  setEmail(email) {
    this.setState({email: email})
  }
  
  setPassword(password) {
    this.setState({password: password})
  }
  
  clickHandler() {
    // put your own code here
    alert(`Email: ${this.state.email} Password: ${this.state.password}`)
  }
  
  render() {
    return (
      <div>
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
        <h2>{this.props.title}</h2>
        <LoginForm buttonName="Submit"/>
      </div>
    )
  }
}

class LogIn extends React.Component {
  render() {
    return (
      <div>
        <Content />
      </div>
    )
  }
}

ReactDOM.render(<LogIn />, document.getElementById('app'))