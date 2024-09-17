import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCB1KzJhjbDZk4Dz6appQTHt14C80kRu4A',
  authDomain: 'relax-together.firebaseapp.com',
  databaseURL:
    'https://relax-together-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'relax-together',
  storageBucket: 'relax-together.appspot.com',
  messagingSenderId: '114954766131',
  appId: '1:114954766131:web:f2fb60bed769bf7949e046',
  measurementId: 'G-S7S4ECB2SJ',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
