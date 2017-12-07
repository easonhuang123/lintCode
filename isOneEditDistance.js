/**
 * @param s: a string
 * @param t: a string
 * @return: true if they are both one edit distance apart or false
 */
const isOneEditDistance = function (s, t) {
    var s_length = s.length
    var t_length = t.length
    if (s_length === t_length) {
        var count = 0
        for (var i = 0; i < s_length; i++) {
            if (s.charAt(i) != t.charAt(i)) {
                count++
                if (count > 1) {
                    return false
                }
            }
        }
        return true
    } else if (s_length - t_length === 1) {
        var result = check(s, t)
        return result
    } else if (t_length - s_length === 1) {
        var result = check(t, s)
        return result
    } else {
        return false
    }
}

console.log(isOneEditDistance('bBBc','bbbc'))

function check(a, b) {
    var count = 0
    for (var i = 0; i < a.length - 1; i++){
        if (a.charAt(i) != b.charAt(i)) {
            count++
            if (count > 1 || a.charAt(i + 1) != b.charAt(i)) {
                return false
            }
        }
    }
    return true
}