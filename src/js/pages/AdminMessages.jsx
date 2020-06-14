import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import dayjs from 'dayjs';

import { enquiries, contacts } from '../api';
import { get } from '../fetch';

import TabButton from '../components/buttons/TabButton';
import AdminMessageItem from '../components/admin/AdminMessageItem';
import MessageInfoTile from '../components/icon-tile/MessageIconTile';

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const initMessages = async (createReservations, createEnquiries, setMessages) => {
  const reservationMessages = await get(enquiries).then(createReservations);
  const enquiriesMessages = await get(contacts).then(createEnquiries);

  setMessages({ reservations: reservationMessages, enquiries: enquiriesMessages });
};

const AdminMessages = () => {
  const [messages, setMessages] = useState({ reservations: [], enquiries: [] });
  const { tab } = useParams();
  const history = useHistory();

  const activeTabLabel = capitalizeFirstLetter(tab);

  const changeTab = (event) => history.push(`/admin-messages/${event.target.value}`);

  const onOverviewClick = () => history.push('/admin');

  const createReservations = (reservations) => {
    return reservations.map(({ name, checkIn, checkOut }) => ({
      name,
      subject: 'Reservation',
      message: `from ${dayjs(checkIn).format('DD/MM/YYYY')} to ${dayjs(checkOut).format('DD/MM/YYYY')}`,
    }));
  };

  const createEnquiries = (enquiries) => {
    return enquiries.map(({ name, message }) => {
      const splitMessage = message.split(':');
      const messageContainsSubject = splitMessage.length > 1;
      const subject = messageContainsSubject ? splitMessage[0] : 'Message';
      const enquiryMessage = messageContainsSubject ? splitMessage[1] : message;

      return { name, subject, message: enquiryMessage };
    });
  };

  useEffect(() => {
    initMessages(createReservations, createEnquiries, setMessages);
  }, []);

  return (
    <main className="admin-messages-main">
      <section className="admin-menu">
        <TabButton label="Overview" onClickHandler={onOverviewClick} />
        <TabButton label="Reservation" value="reservations" onClickHandler={changeTab} isActive={tab === 'reservations'} />
        <TabButton label="Enquiries" value="enquiries" onClickHandler={changeTab} isActive={tab === 'enquiries'} />
        <TabButton label="Profile" />
        <TabButton label="Customers" />
      </section>
      <section className="admin-messages">
        <div className="messages-header">
          <MessageInfoTile color="pink" title={`Overall ${activeTabLabel}`} text={messages[tab].length} icon="enquiries" />
          <MessageInfoTile color="brown" title={`Sent ${activeTabLabel}`} text={messages[tab].length} icon="messages" />
          <MessageInfoTile color="yellow" title={`New ${activeTabLabel}`} text={messages[tab].length} icon="new-enquiries" />
        </div>
        <ul className="messages-container">
          {messages[tab].map((message, index) => (
            <AdminMessageItem key={`admin-message-${message.name}-${index}`} {...message} />
          ))}
        </ul>
      </section>
    </main>
  );
};
export default AdminMessages;
