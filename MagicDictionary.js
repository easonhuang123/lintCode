/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.arr = []
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    this.arr = this.arr.concat(dict)
    return this.arr
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    if(!this.arr.length || this.arr.indexOf(word) > -1) return false
    for (let i = 0; i < this.arr.length; i++) {
        let diff = 0
        if (this.arr[i].length === word.length) {
           for (let j = 0; j < word.length; j++) {
                if (this.arr[i].charAt(j) !== word.charAt(j)) {
                   if (++diff > 1) break  
                }
            }
            if (diff === 1) return true
        }
    }
    return false
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

let m = new MagicDictionary()
 
console.log(m.buildDict(["hello", "leetcode"]))
console.log(m.search("hello"))
console.log(m.search("hfllo"))