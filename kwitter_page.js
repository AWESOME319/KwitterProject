//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC-2Farc5nSlMwi5_apkw7QhxwtIbCoIKE",
      authDomain: "kwitter-8f8db.firebaseapp.com",
      databaseURL: "https://kwitter-8f8db-default-rtdb.firebaseio.com",
      projectId: "kwitter-8f8db",
      storageBucket: "kwitter-8f8db.appspot.com",
      messagingSenderId: "339956527081",
      appId: "1:339956527081:web:bf881c0699ed41580da578",
      measurementId: "G-KVW35GEB8Z"
    };
    
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_Name=localStorage.getItem("user_Name");
  room_Name=localStorage.getItem("room_Name");
function getData() { firebase.database().ref("/"+room_Name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_Name).push({
            name:user_Name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
