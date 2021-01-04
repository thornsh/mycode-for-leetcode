/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var current_item;
  nums.map((item,index)=>{
    var new_nums = nums.filter((i,j)=>{
      return j != index;
    })
    if(new_nums.indexOf(item)===-1){
      current_item = item;
    }
  })

  return current_item;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = singleNumber;
// @after-stub-for-debug-end