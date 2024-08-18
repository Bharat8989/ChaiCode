 //two sum
  //solve the two sum problem on leet code
  //write a functions that takes an array of numbers and a target number ,and returns the indices of the two number that add up to the target
  function findTwoSum(nums, target) {
    const numToIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }

        numToIndex.set(nums[i], i);
    }

    return null; // If no solution is found
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = findTwoSum(nums, target);
console.log(result); // Output: [0, 1]


function addArrays(arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
        throw new Error('Arrays must have the same length');
    }

    // Initialize an empty array to store the result
    const result = [];

    // Iterate over the arrays and add corresponding elements
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }

    return result;
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const summedArray = addArrays(array1, array2);
console.log(summedArray); // Output: [5, 7, 9]
