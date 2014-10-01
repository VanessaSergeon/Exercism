// use shorter strand for comparison
// use charAt to compare if letters are different
// plus one for every non match

function compute(strand1, strand2) {
  var count = 0;
  var testStrand;
  var otherStrand;

  if(strand1 < strand2) {
    testStrand = strand1;
    otherStrand = strand2;
  } else {
    testStrand = strand2;
    otherStrand = strand1;
  }

  for(var i = 0; i < testStrand.length; i++) {
    if(testStrand.charAt(i) !== otherStrand.charAt(i)) {
      count++;
    }
  }
  return count;
}