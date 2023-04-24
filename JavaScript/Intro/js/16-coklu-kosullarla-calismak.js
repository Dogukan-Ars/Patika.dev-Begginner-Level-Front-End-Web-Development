// ************** 16-coklu-kosullarla-calismak ***************

let userName = prompt("Kullanici Adiniz: ")
let age = prompt ("Yasiniz: ")
let info = document.querySelector("#info")

if (userName && age>= 18) {
    info.innerHTML= "Ehliyet Alabilirsiniz"
}else if (!userName){
    info.innerHTML= "Kullanici Adinizi Yazmadiniz!!!"
} else if(!(age>=18)){
    info.innerHTML= "Yas Bilginizi Girmediniz ya da 18 Yaşından Kucuksunuz!!!"
}