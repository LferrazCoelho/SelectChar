import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store'

import './App.css';
import Main from './Main'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Main />
      </Fragment>
    </Provider>
  );
}

export default App;
