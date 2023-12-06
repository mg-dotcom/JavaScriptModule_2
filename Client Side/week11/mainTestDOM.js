// const rootNode = document
// console.log(rootNode)
// console.log(rootNode.nodeName) //#document
// console.log(rootNode.nodeType) //9 -> DOCUMENT NODE VALUE
// console.log(rootNode.nodeValue) //null

// //html = document.documentElement
// console.log(document.documentElement) //html element -> code
// console.log(document.documentElement.nodeName) //HTML
// console.log(document.documentElement.nodeType) //1 -> ELEMENT NODE VALUE
// console.log(document.documentElement.nodeValue) //null

// console.log(document.body) //body element
// console.log(document.body.nodeName) //BODY
// console.log(document.body.nodeType) //1
// console.log(document.body.nodeValue) //null

// console.log(document.head) //head element
// console.log(document.head.nodeName) //HEAD
// console.log(document.head.nodeType) //1
// console.log(document.head.nodeValue) //null

// console.log(document.title) //head element
// console.log(document.title.nodeName) //undefined
// console.log(document.title.nodeType) //undefined
// console.log(document.title.nodeValue) //undefined

const headElement = document.head
console.log(headElement)

// //Child relationship
// //1. childNodes (NodeList data type) = query children with all node types

const headChildren = headElement.childNodes
console.log(headChildren) 
// 9 nodes ** white space ที่กด enter มาก็เป็น text node ร่วมด้วย 
//NodeList(7) = [text, meta, text, title, text, comment, text]
console.log('length:', headChildren.length)
headChildren.forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})
//ถ้าไปอยู่ในบรรทัดเดียวกันเลย  No white spce -> จะไม่เจอ text , NodeList(3) = [meta, title, comment]

//2. children (HTMLCollection data type) = query children with ELEMENT type only
//convert array-like to array before using foreach function

console.log('length:', headElement.children.length)
Array.from(headElement.children).forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})
console.log(headElement.children)
console.log(headElement.children[2]) // <title> Document </title>
// ONLY ELEMENT TYPE -> HTMLCollection(3) [meta, meta, title]

//-------------------------------------------------------------------

//1. parent relationship
//get parent including all node types
// const headParentNode = headElement.parentNode
// console.log(headParentNode) 

// //get parent only element node type
// const headParentElement = headElement.parentElement
// console.log(headParentElement) // Html

// //2. sibling relationship
// //get previous sibling including all node types
// const headPreviousSibling = headElement.previousSibling
// console.log(headPreviousSibling) // <!-- This is a slibing commnet -->

// //get previous sibling only element node type
// const headPreviousSiblingElement = headElement.previousElementSibling
// console.log(headPreviousSiblingElement) // null

// //get next sibling including all node types
// const headNextSibling = headElement.nextSibling
// console.log(headNextSibling) //text

// //get next sibling only element node type
// const headNextSiblingElement = headElement.nextElementSibling
// console.log(headNextSiblingElement) // body element