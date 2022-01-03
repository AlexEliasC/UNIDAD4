$(document).ready(function () {
    // Aplicando lo aprendido 1
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBaevnzjf7_ZrepNXTs_irEgllAStl0Lvo",
    authDomain: "fir-demo-d6ed4.firebaseapp.com",
    projectId: "fir-demo-d6ed4",
    storageBucket: "fir-demo-d6ed4.appspot.com",
    messagingSenderId: "874869253201",
    appId: "1:874869253201:web:cf9e02cf80c05b1d81c470",
    measurementId: "G-2S2WH76BP6"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
    console.log(app);  // "[DEFAULT]"
  
  
  });