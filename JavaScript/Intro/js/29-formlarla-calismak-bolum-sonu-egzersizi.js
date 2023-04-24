// ************ 29-formlarla-calismak-bolum-sonu-egzersizi ************

/*
1: Formu Sec
2: Input bilgisini UL icerisine ekle
3: Form icerisindeki bilgiyi sifirla
4: Eger formda bilgi girilmezse kullanıcıyı uyar
*/ 

let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (title, message, className ="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>`


function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value) // gonderdikten sonra sifirladik
        USER_NAME.value = ""
        SCORE.value =""
    } else{
        alertDOM.innerHTML = alertFunction("Baslik Bilgisi: ", "Eksik bilgi girdiniz", "danger")
    }
}

/*
<li class="list-group-item d-flex justify-content-between align-items-center">
    cras justo odio
    <span class="badge bg-primary rounded-pill">14</span>
</li>
*/

let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>`

    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
        )
    userListDOM.append(liDOM)
}

