const programmingLect = document.querySelectorAll('.programming')
//NodeList, implement only forEach, not all array function implemented
console.log(programmingLect)

programmingLect.forEach((pl) => {
  console.log(pl)
  console.log(pl.nodeName)
  console.log(pl.nodeType)
  console.log(pl.nodeValue)
  console.log(pl.attributes) //get all attributes of element //NamedNodeMap does not implement forEach
  Array.from(pl.attributes).forEach((attr) => console.log(attr))
})

const pEle = document.getElementById('p-01')
const pEleAttributes = pEle.attributes
console.log(pEleAttributes)
console.log(pEleAttributes.length)
Array.from(pEleAttributes).forEach((attr) => {

  console.log(attr.name) // id, class
  console.log(attr.value) //class, courses
})

console.log(pEle.getAttribute('id')) // ANS p-01 (รู้ชื่อ attribute)

const ulEle2 = document.getElementsByTagName('ul') 
//return HTMLCollection -array-like, not implement forEach

const ulEleArray = Array.from(ulEle2)
ulEleArray.forEach((ul) => console.log(ul))
