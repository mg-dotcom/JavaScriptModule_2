import { CookieUtil } from './myLib/cookieUtil.js'

//new Date(year, monthIndex, day)
CookieUtil.set('username', 'Umaporn', new Date(2023, 11, 25))
CookieUtil.set('course', 'INT201', new Date(2023, 11, 31))
CookieUtil.set('credit', '2', new Date(2024, 0, 1))
console.log(CookieUtil.get('username'))
console.log(CookieUtil.get('course'))
console.log(CookieUtil.unset('credit'))
console.log(CookieUtil.get('credit'))