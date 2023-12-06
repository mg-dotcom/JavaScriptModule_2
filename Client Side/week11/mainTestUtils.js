//Common JS
// const {echo} = require('./JSmodule/1_utilsModule.js')
// //const {echo,sum} = require('./JSmodule/utilsModule.js')
// console.log(echo("Good Morning"))
// console.log(sum(1,2,3)) // cant output bcuz not export // Line 3: can use

//ES Module
//ถ้า export มาเเค่ 2 ตัว ก็จะใช้ได้เเค่นั้น จะใช้ echo ไม่ได้
// import { MAX_VALUE, sum } from './JSmodule/2_utilsExport.js'
// console.log(MAX_VALUE)
// console.log(sum(1,2,3))

//defualt เปลียนชื่อ import ได้
// import total from './JSmodule/3_utilsDefault.js'
// console.log(total(1,7,3))

//defualt เปลียนชื่อ import ได้
//ใส่ปีกกาให้ name ด้วย
import sum2, {echo,MAX_VALUE} from './JSmodule/3_utilsDefault.js'
console.log(echo("Good Morning"))
console.log(sum2(1,7,3))
console.log(MAX_VALUE)