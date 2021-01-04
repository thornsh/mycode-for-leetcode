/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var a = s.split("");
    // if(a.length>0){
    //     return a[a.length-1].length;
    // }else{
    //     return 0
    // }
    var flag = true;
    var b = a.length-1;
    var c = [];
    while(flag){
        while(a[b]!=" "){
            c.unshift(a[b]);
            b--;
            if(b<0){
                return c.length
            }
            if(a[b]===" "){
                return c.length
            }
        }
        b--;
        if(b<0){
            return 0;
        }
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLastWord;
// @after-stub-for-debug-end