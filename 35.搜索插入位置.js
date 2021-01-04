/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // for(var i = 0;i<nums.length;i++){
    //     if(nums[i]===target){
    //         return i;
    //     }
    //     if(nums[i]<target&&nums[i+1]>target){
    //         return i+1;
    //     }
    //     if(nums[i]<target&&nums[i+1]===undefined){
    //         return i+1
    //     }
    //     if(nums[i]>target){
    //         return i
    //     }
    // }
    let left = 0;
    let right = nums.length-1;
    while(left<=right){
        if(nums[(left+right)>>1]>=target){
            right = ((left+right)>>1)-1;
        }else{
            left = ((left+right)>>1)+1;
        }
    }
    return right+1;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchInsert;
// @after-stub-for-debug-end