function showPage(id){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))

document.getElementById(id).classList.add("active")

}

function startTimer(){

const start=new Date("2026-01-04")

setInterval(()=>{

const now=new Date()

const diff=now-start

const days=Math.floor(diff/(1000*60*60*24))

document.getElementById("jobCorpsTime").innerText=days+" days"

},1000)

}

startTimer()

function calculatePay(){

const hourly=document.getElementById("hourly").value

const hours=document.getElementById("hours").value

const weekly=hourly*hours

const monthly=weekly*4

const savings=monthly*0.2

document.getElementById("payOutput").innerHTML=

"Weekly: $"+weekly+
"<br>Monthly: $"+monthly+
"<br>Suggested Savings: $"+savings

}

function calculateBudget(){

let rent=Number(document.getElementById("rent").value)||0
let food=Number(document.getElementById("food").value)||0
let phone=Number(document.getElementById("phone").value)||0
let rides=Number(document.getElementById("rides").value)||0
let savings=Number(document.getElementById("savings").value)||0
let emergency=Number(document.getElementById("emergency").value)||0

let total=rent+food+phone+rides+savings+emergency

document.getElementById("budgetOutput").innerText="Total Budget: $"+total

}

function updateSavings(){

let s=document.getElementById("savingsInput").value

document.getElementById("savingsOutput").innerText="$"+s+" saved"

let percent=(s/1000)*100

document.getElementById("savingsBar").style.width=percent+"%"

}

function suggestion(){

const ideas=[

"Apply to 3 jobs this week",
"Save $50 this week",
"Practice typing daily",
"Work on resume formatting",
"Research trailer repairs"

]

let r=ideas[Math.floor(Math.random()*ideas.length)]

document.getElementById("suggestion").innerText=r

}

suggestion()

function weather(){

fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7&longitude=-74&current_weather=true")

.then(r=>r.json())

.then(data=>{

let c=data.current_weather.temperature

let f=c*9/5+32

document.getElementById("weather").innerText=Math.round(f)+"°F"

})

}

weather()

function addTask(){

let input=document.getElementById("taskInput")

let li=document.createElement("li")

li.innerText=input.value

document.getElementById("taskList").appendChild(li)

input.value=""

}

function addJob(){

let company=document.getElementById("jobCompany").value
let title=document.getElementById("jobTitle").value

let li=document.createElement("li")

li.innerText=company+" - "+title

document.getElementById("jobList").appendChild(li)

}
