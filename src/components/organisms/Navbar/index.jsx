import { React, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "/assets/Logo.svg";
import "./Navbar.scss";
import { Facebook, Instagram, Twitter } from "../../atoms";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const toggleIsNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    let timeoutId = null;
    const updateSize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowSize(window.innerWidth), 150);
    };
    window.addEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (windowSize > 1024) {
      setIsNavOpen(false);
    }
  }, [windowSize]);

  useEffect(() => {
    isNavOpen
      ? document.body.classList.add("header-open")
      : document.body.classList.remove("header-open");
  }, [isNavOpen]);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav__logo-container">
            <img className="nav__logo--img" src={Logo} alt="Foodieland Logo" />
          </div>
          <ul
            id="nav__menu"
            className={`nav__list ${isNavOpen ? "nav__list-display--on" : ""}`}
          >
            <li className="nav__list--item">
              <Link className="nav__list--link" to="/">
                Home
              </Link>
            </li>
            <li className="nav__list--item">
              <Link className="nav__list--link" to="/recipes">
                Recipes
              </Link>
            </li>
            <li className="nav__list--item">
              <Link className="nav__list--link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav__list--item">
              <a className="nav__list--link" href="#">
                About us
              </a>
            </li>
            <li className="nav__list--item">
              <Link className="nav__list--link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <button onClick={toggleIsNavOpen} className="nav__hamburguer--button">
            <div
              className={`nav__hamburguer--icon ${
                isNavOpen ? "nav__hamburguer--icon-open" : ""
              }`}
            ></div>
          </button>
          <div className="nav__social-container">
            <Facebook className="hover-orange" />
            <Twitter className="hover-orange" />
            <Instagram className="hover-orange" />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
