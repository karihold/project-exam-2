import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

//Components
import Input from '../inputs/form/Input';
import Button from '../buttons/Button';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email is not valid', { regex: /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g })
    .required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const LoginForm = ({ onSubmit, onCancel, onSignup }) => {
  const { register, errors, handleSubmit } = useForm({
    validationSchema: schema,
  });

  const getValidationMessage = (inputName) => (inputName in errors ? errors[inputName].message : '');

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Button className="sign-up__button" label="Sign Up" onClickHandler={onSignup} />
      <h2 className="form-h2">Log In</h2>
      <Input
        className="form__input"
        id="login-email"
        label="E-mail"
        name="email"
        type="email"
        placeholder="Your E-mail adress"
        validationMessage={getValidationMessage('email')}
        register={register}
      />
      <Input
        className="form__input"
        id="login-password"
        label="Password"
        name="password"
        type="password"
        placeholder="Your password"
        validationMessage={getValidationMessage('password')}
        register={register}
      />
      <div className="form-buttons">
        <Button className="form__button" label="Log In" type="submit" />
        <Button className="form__cancel-button " label="Cancel" inverted onClickHandler={onCancel} />
      </div>
    </form>
  );
};

export default LoginForm;
