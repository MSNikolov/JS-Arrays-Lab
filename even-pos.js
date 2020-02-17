function calc (params){
    let result = params.filter(x => params.indexOf(x) % 2 == 0)
    return result.join(" ")
}

console.log(calc(['20', '30', '40']))