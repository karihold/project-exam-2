import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

//Components
import Input from '../inputs/form/Input';
import TextArea from '../inputs/form/TextArea';
import Button from '../buttons/Button';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-z-\s]/g, 'Please enter a valid name')
    .required('First Name is required'),
  email: yup
    .string()
    .email('Email is not valid', { regex: /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g })
    .required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

const ContactHostForm = ({ onSubmit, onCancel }) => {
  const { register, errors, handleSubmit } = useForm({
    validationSchema: schema,
  });

  const getValidationMessage = (inputName) => (inputName in errors ? errors[inputName].message : '');

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__h2">Contact Host</h2>
      <Input
        className="form__input"
        id="contact-host-name"
        label="Full Name"
        name="name"
        type="text"
        placeholder="Your Full Name"
        validationMessage={getValidationMessage('name')}
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
        id="contact-host-subject"
        label="Subject"
        name="subject"
        type="text"
        placeholder="Message Subject"
        validationMessage={getValidationMessage('subject')}
        register={register}
      />
      <TextArea
        className="form__message"
        id="contact-host-message"
        label="Message"
        name="message"
        placeholder="Write Your Message Here.."
        validationMessage={getValidationMessage('message')}
        register={register}
      />
      <div className="form-buttons">
        <Button className="form__button" label="Submit" type="submit" />
        <Button className="form__cancel-button " label="Cancel" inverted onClickHandler={onCancel} />
      </div>
    </form>
  );
};

export default ContactHostForm;
