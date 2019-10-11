import React from 'react'
import { NavLink } from 'react-router-dom'
import SignUpModal from './SignUpModal'
import LogInModal from './LogInModal'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handPasswordChange = this.handlePasswordChange.bind(this);

    this.handleOpenLogInModal = this.handleOpenLogInModal.bind(this);
    this.handleCloseLogInModal = this.handleCloseLogInModal.bind(this);

    this.handleOpenSignUpModal = this.handleOpenSignUpModal.bind(this);
    this.handleCloseSignUpModal = this.handleCloseSignUpModal.bind(this);
    // Config for sign up modal
    this.state = {
      email: '',
      password: '',
      showLogInModal: false,
      showSignUpModal: false
    }
  }

  handleEmailChange(e) {
    e.preventDefault()
    console.log('Email =', e.target.value)
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange(e) {
    e.preventDefault()
    console.log('Password =', e.target.value)
    this.setState({
      password: e.target.value
    });
  }
  /*handleLogInFormSubmit(e) {
    e.preventDefault()
    debugger
    this.setState(({ formSubmitted: true }))
  }
  
  handleSignUpFormSubmit(e) {
    e.preventDefault()
    this.setState(({ formSubmitted: true }))
  }*/
  
  handleOpenLogInModal(e) {
    e.preventDefault()
    console.log("handleOpenLogIn")
    this.setState({ showLogInModal: true })
  }

  handleOpenSignUpModal(e) {
    e.preventDefault()
    console.log("handleOpenSignUp")
    this.setState({ showSignUpModal: true })
  }

  handleCloseLogInModal(e) {
    e.preventDefault()
    console.log('event =', e)
    console.log("Made it to close!")
    this.setState({ showLogInModal: false })
  }

  handleCloseSignUpModal(e) {
    e.preventDefault()
    this.setState({ showSignUpModal: false })
  }
  
  render() {
    // Return different navigation between home page and demo
    return (
      <div className="header-wrapper">
        {window.location.pathname === '/' ?
          <header className="header fade-in-top">
            <nav className="nav">
              <NavLink to="/" className="nav__link">
                <img src={require('../images/logo.png')} className="nav__brand" alt="Patterns logo" />
              </NavLink>
              <div className="nav__home-links">
                <NavLink to="#" className="nav__link" activeClassName="is-active" onClick={this.handleOpenLogInModal}>Log In</NavLink>
                <NavLink to="#" className="nav__link" activeClassName="is-active" onClick={this.handleOpenSignUpModal}>Sign Up</NavLink>
                <NavLink to="/dashboard" className="nav__link" activeClassName="is-active">Demo</NavLink>
              </div>
            </nav>
          </header>
          :
          <header className="header fade-in-top">
            <nav className="nav">
              <NavLink to="/" className="nav__link">
                <img src={require('../images/logo.png')} className="nav__brand" alt="Patterns logo" />
              </NavLink>
              <div className="nav__main-links">
                <NavLink to="/dashboard" className="nav__link nav__link-icon" activeClassName="is-active"><i className="fas fa-chart-pie nav__icon"></i><span className="nav__text">Dashboard</span></NavLink>
                <NavLink to="/entries" className="nav__link nav__link-icon" activeClassName="is-active"><i className="fas fa-list-ul nav__icon"></i><span className="nav__text">Entries</span></NavLink>
                <NavLink to="/create" className="nav__link nav__link-icon" activeClassName="is-active"><i className="fas fa-pencil-alt nav__icon"></i><span className="nav__text">New Entry</span></NavLink>
              </div>
            </nav>
          </header>
        }
        <SignUpModal
          handleEmailChange={this.state.handleEmailChange}
          handlePasswordChange={this.state.handlePasswordChange}
          isOpen={this.state.showSignUpModal}
          onRequestClose={this.handleCloseSignUpModal}
          handleCloseSignUpModal={this.handleCloseSignUpModal}
          //handleLogInFormSubmit={this.handleLogInFormSubmit}
        />

        <LogInModal
          email={this.state.email}
          password={this.state.password}
          handleEmailChange={this.state.handleEmailChange}
          handlePasswordChange={this.state.handlePasswordChange}
          isOpen={this.state.showLogInModal}
          onRequestClose={this.handleCloseLogInModal}
          handleCloseLogInModal={this.handleCloseLogInModal}
        />
      </div>
    )
  }
}

export default Header