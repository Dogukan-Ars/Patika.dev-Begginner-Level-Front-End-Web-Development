// ************* 07-template-literals-kullanimi.js ***************
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username= "Dogukan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hosgeldin.. 

Mail adresin: ${email}

kisa isminiz: ${username[0]}.

mail adresinin uzunluğu: ${email.length}

borcunuz: ${(2+3)*10} TL

Gunun saat bilgisi: ${new Date().getHours()}
`

console.log(info)