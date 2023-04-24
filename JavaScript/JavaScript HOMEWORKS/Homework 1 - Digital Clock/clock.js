setInterval(myTimer,1000)

function myTimer(){
    const date = new Date()
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = days[d.getDay()];
    
    document.getElementById("myClock").innerHTML = date.toLocaleTimeString() + " " + day       
}

let person = prompt("Please enter your name:")
let myName = document.querySelector("#myName")
myName.innerHTML = `${person}`