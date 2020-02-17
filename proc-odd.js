function process(params){
    let result = [];

    for (i=0; i< params.length; i++){
        if (i % 2 == 1){
            result.push(params[i])
        }
    };

    result.reverse();

    result = result.map(x => x*2)

    return result.join(" ")
}

console.log(process([3, 0, 10, 4, 7, 3]))