const romanToInt = function (s) {
    let arr = s.split('')
    let result = 0
    let obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1 || obj[arr[i + 1]] <= obj[arr[i]]) {
            result += obj[arr[i]]
        } else {
            result -= obj[arr[i]]
        }
    }
    return result
}

romanToInt('XCIX')