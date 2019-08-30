import React from "react";
import Modal from "react-modal";

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      formSubmitted: false
    };
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({ formSubmitted: true });
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
        handleCloseModal={this.props.handleCloseModal}
      >
        <form className="beta-form" onSubmit={this.handleFormSubmit}>
          {this.state.formSubmitted ? (
            <div className="beta-form__container">
              <p className="beta-form__text u-margin-top-small u-margin-bottom-small">
                Thank you for signing up. We will notify you when your account
                is ready.
              </p>
              <img
                src="../images/brain.png"
                className="beta-form__brand u-margin-bottom-small"
                alt="LOGO"
              />
            </div>
          ) : (
            <div className="beta-form__container">
              <h3 className="beta-form__heading">Patterns Register</h3>
              <p className="beta-form__text u-margin-bottom-small">
                Thank you for signing up for your Patterns Journal! Because your privacy is important to us, you will receive an email shortly to complete your registration. Journal on!
              </p>
              <input
                type="email"
                className="beta-form__input u-margin-bottom-small"
                placeholder="Your e-mail"
                required
              />
              <button className="beta-form__button">
                <i className="fab fa-telegram-plane" /> Send Request
              </button>
            </div>
          )}
        </form>
        <button
          onClick={this.props.handleCloseModal}
          className="beta-form__close"
        >
          <i className="fas fa-times" />
        </button>
      </Modal>
    );
  }
}
export default SignUpModal;