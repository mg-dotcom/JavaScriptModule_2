import { addTodoHandler } from "./eventHandler/eventController.js";
import {TodoList} from "./lib/todoManagement.js";
import {showTodoItem,showNumberOfDone,showNumberOfNotDone,removeTodoItem} from './UI/todoList.js'



const todoManagement=TodoList()

// showTodoItem(todoManagement.addTodo(1, 'Play game'),'Play game')
// showTodoItem(todoManagement.addTodo(2, 'Watch Movies'),'Watch Movies')
// showTodoItem(todoManagement.addTodo(3, 'Sleep'),'Sleep')


const addButton=document.getElementById('addBtn')
addButton.addEventListener('click',addTodoHandler)

showNumberOfDone(todoManagement.getNumberOfDone())
showNumberOfNotDone(todoManagement.getNumberOfNotDone())




