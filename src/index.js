import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route, Routes,
  Link,
} from "react-router-dom";
import UserManager from './containers/User/UserManager'
import Login from './containers/Auth/Login'
//setup Redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import config from './store/reducers/config'
// import { persistor } from './store/reducers/rootReducer'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: <UserManager />
      },



    ]
  },
  {
    path: "login",
    element: <Login />,
  },


]);

const { reduxStore, persistor } = config()

const root = ReactDOM.createRoot(document.getElementById('root'));
// const reduxStore = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
