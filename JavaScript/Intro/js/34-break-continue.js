//************ 34 - Break & Continue ************

const LOREM_LIST = [
    'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing'
]

let counter = 0

// for(; counter < 10; counter++) {
//     if(counter === 5) {break} // for döngüsü çalışır ve if koşulunun içerisi true olana kadar devam eder. Ardından durur.
//     console.log(counter)
// }

// for(; counter < 10; counter++) {
//     if(counter === 5) {continue} // for döngüsü çalışır ve if koşulunun içerisi true olduğu durumu atlar. Ardından döngü çalışarak geri kalan değerleri yazmaya devam eder.
//     console.log(counter)
// }

const UL_DOM = document.querySelector('#userList')

// let index = 0
// for(; index < LOREM_LIST.length; index++) {
//     if(LOREM_LIST[index] == "dolor") {break}
//     let LI_DOM = document.createElement('li')
//     LI_DOM.innerHTML = LOREM_LIST[index]
//     UL_DOM.append(LI_DOM)
// }

let index = 0
for(; index < LOREM_LIST.length; index++) {
    if(LOREM_LIST[index] == "dolor") {continue}
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}