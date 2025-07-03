/*214. Shortest Palindrome
Hard
Topics
premium lock icon
Companies
You are given a string s. You can convert s to a palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.

 

Example 1:

Input: s = "aacecaaa"
Output: "aaacecaaa"
Example 2:

Input: s = "abcd"
Output: "dcbabcd"               mimimfidm
 

Constraints:

0 <= s.length <= 5 * 104
s consists of lowercase English letters only.*/

const { lazy } = require("react");

// var isPalindrome = function (x) {
//     let str = x.toString()
//     let a = str.split('');
//     let rev = a.reverse();
//     let final = rev.join('')
//     if (final === x) {
//         return true
//     } else {
//         return false
//     }
// }
/*
function isPalindrome(x){
let check=x===x.split('').reverse().join('');
let first=x

if(check===true){
    return first;
}else{
    let empty=x
    for(let i=0;i<=empty.length;i++){
        empty=i+x
return empty
    }

}
}
console.log(isPalindrome('aacecaaa'));

*/

// function isPalindrome(x) {
//   function checkPalindrome(s) {
//     return s === s.split('').reverse().join('');
//   }

//   if (checkPalindrome(x)) return x;

//   for (let i = 0; i < x.length; i++) {
//     let prefix = x.slice(0, i);
//     let suffix = x.slice(i);
//     if (checkPalindrome(suffix)) {
//       let toAdd = x.slice(0, i).split('').reverse().join('');
//       return toAdd + x;
//     }
//   }
//   return "";
// }

// console.log(isPalindrome('aacecaaa')); // Output: "aaacecaaa"



/**

 
function twoSum(nums, target) {
  let fre=[]
    for(Numbers of nums){
        return fre+=   Numbers 

   }
}; 
console.log(twoSum([2,7,11,15], 9));*/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let a=s.toUpperCase()
    return a.length
};
console.log(longestPalindrome("abccccdd") );

