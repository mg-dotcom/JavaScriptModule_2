//1. เลือกสิ่งที่อยากจะทำ HTML object
const submitButton = document.querySelector('button')
console.log(submitButton)

//2. รับการทำงานในการคลื้กปุ่ม
// e รับ eventobject มาทำงานจาการ click
const doSomething = (e) => {
    console.log('submit button is clicked')
    console.log(e)
    console.log(e.target.id) // btn-001
    console.log(e.type) // click
    console.log(e.target) // <button id = "btn-001">Submit</button>
    console.log(e.currentTarget) // <button id = "btn-001">Submit</button>
    console.log(e.eventPhase) //2
  }
  submitButton.addEventListener('click', doSomething)
// -----------------------
// inner-div
const innerDiv = document.getElementById('inner-div')
  console.log(innerDiv)
  innerDiv.addEventListener('click', (event) => {
    console.log(event.target.id) //btn-001
    console.log(event.currentTarget) //<div> inner element
    console.log(event.eventPhase) //3
  })

// -----------------------
// outer-div
const outerDiv = document.getElementById('outer-div')
//   console.log(outerDiv)
outerDiv.addEventListener('click', (event) => {
    console.log(event.target.id) // 
    console.log(event.currentTarget) //<div> inner element
    console.log(event.eventPhase) // 3 
  })