/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var a=0;
    for(;a<nums.length-1;a++){
        for(var b=a+1;b<nums.length;b++){
            if((nums[a]+nums[b])===target){
                return [a,b];
            }
        }
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end