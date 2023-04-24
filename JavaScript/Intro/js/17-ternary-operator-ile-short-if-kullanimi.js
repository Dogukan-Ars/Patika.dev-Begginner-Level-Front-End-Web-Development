// ************ 17-ternary-operator-ile-short-if-kullanimi **************

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz.

let userName = prompt("Kullanici bilginizi yaziniz")
let info = document.querySelector("#info")

// ternary kullanimi
// kosul ? dogruysa : yanlissa

info.innerHTML = `${userName.length>0?userName:"Kullanici Bilginiz Bulunamadi :("}`