import React from 'react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { post } from '../../fetch';

import { contacts } from '../../api';

//Components
import Input from '../inputs/form/Input';
import TextArea from '../inputs/form/TextArea';
import Button from '../buttons/Button';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/[a-zA-z-\s]/g, 'Please enter a valid name')
    .required('First Name is required'),
  lastName: yup
    .string()
    .matches(/[a-zA-z-\s]/g, 'Please enter a valid name')
    .required('Last Name is required'),
  email: yup
    .string()
    .email('Email is not valid', { regex: /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g })
    .required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const { register, errors, reset, handleSubmit } = useForm({
    validationSchema: schema,
  });

  const getValidationMessage = (inputName) => (inputName in errors ? errors[inputName].message : '');

  const submitHandler = ({ firstName, lastName, email, subject, message }) => {
    const body = { name: `${firstName} ${lastName}`, email, message: `${subject}: ${message}` };
    post(contacts, body).then(reset);
  };

  return (
    <form className="form form--large" onSubmit={handleSubmit(submitHandler)}>
      <h2 className="form__h2">Log In</h2>
      <Input
        className="form__input"
        id="contact-first-name"
        label="First Name"
        name="firstName"
        type="text"
        placeholder="Your First Name"
        validationMessage={getValidationMessage('firstName')}
        register={register}
      />
      <Input
        className="form__input"
        id="contact-last-name"
        label="Last Name"
        name="lastName"
        type="text"
        placeholder="Your Last Name"
        validationMessage={getValidationMessage('lastName')}
        register={register}
      />
      <Input
        className="form__input"
        id="contact-email"
        label="E-mail"
        name="email"
        type="email"
        placeholder="Your E-mail adress"
        validationMessage={getValidationMessage('email')}
        register={register}
      />
      <Input
        className="form__input"
        id="contact-subject"
        label="Subject"
        name="subject"
        type="text"
        placeholder="Message Subject"
        validationMessage={getValidationMessage('subject')}
        register={register}
      />
      <TextArea
        className="form__message"
        id="contact-message"
        label="Message"
        name="message"
        validationMessage={getValidationMessage('message')}
        register={register}
      />
      <Button className="form__button" label="Submit" type="submit" />
    </form>
  );
};

export default ContactForm;
