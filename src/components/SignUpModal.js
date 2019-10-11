import React from 'react'
import Modal from 'react-modal'

class SignUpModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      email: '', 
      password: '',
      formSubmitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        contentLabel="Sign Up Modal"
        closeTimeoutMS={300}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        handleCloseSignUpModal={this.props.handleCloseSignUpModal}
      >
        <form className="beta-form" onSubmit={this.handleSubmit}>
        {this.state.formSubmitted ? 
          <div className="beta-form__container">
              <p className="beta-form__text u-margin-top-small u-margin-bottom-small">Thank you for signing up for your Patterns Journal! Because your privacy is important to us, you will receive an email shortly to complete your registration. Journal on!</p> 
              <img src={require('../images/logo.png')} className="beta-form__brand u-margin-bottom-small" alt="Patterns logo"/>
          </div>
            : 
            <div className="beta-form__container">
              <h3 className="beta-form__heading">Patterns Register</h3>
              <p className="beta-form__text u-margin-bottom-small">Begin journaling your journey</p>
              <input 
              type="text" 
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              className="beta-form__input u-margin-bottom-small" 
              placeholder="Your first name" 
              required
              />

              <input 
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange} 
              className="beta-form__input u-margin-bottom-small" 
              placeholder="Your email" 
              required 
              />

              <input 
              type="text"
              name="password" 
              value={this.state.password}
              onChange={this.handleInputChange}
              className="beta-form__input u-margin-bottom-small" 
              placeholder="Your password" 
              required 
              />

              <button 
              type="submit"
              value="Submit" 
              className="beta-form__button">
                <i className="fab fa-telegram-plane"></i> 
                Send Request
              </button>
            </div>
          }  
          </form>  
      </Modal>
    )
  }
}
export default SignUpModal