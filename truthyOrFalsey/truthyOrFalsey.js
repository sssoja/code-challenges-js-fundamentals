const truthyOrFalsy = val => {
  if (val) {
    return true;
  } else {
    return false;
  }
};

console.log(truthyOrFalsy(0)); // Should print false

console.log(truthyOrFalsy(1)); // Should print true

console.log(truthyOrFalsy(-1)); // Should print true

console.log(truthyOrFalsy()); // Should print false
