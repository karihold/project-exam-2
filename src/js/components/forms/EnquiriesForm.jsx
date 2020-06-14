import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

//Components
import Input from '../inputs/form/Input';
import DatePicker from '../date-picker/DatePicker';
import IncrementDropdown from '../dropdown/GuestsDropdown';
import Button from '../buttons/Button';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-z-\s]/g, 'Please enter a valid name')
    .required('Full Name is required'),
  email: yup
    .string()
    .email('Email is not valid', { regex: /^[\d-_.a-zA-z]+@[\d-_.a-zA-z]+\.[a-zA-z]+$/g })
    .required('Email is required'),
});

const EnquiriesForm = ({ onSubmit, price }) => {
  const { register, errors, handleSubmit } = useForm({
    validationSchema: schema,
  });

  const getValidationMessage = (inputName) => (inputName in errors ? errors[inputName].message : '');
  const serviceFee = 3;
  const specialOffer = 5;

  return (
    <form className="hotelpage-enquiry-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="reserve-price">£{price}/night</h2>
      <Input
        className="enquirie-input"
        id="enquiries-name"
        /* label="Full Name:" */
        name="name"
        type="text"
        placeholder="Your Full Names"
        validationMessage={getValidationMessage('name')}
        register={register}
      />
      <Input
        className="enquirie-input"
        id="enquiries-email"
        /*  label="E-mail:" */
        name="email"
        type="email"
        placeholder="Your E-mail adress"
        validationMessage={getValidationMessage('email')}
        register={register}
      />
      <DatePicker name="dates" register={register} />
      <IncrementDropdown label="Guests" name="guests" register={register} />
      <Button className="reserve-button" label="Reserve" type="submit" />
      <table className="enquiries-table">
        <tbody>
          <tr className="reserve-summary">
            <td>£{price} x night</td>
            <td>£{price}</td>
          </tr>
          <tr>
            <td className="special-offer">Special offer: 20%</td>
            <td className="special-price">-£{specialOffer}</td>
          </tr>
          <tr>
            <td>Service fee</td>
            <td>£{serviceFee}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>£{price + serviceFee - specialOffer}</td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
};

export default EnquiriesForm;
