
var words = function(input) {
  var wordObj = {};
  var wordArr = input.split(' ');
  for(var i = 0; i < wordArr.length; i++) {
    if(wordObj.hasOwnProperty(wordArr[i])) {
      wordObj[wordArr[i]] ++;
    } else {
      wordObj[wordArr[i]] = 1;
    }
  }
  return wordObj;
}



































// var words = function(input) {
//   var noPuncuation = input.replace(regexp|substr, newSubStr|function[,   flags]);
//   var wordArray = input.toLowerCase().split(' ');
//   var wordObject = {};

//   for(var i = 0; i < wordArray.length; i++) {
//     if(wordObject.hasOwnProperty(wordArray[i])) {
//       wordObject[wordArray[i]] += 1;
//     } else {
//       wordObject[wordArray[i]] = 1;
//     }
//   } // end for loop
//   return wordObject;
// };