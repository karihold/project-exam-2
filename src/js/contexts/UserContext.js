import React, { createContext } from 'react';

const UserContext = createContext({ username: '', loggedIn: false });

export default UserContext;
