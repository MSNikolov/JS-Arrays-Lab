function biggest(params){
    let resultArr = [];

    params.forEach(a => resultArr = resultArr.concat(a))

    resultArr.sort((a, b) => b - a)

    return resultArr[0];
}

console.log(biggest([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]

))