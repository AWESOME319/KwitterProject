 var firebaseConfig = {
    apiKey: "AIzaSyAO6yk11XzUJ6VrhdP-NSYZ9m1F6hOMJPo",
    authDomain: "chat-app-4297d.firebaseapp.com",
    databaseURL: "https://chat-app-4297d-default-rtdb.firebaseio.com",
    projectId: "chat-app-4297d",
    storageBucket: "chat-app-4297d.appspot.com",
    messagingSenderId: "144152607239",
    appId: "1:144152607239:web:03dc5083f1540e2c7608a2",
    measurementId: "G-JYGG4JWE4S"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var user_Name=localStorage.getItem("user_name2")
document.getElementById("usernamedisplay").innerHTML="Welcome "+user_Name+" :"

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     //Start code
      //End code
      });});}
getData();
function logingout(){
window.location="index.html"
localStorage.removeItem("user_name2")
}