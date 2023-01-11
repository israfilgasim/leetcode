var twoSum = function(nums, target){
    i = 0
    j = 1
    while (i < nums.length){
        while (j < nums.length){
            sum = nums[i] + nums[j]
            if (sum == target){
                return [i, j];
            } else {
                j++;
            }
        }
        i++;
        j = i + 1;
    }
    
};
