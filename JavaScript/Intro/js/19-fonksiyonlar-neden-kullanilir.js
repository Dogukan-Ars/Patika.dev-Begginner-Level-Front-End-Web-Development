// ************ 19-fonksiyonlar-neden-kullanilir ************

// *** Ilk Fonsiyonumuzu Tanimlamak ***

function hello(){
    console.log("Merhaba!")
    helloWorld()
}

function helloWorld(){
    console.log("Hello World!")
}


hello() // calistir islemi () ile gelmektedir

/* HATA ALABILIRIZ...
function userCheck (){
    if (userName && age>= 18) {
        info.innerHTML= "Ehliyet Alabilirsiniz"
    }else if (!userName){
        info.innerHTML= "Kullanici Adinizi Yazmadiniz!!!"
    } else if(!(age>=18)){
        info.innerHTML= "Yas Bilginizi Girmediniz ya da 18 Yaşından Kucuksunuz!!!"
    }
}*/


// let x = myfunction(3,4)

// function myfunction(a,b){
//     return a*b;
// }