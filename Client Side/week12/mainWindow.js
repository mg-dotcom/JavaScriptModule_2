//window.alert, window.prompt, window.confirm
window.alert('Do you want to exit?')
const userName = window.prompt('Please enter your name', 'ex., Somchai Jaidee')
console.log(userName) //return user input, ok=user input, cancel=null
const isExit = window.confirm(`Goodbye, ${userName}`)
console.log(isExit) //return boolean, ok=true, cancel=false