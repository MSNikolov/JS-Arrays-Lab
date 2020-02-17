function sum(params){
    let first = Number(params[0]);
    let last = Number(params[params.length-1])
    return first + last
}

console.log(sum(['20', '30', '40']))