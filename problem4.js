/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const join = nums1.concat(nums2).sort((a, b) => a - b);
    const len = join.length;
    const index = Math.floor(len/2);
    return len%2 === 0 ? parseFloat((join[index] + join[index-1])/2) : parseFloat(join[index]);
 
};
