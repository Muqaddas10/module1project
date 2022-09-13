const enter=()=>{
    let username=document.querySelector("#username");
   
    console.log(username.value);
   alert("Welcome " + username.value);

}


function result() {
var score;
    if (document.getElementById('opt1').checked && document.getElementById('opt5').checked &&  document.getElementById('opt6').checked)  
    {
     
        var score="3";
    }
   
    if (document.getElementById('opt1').checked && document.getElementById('opt5').checked )  
    {
     
       var score="2";
    }
    
 alert (score);
}

const thankyou=()=>{
   let get=document.querySelector('#fname');
   let get2=document.querySelector("#lname");
   let get3=document.querySelector("#email");
   let get4=document.querySelector("#country");
   let get5=document.querySelector("#subject");
   

   
   alert("Thankyou! Your Response has been Recorded.");
}


console.log(get.value);
   console.log(get2.value);
   console.log(get3.value);
   console.log(get4.value);
   console.log(get5.value);
   
   
import {getAuth} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";;


    const auth=getAuth();
    const submit =()=> {
      console.log("auth");
    
    let username=document.querySelector("#un")
    let username2=document.querySelector("#password");
    let select=document.querySelector("#re"); 
    console.log(username.value);
    console.log(username2.value);
    console.log(select.value);
   }
   document.getElementById("button");
   addEventListener("click", button);
