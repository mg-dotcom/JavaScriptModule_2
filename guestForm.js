//Apisara Chonprasit 65130500120
// import { createGuestList } from './data/guestdata.js'
// import { GuestManagement } from './lib/GuestManagement.js'
const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  const guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const searchInput = document.querySelector("#search-input")
    const addButton = document.querySelector('#add-guest-btn')

    searchInput.addEventListener('keyup', searchGuest)

    addButton.addEventListener('click', addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const divParent = document.querySelector('#display-area');
    const newDiv = document.createElement('div')
    const newSpan1 = document.createElement('span')
    const newSpan2 = document.createElement('span')
    newSpan1.textContent = `${guestItem.firstname} ${guestItem.lastname}`
    newSpan2.setAttribute('class', 'remove-icon')
    newSpan2.setAttribute('id', `${guestItem.firstname}-${guestItem.lastname}`)
    newSpan2.setAttribute('style', 'cursor:pointer;color:red')
    newSpan2.textContent = ' [X]'
    newSpan2.addEventListener('click', removeGuest)

    newDiv.appendChild(newSpan1)
    newDiv.appendChild(newSpan2)
    divParent.appendChild(newDiv)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const divParent = document.querySelector('#display-area');
    // Clear all previous children within div
    divParent.innerHTML = '';

    guestResult.forEach(guest => {
      displayGuest(guest)
    });

  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const matchingGuests = guests.searchGuests(event.target.value);
    displayGuests(matchingGuests);
  } 

  // 5. Function to add a new guest
  function addGuest() {
    const fnameInput = document.querySelector('#firstname-input') 
    const lnameInput = document.querySelector('#lastname-input')
    
    const newGuestObject = guests.addNewGuest(fnameInput.value,lnameInput.value)

    displayGuest({ firstname: fnameInput.value, lastname: lnameInput.value })
    
    fnameInput.value = "";
    lnameInput.value = "";
  
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const removeValue = event.target.id // Kenny-Poppy
    const splitValue = removeValue.split('-') // [Kenny, Poppy]
    const fname = splitValue[0] // Kenny  
    const lname = splitValue[1] // Poppy
    const deleteGuest = {firstname: `${fname}`, lastname:`${lname}`}

    guests.removeGuest(deleteGuest)
    // ขึ้นไปลบ Div ข้างบนใน Element
    const removeDiv = event.target.parentElement
    removeDiv.remove()
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
module.exports = guestForm

// export { guestForm }
// const { registerEventHandling, displayGuests } = guestForm()
// registerEventHandling()
// displayGuests(guestList.getAllGuests())
