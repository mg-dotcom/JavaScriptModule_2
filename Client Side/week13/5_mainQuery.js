const userElement = document.getElementById('input-user')
const pswElement = document.getElementById('input-psw')
// คลิกในช่อง username เเล้วจะขึ้น
userElement.addEventListener('focus', () => {
  console.log('Your focus is on username')
})

// คลิกนอกช่องเเล้วจะขึ้น
userElement.addEventListener('blur', () => {
  console.log('Your username input textbox is blured')
})

// เลขไม่ขึ้น -> only using keypress, keydown to detect 0-9 not show
userElement.addEventListener('keypress', (e) => {
    console.log(`${e.key}, ${e.code}`)
    //จะไม่เเสดงเลขถ้ากดเลขจาก keyboard
    if(e.key >= 0 && e.key <=9){
        e.preventDefault()
    }
})

// when user release enter key, text value on username will show at <p> element
userElement.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const pElement = document.querySelector('p')
      pElement.textContent = e.target.value // text ในนั้น e.target.value ใส่จากการเเมพไป pElement.textContent
    }
  })

  // เปลี่ยนตามการ input ของเรา
  userElement.addEventListener('input', (e) => {
    const pElement = document.querySelector('p')
    pElement.textContent = e.target.value
  })