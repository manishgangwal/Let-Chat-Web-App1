const firebaseConfig = {
      apiKey: "AIzaSyB6NqmNFRTA8-J36HbfXBzCHuqmLLHDhnw",
      authDomain: "let-chat-web-app-e67b7.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-e67b7-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-e67b7",
      storageBucket: "let-chat-web-app-e67b7.appspot.com",
      messagingSenderId: "950322601434",
      appId: "1:950322601434:web:7fcbf3575c69cd6e43b4e3",
      measurementId: "G-25QVW75KLQ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
