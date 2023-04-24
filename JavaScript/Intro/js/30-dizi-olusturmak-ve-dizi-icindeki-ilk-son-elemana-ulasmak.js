// ************ 30-dizi-olusturmak-ve-dizi-icindeki-ilk-son-elemana-ulasmak **********
// Array -> Dizilerle calismak

// Array olusturmak

let domain = "kodluyoruz"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] // bos liste (bir form varsa ve ben elemanları hızlı bir şekilde icerisine eklemek istiyorsam kullanabilirim)

// Array icerisindeki eleman/oge sayisini ogrenmek
console.log(  // document.querySelector('#info').innerHTML = items.length
    items.length
)

// Array icindeki ilk elemanın cagrilmasi
console.log(items[0])

// Array icindeki ortadaki elemanin cagirilmasi
console.log(
    "ortadaki eleman : ",
    items [Math.floor(items.length / 2)]
)

// Array icindeki son elemanin cagirilmasi
console.log(items[items.length - 1])

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(
    typeof(items) // object olarak cikti aliyoruz
)

console.log(
    Array.isArray(items)
)

// hangileri isArray -> True vericek ?

console.log("[] : ", Array.isArray([])) // -> true
console.log("1 : ", Array.isArray(1)) // -> false
console.log("true : ", Array.isArray(true)) // -> false



