reduceString = (str, amount) => {
  var re = new RegExp("(.)(?=\\1{" + amount + "})","g");
  return str.replace(re, "");
};

reverseString = (str) => {
  strArr = str.split('');
  result = ""
  for (i = strArr.length - 1; i > -1; i--){
    result = result + strArr[i]
  }
  return result;
};
