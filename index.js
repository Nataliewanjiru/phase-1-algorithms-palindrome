function isPalindrome(word) {
  if(word.split('').reverse().join('') === word){
    console.log ("True")
  }else{
    console.log("False")
  }
}


/* 
 Start with word representing the input
  Reverse the word
  if reverse is equal to word
     -output yes
  if revrse is not equal to word
     -output no
*/



/*
   Take a variable word
  Transform the variable
  check for similarities
  if similar output yes
  if not similar output no
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log( isPalindrome("mom"))
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
