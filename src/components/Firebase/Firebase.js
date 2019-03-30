// import app from 'firebase/app';
import firebase from 'firebase';

const config = {

    apiKey: "AIzaSyAqfo-DpCDU1aq9oW9kAU6foBXCUgWVDBI",
    authDomain: "hackathon1-d30d4.firebaseapp.com",
    databaseURL: "https://hackathon1-d30d4.firebaseio.com",
    projectId: "hackathon1-d30d4",
    storageBucket: "hackathon1-d30d4.appspot.com",
    messagingSenderId: "917697668184"
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

// REACT_APP_API_KEY=
// AIzaSyAqfo-DpCDU1aq9oW9kAU6foBXCUgWVDBI
// REACT_APP_AUTH_DOMAIN=hackathon1-d30d4.firebaseapp.com
// REACT_APP_DATABASE_URL=https://hackathon1.firebaseio.com
// REACT_APP_PROJECT_ID=hackathon1-d30d4
// REACT_APP_STORAGE_BUCKET=hackathon1-d30d4.appspot.com
// REACT_APP_MESSAGING_SENDER_ID=917697668184

firebase.initializeApp(config);

export default firebase;