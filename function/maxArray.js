function maxArray( arr ) {
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        max < arr[i] ? max = arr[i] : null
    }
    return max
}


module.exports = maxArray