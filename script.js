const firebaseConfig = {

apiKey: "AIzaSyCjZHXDbRPp1YqRFl5RhYxjaBQr7iNW7Bo",
authDomain: "life-os-63da5.firebaseapp.com",
projectId: "life-os-63da5",
storageBucket: "life-os-63da5.firebasestorage.app",
messagingSenderId: "207532585286",
appId: "1:207532585286:web:d18c8067300e5d1c267547"

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function login(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

auth.signInWithEmailAndPassword(email,password)
.catch(e=>{

document.getElementById("authError").innerText=e.message;

});

}

function signup(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

auth.createUserWithEmailAndPassword(email,password)
.catch(e=>{

document.getElementById("authError").innerText=e.message;

});

}

function logout(){

auth.signOut();

}

auth.onAuthStateChanged(user=>{

if(user){

document.getElementById("authSection").style.display="none";
document.getElementById("appSection").style.display="flex";

startTimer();
weather();
suggestion();

}else{

document.getElementById("authSection").style.display="flex";
document.getElementById("appSection").style.display="none";

}

});

function showPage(id){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));

document.getElementById(id).classList.add("active");

}

function startTimer(){

const start=new Date("2026-01-04");

setInterval(()=>{

const now=new Date();
const diff=now-start;

const days=Math.floor(diff/(1000*60*60*24));

document.getElementById("jobCorpsTime").innerText=days+" days";

},1000);

}

function calculatePay(){

const hourly=document.getElementById("hourly").value;
const hours=document.getElementById("hours").value;

const weekly=hourly*hours;
const monthly=weekly*4;
const save=monthly*0.2;

document.getElementById("payOutput").innerHTML=

"Weekly: $"+weekly+
"<br>Monthly: $"+monthly+
"<br>Suggested Savings: $"+save;

}

function updateSavings(){

const s=document.getElementById("savingsInput").value;

document.getElementById("savingsOutput").innerText="Saved $"+s;

}

function suggestion(){

const ideas=[

"Apply to 3 jobs this week",

"Save $50 this week",

"Practice typing daily",

"Research trailer repairs",

"Work on resume"

];

const r=ideas[Math.floor(Math.random()*ideas.length)];

document.getElementById("suggestion").innerText=r;

}

function weather(){

fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7&longitude=-74&current_weather=true")

.then(r=>r.json())

.then(data=>{

let c=data.current_weather.temperature;

let f=c*9/5+32;

document.getElementById("weather").innerText=Math.round(f)+"°F";

});

}

function addTask(){

const input=document.getElementById("taskInput");

const li=document.createElement("li");

li.innerText=input.value;

document.getElementById("taskList").appendChild(li);

input.value="";

}

function addJob(){

const company=document.getElementById("jobCompany").value;

const title=document.getElementById("jobTitle").value;

const li=document.createElement("li");

li.innerText=company+" - "+title;

document.getElementById("jobList").appendChild(li);

}
