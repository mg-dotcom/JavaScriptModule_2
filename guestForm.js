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
    const searchInput = document.querySelector('#search-input')
    const addButton = document.querySelector('#add-guest-btn')
    searchInput.addEventListener('keyup',searchGuest)
    addButton.addEventListener('click',addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const divDisplay = document.querySelector('#display-area')
    const newDiv = document.createElement('div')
    const newSpan1 = document.createElement('span')
    const newSpan2 = document.createElement('span')

    newSpan1.innerHTML = `${guestItem.firstname} ${guestItem.lastname}`
    newSpan2.setAttribute('class','remove-icon')
    newSpan2.setAttribute('id',`${guestItem.firstname}-${guestItem.lastname}`)
    newSpan2.setAttribute('style','cursor:pointer;color:red')
    newSpan2.innerHTML = " [X]"
    newSpan2.addEventListener('click', removeGuest)

    newDiv.appendChild(newSpan1)
    newDiv.appendChild(newSpan2)
    divDisplay.appendChild(newDiv)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const divDisplay = document.querySelector('#display-area')
    divDisplay.innerHTML = ''
    guestResult.forEach((guestItem) => displayGuest(guestItem))
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const searchInput = document.querySelector('#search-input')
    const findGuest = guests.searchGuests(searchInput.value)
    displayGuests(findGuest)
  } 

  // 5. Function to add a new guest
  function addGuest() {
    const fnameInput = document.querySelector('#firstname-input')
    const lnameInput = document.querySelector('#lastname-input')
   
    guests.addNewGuest(fnameInput.value,lnameInput.value)
    displayGuest({firstname: fnameInput.value, lastname: lnameInput.value})

    fnameInput.value = ''
    lnameInput.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const eventId = event.target.id
    const splitName = eventId.split('-')
    const fname = splitName[0]
    const lname = splitName[1]
    const deleteGuest =  {firstname: fname, lastname: lname}
    guests.removeGuest(deleteGuest)
    const removeDiv = event.target.parentElement // event.target == span , event.target.parentElement == div 
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
