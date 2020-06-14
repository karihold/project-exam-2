import React, { useEffect, useState, Fragment } from 'react';

import dayjs from 'dayjs';

import { enquiries, contacts } from '../api';
import { get } from '../fetch';

import OverviewPanel from '../components/admin/OverviewPanel';
import AdminChart from '../components/admin/AdminChart';
import AdminTile from '../components/icon-tile/AdminTile';

const Admin = ({}) => {
  const [latestEnquiries, setLatestEnquiries] = useState([]);
  const [latestContacts, setLatestContacts] = useState([]);

  const getLastThreeItems = (arr) => arr.reverse().slice(0, 3);

  const createEnquiries = (enquiries) => {
    const latest = getLastThreeItems(enquiries);
    const bookings = latest.map(
      (enquiry) => `${enquiry.name}: ${dayjs(enquiry.checkIn).format('DD/MM/YYYY')} - ${dayjs(enquiry.checkIn).format('DD/MM/YYYY')}`
    );
    setLatestEnquiries(bookings);
  };

  const createContacts = (contacts) => {
    const latest = getLastThreeItems(contacts);
    const messages = latest.map((message) => `${message.name}: ${message.message}`);
    setLatestContacts(messages);
  };

  useEffect(() => {
    get(enquiries).then(createEnquiries);
    get(contacts).then(createContacts);
  }, []);

  return (
    <main className="admin-main">
      <AdminChart />
      <section className="admin-overview-section">
        <OverviewPanel title="Latest Bookings" items={latestEnquiries} link="/admin-messages/reservations" />
        <OverviewPanel title="Contacts" items={latestContacts} link="/admin-messages/enquiries" />
      </section>
      <section className="admin-helpers-section">
        <AdminTile color="pink" title="Bounce Rate:" text="40%" />
        <AdminTile color="brown" title="Visits to Page:" text="500" />
        <AdminTile color="yellow" text="Create New" showPlusIcon link="/create-establishment" />
      </section>
    </main>
  );
};

export default Admin;
