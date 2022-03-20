function login(){
var user_name= document.getElementById("username").value
localStorage.setItem("user_name2",user_name)
window.location="kwitter_room.html"
}