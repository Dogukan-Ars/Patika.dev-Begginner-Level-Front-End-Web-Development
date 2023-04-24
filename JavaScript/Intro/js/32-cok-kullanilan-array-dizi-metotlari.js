// ******** 32-cok-kullanilan-array-dizi-metotlari **********

let items = [1, 2, 3, 4, 5]

// Array icinde Array:

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length) // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log(items[0][0]) // ayse bilgisine ulastik


// Array icerisinden oge ayirmak -> splice (pos, item?)
let newItems = items.splice(1, 5)

console.log("newItems: ", newItems)
console.log("items: ", items)

// Array icersindeki ogenin index bilgisini bulmak -> indexOf ('value')
items.unshift("lorem")
items.push("ipsum")

console.log( items.indexOf("ipsum") )

// Array kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)

console.log("kopyalandiktan sonraki durum")
copyItems = items.slice() // kopyalama yapildi
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)

let es6Items = [...items] // es6 ve sonrasinde gelen kopyalama islemi
console.log(es6Items)

// Iki Array bilgisini birlestirmek -> [...ES6, ...ES6]

let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapisini birlestirmek
console.log(allUsers)

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

// Istedigimiz index bilgisine oge eklemek -> splice(index, 0, value)

allUsers.splice(allUsers.length - 1, 0, "Melissa")
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Melissa")
console.log(allUsers)