import { validateEmail, validatePassword, validateUsername } from "./validate.js";

//1
const button = document.querySelector('#color-btn')
const rainbowBg = document.querySelector('#rainbow')

function getRandomColor(max) {
    return Math.floor(Math.random() * max);
}

button.addEventListener('click', (event) => {
    const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
    rainbowBg.style.backgroundColor = colorArray[getRandomColor(colorArray.length)]
})

//2
const addButton = document.querySelector('#add-btn')

addButton.addEventListener('click', (event) => {
    // const parentUl = document.querySelector('div#listItem')
    const ulEle = document.querySelector('div#listItem>ul')
    const input = document.querySelector('#item-input')
    //1 new li
    const newLiEle = document.createElement('li')
    //2 change text 
    newLiEle.innerText = input.value;
    //3 li appear
    ulEle.appendChild(newLiEle)
})

//3 form
const sumbitButton = document.querySelector('#submit-btn')
const sectionForm = document.querySelector('#input-list'); 
const input = sectionForm.querySelectorAll('.input')
const inputUsername = sectionForm.querySelectorAll('.input')[0]
const inputEmail = sectionForm.querySelectorAll('.input')[1]
const inputPassword = sectionForm.querySelectorAll('.input')[2]

const isComplete = Array.from(input).every((input) => input.value.length > 0 )

sumbitButton.addEventListener('click', (e) => {
    e.preventDefault()
  
    const pElement = sectionForm.querySelector('p')

    if(!validateUsername(inputUsername.value)){
        pElement.innerHTML = '<span style="color:red"> Username is invalid </span>'
    } else if (!validateEmail(inputEmail.value)) {
        pElement.innerHTML = '<span style="color:red"> Email is invalid </span>'
    } else if (!validatePassword(inputPassword.value)){
        pElement.innerHTML = '<span style="color:red"> password is invalid </span>'
    } else {
        pElement.innerHTML = '<span style="color:white"> Your input are complete </span>'
    }

})
