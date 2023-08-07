import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import genreReducer from "./components/features/genre";
import optionReducer from "./components/features/optionSlice";
import userReducer from "./components/features/userSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import { combineReducers } from '@reduxjs/toolkit';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from 'redux-persist'




const persistConfig = {
  key: "root",
  version:"1",
  storage
};



const reducer = combineReducers({

  genre: genreReducer,
  options: optionReducer,
  user: userReducer,

});

const persistReducers = persistReducer(persistConfig, reducer);



const store = configureStore({
  reducer:persistReducers
})

let persistor  = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate> 
    </Provider>

    
  </React.StrictMode>
);

