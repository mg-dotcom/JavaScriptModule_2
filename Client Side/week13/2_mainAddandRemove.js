//1. เลือกสิ่งที่อยากจะทำ HTML object 
const submitButton = document.querySelector('button')
console.log(submitButton)

//2. register handler รับการทำงานในการคลื้กปุ่ม

//add 'multiple handler' function on the same 
//event type and HTML object

//anonymous cant delete, name function can delete
/* ลบไม่ได้
submitButton.removeEventListener('click', (e) => {
    console.log(`Good bye,, ${e.target.id}`)
}) 
*/

const greeting = function(event) {
    console.log(`Hello ${event.target.id}`)
}
submitButton.addEventListener('click', greeting)
// ลบออกจะไม่ขึ้น
//submitButton.removeEventListener('click', greeting)

//เปลี่ยนสี
const innerDiv = document.querySelector('#inner-div')
console.log(innerDiv)

innerDiv.addEventListener('click',(event) => {
    innerDiv.style.backgroundColor = 'purple'
},)

const outerDiv = document.querySelector('#outer-div')
console.log(outerDiv)

outerDiv.addEventListener('click',(event) => {
    outerDiv.style.backgroundColor = 'lightblue'
})

//----------------------------------------------
//เปลี่ยนสี เเบบ stopPropergation ไม่มีการส่งต่อ
// const greeting = function(event) {
    
//     console.log(`Hello ${event.target.id}`)
// }
// submitButton.addEventListener('click', greeting,true)

// const innerDiv = document.querySelector('#inner-div')
// console.log(innerDiv)

// innerDiv.addEventListener('click',(event) => {
    
//     innerDiv.style.backgroundColor = 'purple'
// },true)

// const outerDiv = document.querySelector('#outer-div')
// console.log(outerDiv)

// outerDiv.addEventListener('click',(event) => {
//     event.stopPropagation() //หยุดการส่งต่อ
//     outerDiv.style.backgroundColor = 'lightblue'
// },true)
















