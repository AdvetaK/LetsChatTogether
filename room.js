const firebaseConfig = {
      apiKey: "AIzaSyBhGn-uT9HjH6fD7jxuaQ11KovFRimx828",
      authDomain: "letschattogether-971c4.firebaseapp.com",
      projectId: "letschattogether-971c4",
      storageBucket: "letschattogether-971c4.appspot.com",
      messagingSenderId: "244471206970",
      appId: "1:244471206970:web:397ef6898109de0a66d103",
      measurementId: "G-381B94K9NJ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room"
          });
    
          localStorage.setItem("room_name", room_name);
    
          //window.location.replace("kwitter_page.html");
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = " ";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
          console.log("room name: "+Room_names);
          row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
          //End code
    });});}
    
    getData();
    
    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }
    
    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
    
    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location.replace("index.html");
    }