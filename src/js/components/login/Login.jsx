import React, { Fragment, useState, useEffect, useContext } from 'react';
import { render } from 'react-dom';
import { useHistory } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';

import Authentication from '../../authentication';

import Button from '../buttons/Button';
import Modal from '../modal/Modal';
import LoginForm from '../forms/LoginForm';
import SignUpForm from '../forms/SignUpForm';

const Login = ({ auth, loginHandler }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignupModal] = useState(false);

  const history = useHistory();

  const closeSignUpModal = () => setShowSignupModal(false);
  const closeLoginModal = () => setShowLoginModal(false);

  const openLoginModal = () => {
    if (showSignUpModal) closeSignUpModal();
    setShowLoginModal(true);
  };

  const openSignUpModal = () => {
    if (showLoginModal) closeLoginModal();
    setShowSignupModal(true);
  };

  const onLogin = ({ email: username, password }) => {
    if (!auth.doesUserExist(username)) {
      alert('No user found');
      return closeLoginModal();
    }

    if (auth.isValidLogin({ username, password })) {
      auth.logInUser(username);
      loginHandler(auth.activeUser);

      closeLoginModal();
      if (auth.isAdmin({ username, password })) history.push('/admin');
    } else {
      alert('Wrong login credentials');
    }
  };

  const logOutUser = () => {
    auth.logOutUser();
    loginHandler(auth.activeUser);
  };

  const onSignUp = ({ email, password }) => {
    auth.saveUser({ username: email, password });
    closeSignUpModal();
  };

  const switchToSignUpModal = () => {
    closeLoginModal();
    openSignUpModal();
  };

  return (
    <section className="login-section">
      <UserContext.Consumer>
        {(user) =>
          user.isLoggedIn ? (
            <Fragment>
              <Button label="Log out" className="login-frontpage-item" onClickHandler={logOutUser} />
            </Fragment>
          ) : (
            <Fragment>
              <Button label="Log in" className="login-frontpage-item" onClickHandler={openLoginModal} />
              <Button label="Sign up" className="signup-frontpage-item" onClickHandler={openSignUpModal} />
            </Fragment>
          )
        }
      </UserContext.Consumer>
      {showLoginModal && (
        <Modal>
          <LoginForm onSubmit={onLogin} onCancel={closeLoginModal} onSignup={switchToSignUpModal} />
        </Modal>
      )}
      {showSignUpModal && (
        <Modal>
          <SignUpForm onSubmit={onSignUp} onCancel={closeSignUpModal} />
        </Modal>
      )}
    </section>
  );
};

export default Login;
