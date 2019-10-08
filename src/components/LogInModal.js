import React from 'react'
import Modal from 'react-modal'

class LogInModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formSubmitted: false
    }
  }

  render() {
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        contentLabel="Log In Modal"
        closeTimeoutMS={300}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        handleCloseLogInModal={this.props.handleCloseLogInModal}
      >
        <form className="beta-form" onSubmit={this.handleCloseLogInModal}>
        {this.state.formSubmitted ? 
          <div className="beta-form__container">
              <p className="beta-form__text u-margin-top-small u-margin-bottom-small">Please wait while we log you into your account.</p> 
              <img src={require('../images/logo.png')} className="beta-form__brand u-margin-bottom-small" alt="Patterns logo"/>
          </div>
            : 
            <div className="beta-form__container">
              <h3 className="beta-form__heading">Log In</h3>
              <p className="beta-form__text u-margin-bottom-small">Welcome back, happy to see you again!</p>
              <input type="email" className="beta-form__input u-margin-bottom-small" placeholder="Your email" required />
              <input type="password" className="beta-form__input u-margin-bottom-small" placeholder="Your password" required />
              <button type="submit" className="beta-form__button">
                <i className="fab fa-telegram-plane"></i> Send Request
              </button>
            </div>
          }  
          </form>  
      </Modal>
    )
  }
}
export default LogInModal