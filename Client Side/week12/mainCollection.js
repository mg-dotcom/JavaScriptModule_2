 //select a collection of specified condition
 const programmingLect2 = document.getElementsByClassName('programming') //ทำได้เเค่ระดับ document
 //return HTMLCollection data type - array-like (can use index or length, cannot use array function (forEach, filter, map,...))
 console.log(programmingLect2) // HTMLCollection(2)
 console.log(programmingLect2.length)

 const ulTagname = document.getElementsByTagName('ul')
 console.log(ulTagname) //HTMLCollection(3)
 console.log(ulTagname.length)
 //return HTMLCollection

 const coursesEle = document.querySelectorAll('.courses')
 console.log(coursesEle) // เอามาทุก courses
 //NodeList data type - array-like (can use index, length) 
 // but NodeList implements only forEach but can not use other array functions

 const divEle = document.getElementById('bscit-courses')
 console.log(divEle)
 // ||||||
 // vvvvv
 const courseUnderDiv = divEle.querySelectorAll('.courses') // ทำระดับได้ parent node // NodeList(2)
 console.log(courseUnderDiv)
 const courseUnderDoc = document.querySelectorAll('.courses')  // NodeList(4)
 console.log(courseUnderDoc)