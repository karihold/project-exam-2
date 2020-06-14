import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Site from './pages/Site';

const appRoot = document.querySelector('#app-root');

const App = () => {
  return (
    <Router>
      <Site />
    </Router>
  );
};

render(<App />, appRoot);
