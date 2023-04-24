// ********* 27-form-submit-yontemi *********
//INPUT içerisinde name ibaresi olmak zorunda. Buna dikkat etmeliyiz...
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault() // default islemi engelledik
    console.log("Islem Gerceklesti")
}