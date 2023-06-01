const firebaseConfig = {
      apiKey: "AIzaSyCtn-bI1-UR3Uh2dypeYH5OTZuCPQNQ9aM",
      authDomain: "kwitter-3b00f.firebaseapp.com",
      databaseURL: "https://kwitter-3b00f-default-rtdb.firebaseio.com",
      projectId: "kwitter-3b00f",
      storageBucket: "kwitter-3b00f.appspot.com",
      messagingSenderId: "1097840773674",
      appId: "1:1097840773674:web:e28f1ee5cb209080aa1153"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
