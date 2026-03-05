function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.getElementById("pageTitle").innerText =
    document.getElementById(id).querySelector("h2").innerText;
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

/* Timer Logic */
function updateTimers() {
  const start = new Date("2026-01-04");
  const now = new Date();
  const diff = now - start;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("timeSince").innerText = days + " days";
  document.getElementById("sinceStart").innerText = days + " days";
}

setInterval(updateTimers, 1000);
updateTimers();

/* Pay Calculator */
function calculatePay() {
  const hourly = parseFloat(document.getElementById("hourly").value) || 0;
  const hours = parseFloat(document.getElementById("hours").value) || 0;

  const weekly = hourly * hours;
  const monthly = weekly * 4;
  const takeHome = monthly * 0.85;

  document.getElementById("payResult").innerText =
    "Monthly (after est. tax): $" + takeHome.toFixed(2);
}

/* PASSWORD TOGGLE */
function togglePassword(){
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

/* LOGIN LOADER */
function showLoader(show){
  document.getElementById("loginLoader").classList.toggle("hidden", !show);
  document.getElementById("loginText").style.display = show ? "none" : "inline";
}

/* AUTH */
function login(){
  showLoader(true);
  auth.signInWithEmailAndPassword(email.value,password.value)
  .catch(e=>{
    document.getElementById("authError").innerText = e.message;
  })
  .finally(()=>showLoader(false));
}

function signup(){
  auth.createUserWithEmailAndPassword(email.value,password.value)
  .catch(e=>{
    document.getElementById("authError").innerText = e.message;
  });
}
