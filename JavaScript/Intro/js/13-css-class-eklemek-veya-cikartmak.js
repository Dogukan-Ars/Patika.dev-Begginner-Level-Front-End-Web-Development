// ************** 13-css-class-eklemek-veya-cikartmak *************

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") // birden fazla class

greeting.classList.remove("title", "second-class", "third-class")

console.log(greeting.classList)