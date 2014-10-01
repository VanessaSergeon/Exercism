var Bob = function(str) {
  this.hey = function(str) {
    shouting = function(str) {return str.toUpperCase() === str}
    question = function(str) {return str.charAt(str.length - 1) === '?'}
    silent = function(str) {return str.length === 0}

    if(shouting(str)) {return 'Woah, chill out!';}
    if(question(str)) {return 'Sure.';}
    if(silent(str)) {return 'Fine. Be that way!';}
    return "Whatever.";
  }
};