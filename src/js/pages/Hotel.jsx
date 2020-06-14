import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import dayjs from 'dayjs';

import { establishments, enquiries, contacts } from '../api';
import { get, post } from '../fetch';

import Modal from '../components/modal/Modal';
import ContactHostForm from '../components/forms/ContactHostForm';
import EnquiriesForm from '../components/forms/EnquiriesForm';
import IconTile from '../components/icon-tile/IconTile';

import image1 from '../../assets/images/hotel-specific-page-image1.jpg';
import image2 from '../../assets/images/hotel-specific-page-image2.jpg';
import image3 from '../../assets/images/hotel-specific-page-image3.jpg';
import image4 from '../../assets/images/hotel-specific-page-image4.jpg';
import hostImage from '../../assets/images/host-image.jpg';

const Hotel = ({ establishments }) => {
  const [showEnquiriesForm, setShowEnquiriesForm] = useState(false);
  const { hotelId } = useParams();

  const hotel = establishments.find((hotel) => hotel.id === hotelId);

  const onEnquirySubmit = ({ name, email, dates }) => {
    const { from, to } = JSON.parse(dates);
    const body = { name, email, establishmentId: hotelId, checkIn: dayjs(from).format('MMMM DD YYYY'), checkOut: dayjs(to).format('MMMM DD YYYY') };

    post(enquiries, body);
  };

  const onConctactHostSubmit = ({ name, email, subject, message }) => {
    const body = { name, email, message: `${subject}: ${message}` };

    post(contacts, body).then(closeModal);
  };

  const openModal = () => setShowEnquiriesForm(true);
  const closeModal = () => setShowEnquiriesForm(false);

  return (
    <main>
      {hotel && (
        <Fragment>
          <section className="hotel-images">
            <img className="hotel__main-image" src={hotel.image} />
            <div className="hotel-detail-images-container">
              <img className="hotel__detail-image" src={image1} alt="hotel room detail image" />
              <img className="hotel__detail-image" src={image2} alt="hotel room detail image" />
              <img className="hotel__detail-image" src={image3} alt="hotel room detail image" />
              <img className="hotel__detail-image" src={image4} alt="hotel room detail image" />
            </div>
          </section>
          <section className="hotel-details-container">
            <div className="hotel-description-container">
              <div className="hotel-description">
                <p className="hotel-description__p">{hotel.description}</p>
                <p className="hotel-description__p">Contact: To contact host please press 'Contact Host' or write to the host at {hotel.email}</p>
                <p className="hotel-description__p">Self Catering: {hotel.selfCatering ? 'Yes' : 'No'}</p>
                {hotel.address && <address className="hotel-description-p adress">{hotel.address}</address>}
              </div>

              <div className="hotel-icon-row">
                <IconTile title="Max number of guests" label={hotel.maxGuests} type="bed" />
                <IconTile title="Has Wifi" type="wifi" />
                {!hotel.selfCatering && <IconTile title="Has catering" type="cutlery" />}
                <button className="hotel__host-button" onClick={openModal}>
                  Contact Host
                </button>
                <img className="hotel__host-image" alt="Profile image of host" src={hostImage} />
              </div>
            </div>
            <EnquiriesForm onSubmit={onEnquirySubmit} price={hotel.price} />
          </section>
          {showEnquiriesForm && (
            <Modal>
              <ContactHostForm onSubmit={onConctactHostSubmit} onCancel={closeModal} />
            </Modal>
          )}
        </Fragment>
      )}
    </main>
  );
};

export default Hotel;
