// ************ 38- Array Map Kullanimi *************

const USERS = ["AYSE", "MehMet", "TugCE", "AkSeL"]

// userName icinde orijinal isim kalsin,
// shortName icinde ilk harf buyuk . (A.)
// newName icindeki ilk harf buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS.map( user => user.toLowerCase())
console.log(NEW_USERS)

// const USERS_OBJECT = USERS.map(item =>
//     {
//         return {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
//     }
// )
// EĞER OBJE DÖNDÜRÜYORSAK, RETURN KULLANMADAN AŞAĞIDAKİ ŞEKİLDE MAP METODU KULLANABİLİRİZ. AKSİ HALDE RETURN YAZMALIYIZ.
const USERS_OBJECT = USERS.map(item =>({
    userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
})
)
console.log(USERS_OBJECT)