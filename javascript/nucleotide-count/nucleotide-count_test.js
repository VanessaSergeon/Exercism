var dna = function(strand) {
  // this.strand = strand;
  return new DNA(strand)
};

var DNA = function(strand){
  this.strand = strand;
  if(this.strand === undefined) {
    return 0;
  }
  var valid = ['A', 'T', 'C', 'G'];
  var error = 'Must enter valid dna strand.'
  for(var i = 0; i < this.strand.length; i++) {
    if(valid.indexOf(this.strand[i]) === -1) {
      throw error;
    }
  }
}

DNA.prototype.count = function(letter) {
  if(this.strand === undefined) {
    return 0;
  }
  var number = 0;
  for(var i = 0; i < this.strand.length; i++) {
    if(this.strand[i] === letter) {
      number++
    }
  }
  return number;
};

DNA.prototype.histogram = function() {
  var hist = {A: 0, T: 0, C: 0, G: 0};
  if(this.strand === undefined) {
    return hist;
  }
  // increment values based on strand
  for(var i = 0; i < this.strand.length; i++) {
    hist[this.strand[i]]++;
  }
  return hist;
};




















