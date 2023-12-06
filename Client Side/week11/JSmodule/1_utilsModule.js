// common JS
// browser ไม่รู้จัก Common JS

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

module.exports = {echo}
// module.exports = {echo,sum} export 2 ตัว
// console.log(sum(1,2,3))



