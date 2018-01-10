isPrime = (num) => {
  let prime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
return prime
};

arraySum = (array) => {
  sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

fizzBuzz = (num) => {
  result = ''
  if (num == null) {
    result = num;
  } else if (num.isPrototypeOf(String)) {
    result = num;
  } else if (num % 15 == 0) {
    result = 'fizzbuzz';
  } else if (num % 5 == 0) {
    result = 'buzz';
  } else if (num % 3 == 0) {
    result = 'fizz';
  } else {
    result = num
  }
  return result;
};
