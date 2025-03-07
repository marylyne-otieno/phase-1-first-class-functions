function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction(){
return function namedfunction(){
  return "I am named function!";
}
}

function returnsAnAnonymousFunction(){
  return function() {
    return "I am anonymous";
  }
}