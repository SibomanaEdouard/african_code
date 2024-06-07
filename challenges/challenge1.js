//this is the function to do the job
function hasContiguousSubarray(arr, target) {
    let currentSum = 0;
    let start = 0;
  
    //this is to navigate or to loop in the arry
    for (let end = 0; end < arr.length; end++) {
        //this is to calculate the sum
      currentSum += arr[end];
  
  
      while (currentSum > target && start <= end) {
        currentSum -= arr[start];
        start++;
      }
  //this is to compare the current sum wit the target
      if (currentSum === target) {
        return true;
      }
    }
  
    return false;
  }
  
  // This is to provide example
  const arr = [4, 2, 7, 1, 9, 5];
  const target = 17;
  
  //this is to invoke the function and  write the output in console
  console.log(hasContiguousSubarray(arr, target));  // Output: true