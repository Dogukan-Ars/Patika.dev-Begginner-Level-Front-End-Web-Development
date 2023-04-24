// ************** 22-dom-etkinlikleriyle-calismak ************

let greeting = document.querySelector("#greeting")
// greeting.addEventListener("click", domClick)
greeting.addEventListener("mouseover", domClick)


const domClick = () => {
    console.log("etkilesime girildi")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
    //console.log(this.innerHTML = "bilgi degisti")
}
