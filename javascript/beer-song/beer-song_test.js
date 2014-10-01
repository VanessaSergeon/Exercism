function Beer() {};

Beer.verse = function(number){
  var oneLess = number - 1;
  var bottlePlurSing = 'bottles';
  var oneIt = 'one';
  var lastVerse = 'bottles';
  var endSong = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
  if(number === 2) {
    lastVerse = 'bottle';
  }
  if(oneLess === 0) {
    oneLess = 'no more'
    bottlePlurSing = 'bottle';
    oneIt = 'it';
  }
  if(number === 0) {
    return endSong;
  }
  var verse = "" + number + " " + bottlePlurSing + " of beer on the wall, " + number + " " + bottlePlurSing + " of beer.\nTake "+oneIt+" down and pass it around, " + oneLess + " " + lastVerse + " of beer on the wall.\n";
  return verse;
};

Beer.sing = function(start, end) {
  if(end === undefined) {
    var otherResult = "";
    for(var n = start; n >= 0; n--) {
      otherResult += Beer.verse(n);
    }
    return otherResult;
  } else {
    var result = "";
    for(var j = start; j >= end; j--) {
      var song = "" + j + " bottles of beer on the wall, " + j + " bottles of beer.\nTake one down and pass it around, " + (j-1) + " bottles of beer on the wall.\n";
      result += song;
    }
    return result;
  }
};
