// FIREBASE CONFIG
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

// PASSWORD TOGGLE
function togglePassword(){
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

// LOGIN
function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email,password)
  .catch(error=>{
    document.getElementById("authError").innerText = error.message;
  });
}

// SIGNUP
function signup(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email,password)
  .catch(error=>{
    document.getElementById("authError").innerText = error.message;
  });
}

// LOGOUT
function logout(){
  auth.signOut();
}

// AUTH STATE
auth.onAuthStateChanged(user=>{
  if(user){
    document.getElementById("authSection").style.display="none";
    document.getElementById("appSection").style.display="flex";
    startTimer();
  } else {
    document.getElementById("authSection").style.display="flex";
    document.getElementById("appSection").style.display="none";
  }
});

// PAGE SWITCH
function showPage(id){
  document.querySelectorAll(".page").forEach(page=>{
    page.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// TIMER
function startTimer(){
  const startDate = new Date("2026-01-04");

  setInterval(()=>{
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));
    document.getElementById("timeSince").innerText =
      days + " days since Job Corps start";
  },1000);
}

// PAY CALCULATOR
function calculatePay(){
  const hourly = parseFloat(document.getElementById("hourly").value);
  const hours = parseFloat(document.getElementById("hours").value);

  const weekly = hourly * hours;
  const monthly = weekly * 4;

  document.getElementById("payOutput").innerText =
    "Estimated Monthly Income: $" + monthly.toFixed(2);
}
