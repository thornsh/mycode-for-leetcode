/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var a = digits.toString().split(",").join("");
    var b = parseInt(a);
    b = b+1;


    var arr = [];
    var num = b;
    while (num) {
        arr.unshift(num % 10);
        num = parseInt(num / 10)
    }
    if(digits[0]===0&&digits.length>=2){
        arr.unshift(0)
        return arr
    }
    return arr
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = plusOne;
// @after-stub-for-debug-end