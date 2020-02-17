function smallestTwo(params){
    let result = params.sort((a, b) => a - b);

    result = result.slice(0, 2)

    return result.join(" ")
}

console.log(smallestTwo([3, 0, 10, 4, 7, 3]))