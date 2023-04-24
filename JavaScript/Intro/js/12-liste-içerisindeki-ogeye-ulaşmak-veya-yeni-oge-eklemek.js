// ************ 12-liste-içerisindeki-ogeye-ulaşmak-veya-yeni-oge-eklemek **************

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degistirildi..."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degistirildi..."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

// ulDOM.append(liDOM) // EN SON SATIRA yeni bir satır eklememize yarayan komut.

ulDOM.prepend(liDOM) // İLK SATIRA yeni bir satır eklememize yarayan komut.