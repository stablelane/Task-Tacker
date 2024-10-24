const taskSubmitBtn = document.getElementById('task-submit-btn')
const taskText = document.getElementById('task-text')
const taskList = document.getElementById('task-list')


//task creation
taskSubmitBtn.addEventListener('click',makeTask)
let taskID = 1111

function makeTask(e) {
        e.preventDefault()
        createTask(taskText.value)
        clearInput()
}

function createTask(text) {
    taskList.innerHTML +=  `<div id='${text}-task' class="task">
                                <input id='${text}-checkbox' class='checkbox' type="checkbox">
                                <p id='${text}-text'>${text}</p>
                                <img id="${text}-delete" class='delete-btn' src="icon/bin.png" alt="">
                            </div>`
    addTaskBtnFunc(text)
}

function clearInput() {
    taskText.value = ''
}

function addTaskBtnFunc(id) {
    const checkbox = document.querySelectorAll('.checkbox')
    checkbox.forEach(item => item.addEventListener('click', () => {
        document.getElementById(`${id}-text`).classList.add('strike')
    }))
    const deleteBtn = document.querySelectorAll('.delete-btn')
    deleteBtn.forEach(item => item.addEventListener('click', () => {
        document.getElementById(`${id}-task`).outerHTML = ''
    }))
 
}


