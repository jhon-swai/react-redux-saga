import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './hooks/store';
import ShowUsers from './components/ShowUsers';

function App() {
  return (
    <Provider store={store}>
      <ShowUsers />
    </Provider>
  );
}

export default App;
