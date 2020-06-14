import React from 'react';

import { useForm } from 'react-hook-form';

import { post } from '../fetch';
import { establishments } from '../api';

//Components

import Button from '../components/buttons/Button';
import Input from '../components/inputs/form/Input';
import Checkbox from '../components/inputs/form/Checkbox';
import TextArea from '../components/inputs/form/TextArea';

const CreateEstablishment = () => {
  const { register, errors, reset, handleSubmit } = useForm();

  const onCreate = (data) => {
    console.log('EstablishData', data);
    post(establishments, data).then(reset);
  };

  return (
    <form className="form create-establishment-form " onSubmit={handleSubmit(onCreate)}>
      <Input className="form__input" type="url" id="create-establishment-image" name="image" label="Add images" register={register} />
      <Input className="form__input" type="text" id="create-establishment-name" name="name" label="Add Location" register={register} />
      <Input className="form__input" type="email" id="create-establishment-email" name="email" label="Add email" register={register} />
      <Input className="form__input" type="text" id="create-establishment-address" name="address" label="Add address" register={register} />
      <Input className="form__input" type="number" id="create-establishment-price" name="price" label="Add price" register={register} />
      <Input className="form__input" type="number" id="create-establishment-max-guests" name="maxGuests" label="Add max guests" register={register} />
      <Input className="form__input" type="number" id="create-establishment-lat" name="lat" label="Latitude" register={register} />
      <Input className="form__input" type="number" id="create-establishment-lang" name="lng" label="Longitude" register={register} />
      <Checkbox className="form__checkbox" id="create-establishment-checkbox" name="selfCatering" label="Self Catering" register={register} />
      <TextArea className="form__message" id="create-establishment-description" name="description" label="Description" register={register} />

      <Button className="form__button" type="submit" label="Create establishment" />
    </form>
  );
};

export default CreateEstablishment;
