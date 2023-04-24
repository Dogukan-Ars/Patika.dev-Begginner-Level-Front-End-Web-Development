// ********** 33 - For Loop **********

// for ([StartingAttend]; [conditionals]; [increaseOrDecrease]) {
//     thins to do
// }

let users = ["Lorem", "Ipsum", "Dolor"]

// first utilization
// for (let index = 0; index < 10; index++){
//     console.log(index)
// }

// or second way to use like this
// let index = 0
// for (; index < 10; index++){
//     console.log(index)
// }

const userListDOM = document.querySelector("#userList")
for(let index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}