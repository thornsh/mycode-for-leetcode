/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var tmp = x.toString();
    if(tmp[0]==="-"){
        return false;
    }else if(tmp===tmp.split('').reverse().join('')){
        return true
    }
    return false
};
// @lc code=end

