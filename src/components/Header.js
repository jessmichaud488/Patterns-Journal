import React from 'react'
import { NavLink } from 'react-router-dom'
import SignUpfrom './SignUp'
import LogIn from './LogIn'


class Header extends React.Component {
  constructor(props) {
    super(props);
    // Config for sign up modal
    this.state = {
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
                <NavLink to="#" className="nav__link" activeClassName="is-active">Log In</NavLink>
                <NavLink to="#" className="nav__link" activeClassName="is-active">Sign Up</NavLink>
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
      </div>
    )
  }
}

export default Header