//CRD on any element node
//ex. add in ul (div class ="lectuerers") <li class="devops name="devopsLect">Siam Yamsangsung</li>
//1. create element, <li></li>
const newLiEle = document.createElement('li')
console.log(newLiEle)
//2. create attribute <li class="devops" name="devopsLect"></li>
newLiEle.setAttribute('class','devops')
newLiEle.setAttribute('name','devopsLect')
//3. add text value to element,
newLiEle.innerHTML = '<span style="color: Blue">Siam Yamsangsung</span>'
//4. add new li element to a parent node
const divParent = document.querySelector('div.lecturers>ul')
console.log(divParent)
divParent.appendChild(newLiEle)

//อยากเเทรก
const liLect = document.querySelectorAll('div.lecturers>ul>li')
console.log(liLect)
// เอา parent ออกมาก่่อน -> .insetbefore
const ajKK = liLect[1]
divParent.insertBefore(newLiEle, ajKK) // add หน้า AJ KK

//divParent.removeChild(refNode) // AJ kk หาย