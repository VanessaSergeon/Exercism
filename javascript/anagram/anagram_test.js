function alphabetical(aWord) {
  return aWord.toLowerCase().split('').sort().join('');
}

function anagram(string) {
  var matchArray = [];
  this.matches = function(compareArray) {
    for(var i = 0; i < compareArray.length; i++) {
      if(alphabetical(string) == alphabetical(compareArray[i])) {
        matchArray.push(compareArray[i]);
      }
    }
  return matchArray;
  };
}