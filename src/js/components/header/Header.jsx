import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Search from '../search/Search';
import Login from '../login/Login';
import MenuButton from '../buttons/MenuButton';
import NavLink from '../nav-link/NavLink';

//Files
import logo from '../../../assets/icons-and-logo/logo.svg';

const topNavLinks = [
  { text: 'VISITORS', id: 'visitors', className: 'top-nav__link', link: '/' },
  { text: 'HOSTS', id: 'hosts', className: 'top-nav__link', link: '/admin' },
  { text: 'CONTACT US', id: 'contact', className: 'top-nav__link', link: '/contact' },
];

const navLinks = [
  { text: 'VISITORS', id: 'visitors', className: 'navbar__link', link: '/' },
  { text: 'HOSTS', id: 'hosts', className: 'navbar__link', link: '/admin' },
  { text: 'CONTACT US', id: 'contact', className: 'navbar__link', link: '/contact' },
];

const hotelLinks = [
  { text: 'Places to Stay', className: 'navbar__link', link: '/search' },
  { text: 'Monthly Stays', className: 'navbar__link', link: '/search' },
  { text: 'Experiences', className: 'navbar__link', link: '/search' },
];

const Header = ({ searchSuggestions, auth, loginHandler, isAtFrontpage }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const createNavLinks = (links) => links.map((link, index) => <NavLink key={`nav-link-${link.text.replace(/\s/, '')}-${index}`} {...link} />);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  const topNavLinksMarkup = createNavLinks(topNavLinks);
  const hotelLinksMarkup = createNavLinks(hotelLinks);
  const navLinksMarkup = createNavLinks(navLinks);

  return (
    <header id={isAtFrontpage ? 'frontpage-header' : ''}>
      {isAtFrontpage && (
        <section className="frontpage-header-top">
          <nav className="top-nav">{topNavLinksMarkup}</nav>
          <Login auth={auth} loginHandler={loginHandler} />
        </section>
      )}
      {
        <div className="header-wrapper">
          <section className={`header-main-section ${isAtFrontpage ? 'header-main-section--at-frontpage' : ''}`}>
            <section className={`logo-section ${isAtFrontpage ? 'logo-section--at-frontpage' : ''}`}>
              <Link to="/" className="logo-section__link">
                <img className="logo-section__image" src={logo} alt="logo" />
              </Link>
              <h1 className="brand-name">HoliDaze</h1>
            </section>
            <div className={`navbar-section ${isAtFrontpage ? 'navbar-section--at-frontpage' : ''}`}>
              <nav className="navbar">{isAtFrontpage ? hotelLinksMarkup : navLinksMarkup}</nav>
              <Search suggestions={searchSuggestions} />
            </div>
            {!isAtFrontpage && <Login auth={auth} loginHandler={loginHandler} />}
            <div className={`mobile-menu ${showMobileMenu ? 'mobile-menu--open' : ''}`}>
              <nav className="navbar">{isAtFrontpage ? hotelLinksMarkup : navLinksMarkup}</nav>
              <Search suggestions={searchSuggestions} />
              <Login auth={auth} loginHandler={loginHandler} />
            </div>
            <MenuButton onClickHandler={toggleMobileMenu} isActive={showMobileMenu} />
          </section>
        </div>
      }

      {isAtFrontpage && (
        <div className="banner-image-buttons">
          <Link className="banner__button" to="/search">
            BOOK NOW
          </Link>
          <Link className="banner__button-inverted" to="/search">
            DISCOVER
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
