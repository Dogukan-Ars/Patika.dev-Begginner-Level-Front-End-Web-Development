// ************** 20-fonksiyonlara-parametreler-atamak-ve-fonksiyondan-geridonus-alma **************

// Temel Kurallar:

// 1: Bir fonsiyon bir veya birden fazla parametre alabilir veya hic almayabilir.
// 2: Bir fonksiyon disari bilgi gonderebilir (return) veya göndermeyebilir.
// 3: Mumkunse fonksiyonun bagimliliklarini azaltmak gerekir.



let firstName = "Lorem" // bunun yerine greetings() fonksiyonunun içerisine yazarak dışa bağımlılığı azaltabiliriz.

function greetings(firstName="",lastName=""){ // default parametre aliyor...
    // console.log(`Merhaba ${firstName ? firstName : ""}`)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
} 


console.log(firstName) // degisken bilgisi
greetings() // fonksiyona parametre göndermedik??
greetings("Parametre") // parametre gönderilmiş hali
/* let info = greetings("Parametre") // undefined
console.log(info) */

function greetings2(firstName, lastName){
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
// let info = "deneme" // ?????
console.log(greetingsInfo)

function domIdWriteInfo(id,info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDDDD</span>`

domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greetings2("Lorem", "Ipsum"))
