import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// IF YOU WISH TO USE REACT ROUTER uncomment lines 7,19,21
import { BrowserRouter } from 'react-router-dom';

// Provider is a react component which wraps your app and 'provides' your redux store to the rest of your application
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducer'

//function which returns store
// import configureStore from './store/configureStore'

// const store = configureStore()
let store = createStore(reducer);
// console.log("INDEX", store.getState())
// console.log('store', store)
// console.log('state', store.getState())

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group("DISPATCH");
    console.log('%c state before dispatch', 'color: red', store.getState());
    const returnValue = rawDispatch(action);
    console.log('%c state after dispatch', 'color: blue', store.getState());
    console.groupEnd();
    return returnValue;
  }
}

store.dispatch = addLoggingToDispatch(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
