import { TodoList} from '../lib/todoManagement.js'

const todoManagement = TodoList()

const divParent = document.getElementById('listTodo')

function showTodoItem(newId, newDescription) {
  const newTodoDiv = document.createElement('div')
  newTodoDiv.setAttribute('class', 'todoItem')
  newTodoDiv.setAttribute('id', newId)

  const newdesc = document.createElement('p')
  newdesc.textContent = newDescription

  const statusButton = document.createElement('button')
  statusButton.textContent = 'Not done'

  const removeButton = document.createElement('button')
  removeButton.textContent = 'remove'

  divParent.appendChild(newTodoDiv)

  const divChild = document.getElementById(newId)
  divChild.appendChild(newdesc)
  divChild.appendChild(statusButton)
  divChild.appendChild(removeButton)
}

function showNumberOfDone(numberOfDone) {
  const pNumberDone = document.getElementById('done')
  pNumberDone.textContent =`Number of Done ${numberOfDone}` 
}

function showNumberOfNotDone(numberOfNotDone){
  const pNumberNotDone=document.getElementById('notDone')
  pNumberNotDone.textContent=`Number of Not Done ${numberOfNotDone}` 
}

function removeTodoItem(removeId){
  const removeDiv=document.getElementById(removeId)
  const parentDiv=document.getElementById('listTodo')
  parentDiv.removeChild(removeDiv)
}

export{showTodoItem,showNumberOfDone,showNumberOfNotDone,removeTodoItem}

// showTodoItem(todoManagement.addTodo(1, 'Play game'),'Play game')
// showTodoItem(todoManagement.addTodo(2, 'Watch Movies'),'Watch Movies')
// showTodoItem(todoManagement.addTodo(3, 'Sleep'),'Sleep')

// showNumberOfDone(todoManagement.getNumberOfDone())
// showNumberOfNotDone(todoManagement.getNumberOfNotDone())


// const removeDiv=document.querySelector('.todoItem')
// console.log(removeDiv);

// const removeButton=removeDiv.querySelectorAll('button')
// console.log(removeButton[1]);