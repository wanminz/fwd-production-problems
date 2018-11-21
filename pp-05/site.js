var x = 5;

function double(num) {
  x = num * 2;
  return x;
}

// correcting variable scope to ensuring that console.log call
// outputs correct value for x
console.log(double(6));
console.log('The value of x is:', x, 'It should be 5.');

// make i a var to ensure that i isn't in global scope
function arrayEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red','green','blue'], console.log);

console.log(i) // should be 'undefined', not 3

function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above
