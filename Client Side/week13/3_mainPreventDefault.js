// ระงับใม่ให้ไปยัง server ให้ไป valid pass, username ก่อน

const submitButton = document.querySelector('button')
// console.log(submitButton)
//  submitButton.addEventListener('click', (e) => {
//   e.preventDefault() 
//   console.log('cancle submit to server')


submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  const allInputElements = document.querySelectorAll('input')
  console.log(allInputElements)

  const isComplete = Array.from(allInputElements).every(
    (input) => input.value.length > 0
  ) // เช็คว่ามีค่าเขียนลงไปบ้างยัง

  // const pElement = document.getElementsByTagName('p')
  // console.log(pElement) return HTMLcollection

  const pElement = document.getElementsByTagName('p')[0] // p in div under from HTML 
  if (isComplete) {
    pElement.textContent = 'Your input are complete'
  } else {
    pElement.innerHTML =
      '<span style="color:red"> Missing some value, plese enter</span>'
  }
})




// const allInputElements = document.querySelectorAll('input')
// const submitButton = document.querySelector('button')

// console.log(allInputElements)

// submitButton.addEventListener('click',(event) => {
//   event.preventDefault()

//   const checkComplete = Array.from(allInputElements).every(
//     (input) => input.value.length > 0
//   ) 

//   const pEle = document.querySelector('div>p')

//   if(checkComplete){
//     pEle.textContent = "Valid input"
//   }else{
//     pEle.innerHTML = '<span style="color:red"> Missing some value, plese enter</span>'
//   }
  
// })