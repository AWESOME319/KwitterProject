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
var user_Name=localStorage.getItem("user_Name")
document.getElementById("usernamedisplay").innerHTML="Welcome "+user_Name+" :"

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     //Start code
     console.log("Room Name-"+room_names);
     row="<div class=' id="+room_Names+"onclick=' redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById(output).innerHTML+=row;
           //End code
      });});}
getData();
function logingout(){
window.location="index.html"
localStorage.removeItem("user_Name")
}
function addroom()
{
  room_Name=document.getElementById("room_Name").value;
  firebase.database().ref("/").child(room_Name).update({
 purpose:"adding room name"
  });
  localStorage.setItem("room_Name",room_Name);
  window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_Name",name);
  window.location="kwitter_page.html"
}
