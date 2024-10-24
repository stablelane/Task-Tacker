const taskText = document.getElementById('task-text')
const taskList = document.getElementById('task-list')

document.addEventListener('click', (e) => {
    //listening for taskSumbitBtn
    if (e.target.id === 'task-submit-btn') {
        makeTask(e)
    } 
    //listening for click on Checkbox and call strikeTask function
    else if (e.target.classList.value === 'checkbox') {
        strikeTask(e.target.id)
    }
    //listening for click on DeleteBtn and call deleteTask function
    else if (e.target.classList.value === 'delete-btn') {
        deleteTask(e.target.id)
    }
})


let taskID = 1111

function makeTask(e) {
    e.preventDefault()
    createTask(taskText.value)
    clearInput()
}
function createTask(text) {
    taskList.innerHTML += `<div id='${taskID}-task' class="task">
                                <input id='${taskID}' class='checkbox' type="checkbox">
                                <p id='${taskID}-taskID'>${text}</p>
                                <img id="${taskID}" class='delete-btn' src="icon/bin.png" alt="">
                            </div>`
    taskID++
}

function clearInput() {
    taskText.value = ''
}

function deleteTask(id) {
    document.getElementById(`${id}-task`).outerHTML = ''
}

function strikeTask(id) {
    document.getElementById(`${id}-task`).classList.toggle('strike')
}



