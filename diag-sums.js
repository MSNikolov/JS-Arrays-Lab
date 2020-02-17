function diagonals(params){
    let main = 0;
    let secondary = 0;

    for (i = 0; i < params.length; i++){
        main += params[i][i];

        secondary += params[i][params.length-1-i]
    }


    return `${main} ${secondary}`;
}

console.log(diagonals([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]

))