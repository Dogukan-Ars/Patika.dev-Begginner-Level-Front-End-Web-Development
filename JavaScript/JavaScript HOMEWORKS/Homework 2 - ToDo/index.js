const form = document.querySelector(".todo_form")
const input = document.querySelector(".todo_input")
const todo_container = document.querySelector(".todo_container")
let todoDeletes;

const addHTML = (todo) => {
    const ul = document.createElement("ul")
    ul.classList.add("todo_list")

    const li = document.createElement("li")
    li.textContent = todo.text
    li.classList.add("todo_list")
    li.addEventListener("click", () => {
        li.classList.toggle('checked')
    })

    const todoDelete = document.createElement("span")
    todoDelete.classList.add("delete")
    todoDelete.textContent = "\u00D7"

    // todo_container div parent-child relations    
    li.appendChild(todoDelete)
    ul.appendChild(li)
    todo_container.appendChild(ul)
}

const startConf = () => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(!todos){
        localStorage.setItem("todos", JSON.stringify([]))
    } else {
        todos.forEach(todo => {
            addHTML(todo)
        });
        todoDeletes = document.querySelectorAll(".delete")
    }
}
startConf()

const addTodo = (e) => {
    e.preventDefault()

    const inputVal = input.value

    const todo = {
        text: inputVal,
        isCompleted: false
    }

    if(inputVal == null || inputVal.trim() === "" || inputVal === "") {
        $(document).ready(function(){
            $(".todo_btn").click(function(){
            $('.toast').toast('show');
            });
        });
        return
    } else {
        inputVal
    }

    const todos = JSON.parse(localStorage.getItem("todos"))
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))

    addHTML(todo)
    form.reset()
    
}

const todo_delete = (e) => { 
    const todo = e.target.parentElement
    const text = todo.firstChild.textContent
    // we call all todos again
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos = todos.filter(td => td.text != text)
    localStorage.setItem("todos", JSON.stringify(todos))
    
    todo.remove()
}

form.addEventListener("submit", addTodo)
todoDeletes.forEach(d => d.addEventListener("click", todo_delete))