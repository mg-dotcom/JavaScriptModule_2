import {TodoList} from '../lib/todoManagement.js'
import {showTodoItem,showNumberOfDone,showNumberOfNotDone,removeTodoItem} from '../UI/todoList.js'

const todoManagement=TodoList()

function  addTodoHandler(){
    const inputValue=document.querySelector('input').value

    if(inputValue.trim().length!==0){
        const todoId= todoManagement.addTodo(undefined,inputValue,undefined)
        // localStorage.getItem: เรียกใช้
        // localStorage.setItem: เซ็ตค่า
        // localStorage.clear: เคลีย

        //ห้ามทำ
        localStorage.setItem('todoID', todoId) //ID: 12
        const newTodoID = localStorage.getItem('todoID')
        console.log(newTodoID);
        //OUTPUT: 12 (STRING FORMAT)

        // ต้องทำ
        localStorage.setItem('todoID', JSON.stringify(todoId)) //ID: 12
        const newTodoIDbutJSON_notConvet = localStorage.getItem('todoID')
        console.log(newTodoIDbutJSON_notConvet); 4
        //OUTPUT: unknow (JSON FORMAT)

        const newTodoIDbutJSON_Convet = JSON.parse(localStorage.getItem('todoID'))
        console.log(newTodoIDbutJSON_Convet); 
        //OUTPUT: 12 (int FORMAT)

        
        showTodoItem(todoId,inputValue)

        findNotDoneButton(todoId)
        findRemoveButton(todoId)
        showNumberOfDone(todoManagement.getNumberOfDone())
        showNumberOfNotDone(todoManagement.getNumberOfNotDone())

        findNotDoneButton(todoId)
        findRemoveButton(todoId)
    }

}

function findNotDoneButton(id){
    const divItem=document.getElementById(id)
    const doneButton=divItem.querySelectorAll('button')
    doneButton[0].addEventListener('click',notDoneButtonHandler)
}

function findRemoveButton(id){
    const divItem=document.getElementById(id)
    const doneButton=divItem.querySelectorAll('button')
    doneButton[1].addEventListener('click',removeButtonHandler)
}


function notDoneButtonHandler(e){
    const doneButton=e.target
    doneButton.textContent='Done'
    doneButton.style.backgroundColor='green'
    doneButton.style.color='white'

    todoManagement.setItemToDone(doneButton.parentNode.id)

    showNumberOfDone(todoManagement.getNumberOfDone())
    showNumberOfNotDone(todoManagement.getNumberOfNotDone())
    // console.log(todoManagement.getNumberOfDone());
}

function removeButtonHandler(e){
    removeTodoItem(e.target.parentNode.id)
    todoManagement.removeTodo(Number(e.target.parentNode.id))
    showNumberOfDone(todoManagement.getNumberOfDone())
    showNumberOfNotDone(todoManagement.getNumberOfNotDone())

}

export{addTodoHandler}
