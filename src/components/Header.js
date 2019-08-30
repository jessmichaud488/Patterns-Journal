import React from "react";
import { Link } from "react-router-dom";
//import { connect } from "react-redux";
import SignUpModal from "./SignInModal";
import Modal from "react-modal";

class Header extends React.Component {
  constructor() {
    super();
    // Config for sign up modal
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    // Return different navigation between home page and demo
    return (
      <div className="header-wrapper">
        {window.location.pathname === "/" ? (
          <header className="header fade-in-top">
            <nav className="nav">

              <Link to="/" className="nav__link"
                img src="images/brain.png" className="nav__brand" alt="Patterns logo">
              </Link>

              <div className="nav__home-links">
                <Link to ="/"
                  className="nav__link"
                  activeclassname="is-active"
                  onClick={this.handleOpenModal}>
                  Sign Up
                </Link>

                <Link to="/dashboard"
                  className="nav__link"
                  activeclassname="is-active">
                  Demo
                </Link>
              </div>
            </nav>
          </header>
        ) : (
          <header className="header fade-in-top">
            <nav className="nav">

              <Link to="/"
                className="nav__link">
                <img src="images/brain.png" className="nav__brand" alt="Patterns logo" />
              </Link>

              <div className="nav__main-links">
                <Link to="/dashboard"
                  className="nav__link nav__link-icon"
                  activeclassname="is-active"
                  >
                  <i className="fas fa-chart-pie nav__icon" />
                  <span className="nav__text">Dashboard</span>
                </Link>

                <Link to="/entries"
                  className="nav__link nav__link-icon"
                  activeclassname="is-active"
                  >
                  <i className="fas fa-list-ul nav__icon" />
                  <span className="nav__text">Entries</span>
                </Link>

                <Link href="/create"
                  className="nav__link nav__link-icon"
                  activeclassname="is-active"
                  >
                  <i className="fas fa-pencil-alt nav__icon" />
                  <span className="nav__text">New Entry</span>
                </Link>

              </div>
            </nav>
          </header>
        )}
        <SignUpModal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default Header;