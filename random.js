function random(n = 0) {
    let arr = []
    let max = 32
    let min = 2
    // 排除n不是数字
    if (isNaN(n)) return []
    // 排除n不在范围内
    if (n > 31 || n < 0) return []
    let rnd
    for (let i = 0; i < n; i++){
        rnd = getRandomInt(2, 32)
        if (arr.indexOf(rnd) < 0) {
            arr.push(rnd)
        } else {
            i--
        }
    }
    return(arr)
}

// 在限定范围内生成随机数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

console.log(random(5.4))