//the function to perform the job
function transformString(str) {
    //this is to find the length of the string
    const n = str.length;
  
    if (n % 15 === 0) {
      // Divisible by both 3 and 5
      return str.split('').reverse().join('').split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (n % 3 === 0) {
      // Divisible by 3
      return str.split('').reverse().join('');
    } else if (n % 5 === 0) {
      // Divisible by 5
      return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
      // Not divisible by 3 or 5
      return str;
    }
  }
  
  // Test cases in console
  console.log(transformString("Hamburger"));  // Output: "regrubmaH"
  console.log(transformString("Pizza"));  // Output: "80 105 122 122 97"
  console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"