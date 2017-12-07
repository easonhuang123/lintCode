/**
 * @param nums: an array of Integer
 * @param target: target = nums[index1] + nums[index2]
 * @return: [index1 + 1, index2 + 1] (index1 < index2)
 */
const twoSum = function (nums, target) {
    let index1 = -1, index2
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                index1 = i
                index2 = j
                break
            }
        }
        if (index1 > -1) {
            break
        }
    }
    return [index1 + 1, index2 + 1]
}

console.log(twoSum([1,2,3,6,7,9], 9))