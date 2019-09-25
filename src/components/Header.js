import React from 'react'
import { NavLink } from 'react-router-dom'
import SignUpModal from './SignUpModal'
import LogInModal from './LogInModal'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenLogInModal = this.handleOpenLogInModal.bind(this);
    this.handleCloseLogInModal = this.handleCloseLogInModal.bind(this);

    this.handleOpenSignUpModal = this.handleOpenSignUpModal.bind(this);
    this.handleCloseSignUpModal = this.handleCloseSignUpModal.bind(this);
    // Config for sign up modal
    this.state = {
      showLogInModal: false,
      showSignUpModal: false
    }
  }
  handleOpenLogInModal() {
    console.log("handleOpenLogIn")
    this.setState({ showLogInModal: true })
  }
  handleOpenSignUpModal() {
    console.log("handleOpenSignUp")
    this.setState({ showSignUpModal: true })
  }
  handleCloseLogInModal() {
    this.setState({ showLogInModal: false })
  }
  handleCloseSignUpModal() {
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
                <img src={require('../images/brain.png')} className="nav__brand" alt="Patterns logo" />
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
                <img src={require('../images/brain.png')} className="nav__brand" alt="Patterns logo" />
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
          isOpen={this.state.showSignUpModal}
          onRequestClose={this.handleCloseSignUpModal}
          handleCloseSignUpModal={this.handleCloseSignUpModal}
        />

        <LogInModal
          isOpen={this.state.showLogInModal}
          onRequestClose={this.handleCloseLogInModal}
          handleCloseLogInModal={this.handleCloseLogInModal}
        />
      </div>
    )
  }
}

export default Header