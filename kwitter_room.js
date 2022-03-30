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
     console.log("Room Name-"+Room_names);
     row="<div class=' id="+Room_names+"onclick=' redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById(output).innerHTML+=row;
           //End code
      });});}
getData();
function logingout(){
window.location="index.html"
localStorage.removeItem("user_name2")
}
function addroom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
 purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"
}
