import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import Spinner from './utility/Spinner/Spinner';

// persist setup
const persistConfig={
  key:'root',
  storage,
  stateReconciler:autoMergeLevel2,
  blacklist:['siteModal']
}
const persistedReducer=persistReducer(persistConfig,rootReducer)
const theStore=applyMiddleware(reduxPromise)(createStore)(persistedReducer);
const persistor = persistStore(theStore)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={theStore}>
      <PersistGate loading={<Spinner/>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
);
