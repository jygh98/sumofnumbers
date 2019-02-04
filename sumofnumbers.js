function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}


function sumWhile(nums) {
  let i = 0;
  let sum = 0;
  while (i < nums.length) {
    sum += nums[i++];
  }
  return sum;
}

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1));
}

function sumTheSimplyWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; });
}

const nums = [1, 2, 3, 4, 5];
console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheSimplyWay(nums));
