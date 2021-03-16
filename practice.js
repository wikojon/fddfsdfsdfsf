
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAFIebeEXtg8VoatepATbfwkKUxmcPhlzI",
    authDomain: "kwitter-5f31f.firebaseapp.com",
    databaseURL: "https://kwitter-5f31f-default-rtdb.firebaseio.com",
    projectId: "kwitter-5f31f",
    storageBucket: "kwitter-5f31f.appspot.com",
    messagingSenderId: "609402790243",
    appId: "1:609402790243:web:8706c528867fe6efe3f356"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
{
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
