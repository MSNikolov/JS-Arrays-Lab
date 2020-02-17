function sortArr(params){
    let result = [];

    params.forEach(param => {
        if (param < 0){
            result.unshift(param)
        }
        else{
            result.push(param)
        }
    });

    return result.join("\n")
}

console.log(sortArr([3, -2, 0, -1]))