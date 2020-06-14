import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import AdminRoute from '../components/admin-route/AdminRoute';

//Context
import UserContext from '../contexts/UserContext';

//Authentication
import Authentication from '../authentication';

//Api
import { get } from '../fetch';
import { establishments as establishmentsUrl } from '../api';

//Components
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

//Pages
import Frontpage from './Frontpage';
import SearchResults from './SearchResults';
import Hotel from './Hotel';
import Contact from './Contact';
import HelpCenter from './HelpCenter';
import Admin from './Admin';
import AdminMessages from './AdminMessages';
import CreateEstablishment from './CreateEstablishment';

const auth = new Authentication();

const Site = () => {
  const [establishments, setEstablishments] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(auth.activeUser ?? {});

  const location = useLocation();
  const isAtFrontpage = location.pathname === '/';

  useEffect(() => {
    console.log('rerender?');
    get(establishmentsUrl).then(setEstablishments);
  }, []);

  const getEstablishmentNames = () => establishments.map((establishment) => establishment.name).sort();

  return (
    <UserContext.Provider value={{ ...loggedInUser }}>
      <Header searchSuggestions={getEstablishmentNames()} auth={auth} loginHandler={setLoggedInUser} isAtFrontpage={isAtFrontpage} />

      <Switch>
        <Route exact path="/" component={Frontpage} />
        <Route path="/search" component={() => <SearchResults establishments={establishments} />} />
        <Route path="/hotel/:hotelId" component={() => <Hotel establishments={establishments} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/help-center" component={HelpCenter} />
        <AdminRoute path="/admin" isAdmin={auth.isAdmin(loggedInUser)}>
          <Admin />
        </AdminRoute>
        <AdminRoute path="/admin-messages/:tab" isAdmin={auth.isAdmin(loggedInUser)}>
          <AdminMessages />
        </AdminRoute>
        <AdminRoute path="/create-establishment" isAdmin={auth.isAdmin(loggedInUser)}>
          <CreateEstablishment />
        </AdminRoute>
      </Switch>
      <Footer />
    </UserContext.Provider>
  );
};

export default Site;
