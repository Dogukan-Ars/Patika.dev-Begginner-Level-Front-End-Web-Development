// ******** 25-localStorage-icerisine-isimler-yazma ***********

let user = {userName: "dogukanars", isActive: true}
console.log(user)
localStorage.setItem('userInfo', JSON.stringify(user)) //stringify ile complex bir yapıyı string'e çevirdik

let userInfo = localStorage.getItem('userInfo') // bilgiyi al
userInfo = JSON.parse(userInfo) // string yapıyı tekrardan JSON yapısına çevirmek için parse etmeliyiz.
console.log(userInfo)