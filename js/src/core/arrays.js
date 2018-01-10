removeWithoutCopy = (arr, item) => {
  tempArr = arr.slice(0);
  for (i = 0; i < arr.length + 1; i++) {
    if (item == arr[i]) {
      arr.splice(i, 1);
      i -= 1;
    }
  }
  console.log(arr);
  return arr;
};

append = (arr, item) => {
  return arr.concat(item);
};

truncate = (arr) => {
   arr.splice(-1,1);
   return arr;
};

prepend = (arr, item) => {
  arr1 = [item];
  return arr1.concat(arr);
};

curtail = (arr) => {
  arr.splice(0,1);
  return arr;
};

concat = (arr1, arr2) => {
  return arr1.concat(arr2);

};

insert = (arr, item, index) => {
  arr.splice(index, 0, item);
  return arr;
}

count = (arr, item) => {
  let count = 0
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      count ++;
    }
  }
    return count
};

duplicates = (arr) => {
  result = []
  arr.forEach(function(element, index) {
    if (arr.indexOf(element, index + 1) > -1) {
      if (result.indexOf(element) === -1) {
        result.push(element);
      }
    }
  });
  return result;
};

square = (arr) => {
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i]
  }
  return arr
};

findAllOccurrences = (arr, item) => {
  indicies = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      indicies.push(i);
    }
  }
  return indicies;
};
