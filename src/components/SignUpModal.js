import React from 'react'
import Modal from 'react-modal'

class SignUpModal extends React.Component {
  constructor(props) {
    super(props)
    this.handleSignUpFormSubmit = this.handleSignUpFormSubmit.bind(this)
    this.state = {
      formSubmitted: false
    }
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
        <form className="beta-form" onSubmit={this.handleSignUpFormSubmit}>
        {this.state.formSubmitted ? 
          <div className="beta-form__container">
              <p className="beta-form__text u-margin-top-small u-margin-bottom-small">Thank you for signing up for your Patterns Journal! Because your privacy is important to us, you will receive an email shortly to complete your registration. Journal on!</p> 
              <img src={require('../images/brain.png')} className="beta-form__brand u-margin-bottom-small" alt="Patterns logo"/>
          </div>
            : 
            <div className="beta-form__container">
              <h3 className="beta-form__heading">Patterns Register</h3>
              <p className="beta-form__text u-margin-bottom-small">Begin journaling your journey</p>
              <input type="first name" className="beta-form__input u-margin-bottom-small" placeholder="Your first name" required />
              <input type="email" className="beta-form__input u-margin-bottom-small" placeholder="Your email" required />
              <input type="password" className="beta-form__input u-margin-bottom-small" placeholder="Your password" required />
              <button className="beta-form__button">
                <i className="fab fa-telegram-plane"></i> Send Request
              </button>
            </div>
          }      
        </form>
        <button onClick={this.props.handleCloseSignUpModal} className="beta-form__close"><i className="fas fa-times"></i></button>
      </Modal>
    )
  }
}
export default SignUpModal