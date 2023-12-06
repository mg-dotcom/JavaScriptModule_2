//select the first node with its id
// เลือกจากไอดี
const ulStudents = document.getElementById('int101')
console.log(ulStudents)

//select the first node with CSS selector 
//เอาตัวเเรก
const ulStudents2 = document.querySelector('#students2')//id selector 
console.log(ulStudents2)


const programmingLect1 = document.querySelector('.lecturers') //class selector 
console.log(programmingLect1)

const ulStudents3 = document.querySelector('ul[id="students"]') //tag with attribute selector
console.log(ulStudents3)

const ulEle = document.querySelector('ul') //tag name
console.log(ulEle) // 

const divUl = document.querySelector('ul>li') // li ที่มี parent เป็น ul
console.log(divUl)

// -------------------------------------------
//correct, give one string selector เจอตัวนี้ก่อนใน tree #p-01
const firstNode1 = document.querySelector('#int101, .courses, #p-01')
console.log(firstNode1)

//incorrect, give more than one string selector
const firstNode2 = document.querySelector('#int101', '.courses', '#p-01')
console.log(firstNode2)

    
  
  
