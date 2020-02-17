function neighbors(params){
    let sum = 0;

    for (i = 0; i < params.length-1; i++){
        for (j = 0; j < params[i].length-1; j++){
            if (params[i][j] === params[i+1][j] || params[i][j] === params[i][j+1]) {
                sum++;
            }
        }
    }

    let k = params.length - 2;

    for (i = 0; i < params[k].length; i++){
        if (params[k][i] === params[k+1][i]){
            sum++;
        }
    }

    let l = params[0].length-2;

    for (i = 0; i < params.length; i++){
        if (params[i][l] === params[i][l+1]){
            sum++;
        }
    }

    return sum;
}

console.log(neighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]))