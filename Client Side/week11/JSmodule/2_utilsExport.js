// ES module
// export ตามจุด
// browser รู้จัก

// function echo(msg){
//     return msg
// }
// export function sum(...nums){
//     let total = 0
//     for(const num of nums){
//         total += num
//     }
//     return total
// }
// export const MAX_VALUE = 100

//2 สรุปการใช้ export บรรทัดสุดท้าย

function echo(msg){
    return msg
}
function sum(...nums){
    let total = 0
    for(const num of nums){
        total += num
    }
    return total
} 
const MAX_VALUE = 100
export {sum, echo, MAX_VALUE}
