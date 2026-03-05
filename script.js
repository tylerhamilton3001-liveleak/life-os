// ================= FIREBASE =================
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
const db = firebase.firestore();

// ================= PASSWORD TOGGLE =================
function togglePassword(){
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

// ================= LOGIN =================
function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email,password)
  .then(()=> {
    document.getElementById("authError").innerText = "";
  })
  .catch(error=>{
    document.getElementById("authError").innerText = error.message;
  });
}

// ================= SIGNUP =================
function signup(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email,password)
  .then(()=> {
    document.getElementById("authError").innerText = "Account created. You can log in now.";
  })
  .catch(error=>{
    document.getElementById("authError").innerText = error.message;
  });
}

// ================= LOGOUT =================
function logout(){
  auth.signOut();
}

// ================= AUTH STATE =================
auth.onAuthStateChanged(user=>{
  if(user){
    document.getElementById("authSection").style.display="none";
    document.getElementById("appSection").style.display="flex";
    startTimer();
    generateSuggestions();
  } else {
    document.getElementById("authSection").style.display="flex";
    document.getElementById("appSection").style.display="none";
  }
});

// ================= PAGE SWITCH =================
function showPage(id){
  document.querySelectorAll(".page").forEach(page=>{
    page.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// ================= TIMER =================
function startTimer(){
  const startDate = new Date("2026-01-04");

  setInterval(()=>{
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));
    document.getElementById("timeSince").innerText =
      days + " days since Job Corps started";
  },1000);
}

// ================= PAY CALCULATOR =================
function calculatePay(){
  const hourly = parseFloat(document.getElementById("hourly").value);
  const hours = parseFloat(document.getElementById("hours").value);

  if(!hourly || !hours){
    document.getElementById("payOutput").innerText = "Enter valid numbers.";
    return;
  }

  const weekly = hourly * hours;
  const monthly = weekly * 4;
  const yearly = monthly * 12;
  const save20 = monthly * 0.2;

  document.getElementById("payOutput").innerHTML =
    "Monthly: $" + monthly.toFixed(2) +
    "<br>Yearly: $" + yearly.toFixed(2) +
    "<br>20% Savings: $" + save20.toFixed(2);
}

// ================= SMART SUGGESTIONS =================
function generateSuggestions(){
  const suggestions = [
    "Apply to 3 remote jobs this week.",
    "Save at least $50 this week.",
    "Research trailer insulation repair.",
    "Practice typing for 20 minutes daily.",
    "Look into court clerk positions nearby.",
    "Create a shared savings account.",
    "Track expenses daily for 7 days."
  ];

  const random = suggestions[Math.floor(Math.random()*suggestions.length)];
  console.log("Smart Suggestion:", random);
}

fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7&longitude=-74&current_weather=true")
.then(res=>res.json())
.then(data=>{
  const temp = data.current_weather.temperature;
  document.getElementById("weather").innerText =
    "Current temperature: " + temp + "°C";
})
.catch(()=> {
  document.getElementById("weather").innerText = "Weather unavailable.";
});
