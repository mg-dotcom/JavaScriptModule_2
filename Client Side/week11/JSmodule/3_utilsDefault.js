//default export 
//เรียกได้เเค่ 1 จุดของโปรเเกรม ห้ามมีมากกว่า 1

export function echo(msg){
    return msg
}
export default function sum(...nums){
    let total = 0
    for(const num of nums){
        total += num
    }
    return total
}
export const MAX_VALUE = 100

//ไปเปลี่ยนชื่อใน import ได้ 

//2
// function echo(msg){
//     return msg
// }
// function sum(...nums){
//     let total = 0
//     for(const num of nums){
//         total += num
//     }
//     return total
// }
// const MAX_VALUE = 100


// export {sum as default, echo , MAX_VALUE}