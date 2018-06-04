import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import storePromise from './store';

storePromise.then(store => {
  ReactDOM.render(
    <Application store={store} />,
    document.getElementById('react-container')
  );
});
