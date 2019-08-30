import React from "react";
//import ReactDOM from "react-dom";
//import { Link } from "react-router-dom";
//import { connect } from "react-redux";

export class HomePage extends React.Component {
  componentDidMount() {
    const headingPrimary = document.querySelector(".heading-primary--main");
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      headingPrimary.classList.add("heading-primary--main-mobile");
    } else {
      headingPrimary.classList.add("heading-primary--main-desktop");
    }
  }
  render() {
    return (
      <div className="home-page-wrapper">
        <section className="section section--one fade-in-bottom">
          <div className="section--one__text-box u-center-text">
            <h1 className="heading-primary u-margin-bottom-medium">
              <span className="heading-primary--main u-margin-bottom-small">
                Understand Your Patterns
              </span>
              <span className="heading-primary--sub">
                Patterns Journaling app is a new kind of diary experience that
                assists users in becoming aware of their moods and sleep
                schedules and the affects they have on their mental health.
              </span>
            </h1>
          </div>
        </section>

        <section className="section section--two u-margin-bottom-xxxl">
          <div className="heading-text-box u-center-text u-margin-bottom-big">
            <h3 className="heading-text-box--tertiary">
              An easier way to manage mental health
            </h3>
            <h2 className="heading-text-box--secondary">
              See the patterns, identify needs, and communicate more clearly
              what you need most
            </h2>
          </div>
          <div className="section--two__cards u-margin-bottom-medium">
            <div className="card">
              <img src="../images/check.png" alt="Convenience" className="img card--1-img" />
              <div className="card__text-box">
                <p className="card__main-text u-margin-bottom-small">
                  Convenience
                </p>
                <p className="card__sub-text">
                  Open the app and easily record thoughts, events, moods, and
                  sleep duration
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src="../images/patterns.png"
                alt="Understand Patterns"
                className="img card--2-img"
              />
              <div className="card__text-box">
                <p className="card__main-text u-margin-bottom-small">
                  Understand Patterns
                </p>
                <p className="card__sub-text">
                  Keep track of how long certain mood and sleep patterns last
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src="../images/communication.png"
                alt="Better Communication"
                className="img card--3-img"
              />
              <div className="card__text-box">
                <p className="card__main-text u-margin-bottom-small">
                  Better Communication
                </p>
                <p className="card__sub-text">
                  If inclined, share these patterns with your mental health
                  professional to help better communicate your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer u-margin-bottom-big">
          <div className="footer__brand-container">
            <p className="footer__author-text">
              Created by{" "}
              <a
                href="https://jessmichaud488.github.io/portfolio/"
                target="_blank" rel="noopener noreferrer"
              >
                Jessica Michaud
              </a>
            </p>
            <div className="footer__social-media u-margin-bottom-small ">
              <a href="https://github.com/jessmichaud488" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/jessica-michaud-5b659069/"
                target="_blank" rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
//ReactDOM.render(<HomePage />, document.getElementById("app"));