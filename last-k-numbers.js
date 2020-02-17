function lastK(n, k){
    let result = [];

    result.push(1);

    for (i = 1; i < n; i++){
        let num = i - k;

        let workArr;

        if (num >= 0) {

            workArr = result.slice(num, i);
        }

        else{
            workArr = result.slice(0, i)
        }


        let sum = workArr.reduce((a, b) => a + b)

            result.push(sum)
    }

    return result.join(" ")
}

console.log(lastK(10, 2))