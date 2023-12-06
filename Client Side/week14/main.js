import { CookieUtil } from './myLib/cookieUtil.js'
document.cookie = 'username=Umaporn'
document.cookie = 'course=INT201'
document.cookie = 'credit=3'
const currentCookie = document.cookie
console.log(currentCookie) //username=Umaporn; course=INT201; credit=3
console.log(CookieUtil.get('course')) //INT201 