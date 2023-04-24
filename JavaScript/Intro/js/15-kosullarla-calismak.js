// ************* 15-kosullarla-calismak *************

let username = prompt("Kullanici Adinizi Giriniz: ")
// Eger Kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0){console.log(username)} degilse {console.log("Bilgi Yok!!!")}
// if(username.length > 0){console.log(username)} else {console.log("Bilgi Yok!!!")}

if (username.length > 0) { // if kismi her zaman true ise calisir
    console.log(`Kullanici Bilginiz ${username}`)
} else {
    console.log("Bilgi Yok!!!")
}

// username.length > 0 ? console.log(`Kullanici Bilginiz ${username}`) : console.log("Bilgi Yok!!!") şeklinde yazılabilir.