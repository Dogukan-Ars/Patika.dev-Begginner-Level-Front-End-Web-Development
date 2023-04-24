// ********** DOM Icerisinden Oge Secimi *********

// let title = document.getElementsByTagName('h2')
let title = document.getElementById('title')
title.innerHTML = "Degisen Bilgi"
console.log(title.innerHTML)


// let link = document.querySelector("ul#list>li>a")
let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " degisti"
link.style.color = "red"
link.classList.add('btn')
