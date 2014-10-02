function toRna(dna) {
  var pairs = {'G': 'C',
               'C': 'G',
               'T': 'A',
               'A': 'U'}
  var rna = '';
  for(var i = 0; i < dna.length; i++) {
    rna += pairs[dna[i]];
  }
  return rna;
}