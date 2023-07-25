// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBFEZc80RYNYc2xNIDojLFczRX_F2qTduo',
  authDomain: 'my-doctor-01-54ae7.firebaseapp.com',
  projectId: 'my-doctor-01-54ae7',
  storageBucket: 'my-doctor-01-54ae7.appspot.com',
  messagingSenderId: '524580706389',
  appId: '1:524580706389:web:74ad62fab023f15fde1cdc',
  measurementId: 'G-DGRX1KTE7W',
  databaseUrl: 'https://my-doctor-01-54ae7-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(Fire);
export default app;
