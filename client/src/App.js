import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import NavBar from './components/AppNav';
import ShoppingList from './components/ShoppingList';
import {Provider} from 'react-redux';
import store from './store';

export default () => {
  return (
    <Provider store={store}>
      <div className="app">
        <NavBar></NavBar>
        <ShoppingList></ShoppingList>
      </div>
    </Provider>
  )
}