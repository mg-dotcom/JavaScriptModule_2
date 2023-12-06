import { Todo } from './todo.js'

function TodoList() {
  let todos = []

  function addTodo(id,desc,done) {
    const newTodo = new Todo(id,desc,done)
    todos.push(newTodo)
    return newTodo.id
  }

  function findTodo(searchId) {
    const foundTodo = todos.find((todo) => todo.id === searchId)

    if (foundTodo) {
      return {
        id: foundTodo.id,
        description: foundTodo.description
      }
    } else {
      return null
    }
  }

  function findIndexTodo(searchId) {
    if (findTodo(searchId)) {
      return todos.findIndex((todo) => todo.id === searchId)
    } else {
      return -1
    }
  }

  function removeTodo(removeId) {
    const removeIndex = todos.findIndex((todo) => todo.id === removeId)
    if (removeIndex !== -1) {
      return todos.splice(removeIndex, 1)
    } else {
      return null
    }
  }
+
  function getTodos() {
    return todos
  }

  function getNumberOfDone() {
    const DoneList = todos.filter((todo) => todo.done === true)
    return DoneList.length
  }

  function getNumberOfNotDone() {
    const NotDoneList = todos.filter((todo) => todo.done === false)
    return NotDoneList.length
  }

  function clearTodo() {
    todos = []
  }

  function setItemToDone(doneId){
    const doneItem=todos.find((todo)=>todo.id===Number(doneId))
    // console.log(Number(doneId));
    doneItem.setDone(true)
  }


  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo,
    setItemToDone
  }
}

//desturct
const {
  addTodo,
  findTodo,
  findIndexTodo,
  removeTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  clearTodo,
  setItemToDone
} = TodoList()

export {TodoList}

// console.log(addTodo(5,'Hello'));
// console.log(addTodo(6,'sleep'));
// addTodo('swim')
// addTodo('sleep')
// addTodo('watch movie')
// console.log(todos);
// console.log(findTodo(2));
// console.log(findIndexTodo(3));
// console.log(removeTodo(1));
// console.log(getTodos());
