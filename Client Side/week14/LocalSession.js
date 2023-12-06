//localStorage
// ถ้ายังไม่มี count ใน local storage ให้มีการเพิ่มที่ละ 1

// let counter = localStorage.getItem('count')
// console.log(counter)
// if(counter === null){ 
//   counter = 1
//   localStorage.setItem('count',counter)
// } else {
//   localStorage.setItem('count', ++counter)
//   alert('counter' + '=' + counter)
// }

//sessionStorage
let counter = sessionStorage.getItem('count')
if (counter === null) {
  counter = 1
  sessionStorage.setItem('count', counter)
} else sessionStorage.setItem('count', ++counter)
alert(`counter=${counter}`)

// เมทอดนี้ใช้เพื่อลบไอเท็มที่ระบุจาก sessionStorage ตามคีย์ที่กำหนด
sessionStorage.removeItem('count')
// ใช้เพื่อลบทุกไอเท็มจาก sessionStorage
sessionStorage.clear() 