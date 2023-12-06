// DOM ถุกสร้างมาก่อน
document.addEventListener('DOMContentLoaded', () =>{
    console.log('Your Dom tree built')
})
// โหลดเเล้ว
window.addEventListener('load', () => {
    console.log('Your Application Loaded')
})
// เก็บค่า user กับเรา : Application -> local storage
window.addEventListener('beforeunload', () => {
    localStorage.setItem('myCat','Tom')
})