import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import store from './Redux/Store';
import {Loading} from './components';

// perbedaaan replace and navigate
// replace tidak menyimpan history url dan tidak bisa back pada page sebelumnya
// navigate menyimpan history url dan bisa back pada page sebelumnya
function MainApp() {
  const loading = useSelector(state => state.loading);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {loading && <Loading />}
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
