function openPage(page){

document.querySelectorAll(".page").forEach(p=>p.style.display="none")

document.getElementById(page).style.display="block"

}

openPage("dashboard")

function calculatePay(){

let hourly=document.getElementById("hourly").value
let hours=document.getElementById("hours").value

let weekly=hourly*hours
let monthly=weekly*4
let afterTax=monthly*0.8

document.getElementById("payResult").innerText=

"Weekly: $"+weekly+
" | Monthly: $"+monthly+
" | After Tax: $"+afterTax

}

function addTask(){

let input=document.getElementById("taskInput")

let li=document.createElement("li")

li.textContent=input.value

document.getElementById("taskList").appendChild(li)

input.value=""

}

function addCountdown(){

let name=document.getElementById("countdownName").value
let date=new Date(document.getElementById("countdownDate").value)

let now=new Date()

let diff=date-now

let days=Math.floor(diff/(1000*60*60*24))

let div=document.createElement("div")

div.innerText=name+" : "+days+" days"

document.getElementById("countdownList").appendChild(div)

}

function jobCorpsTimer(){

let start=new Date("2026-01-04")

let now=new Date()

let diff=now-start

let days=Math.floor(diff/(1000*60*60*24))

document.getElementById("sinceStart").innerText=days+" days"

document.getElementById("jobCorpsTime").innerText=days+" days"

}

setInterval(jobCorpsTimer,1000)
