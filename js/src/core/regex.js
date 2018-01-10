containsNumber = (string) => {
  let regex = /\d/;
  let found = string.match(regex);
  if (found != null) {
    return true;
  } else {
    return false;
  }
};

containsRepeatingLetter = (string) => {
  let regex = (/([a-z])\1/i)
  let found = string.match(regex);
  if (found != null) {
    return true;
  } else {
    return false;
  }
};

endsWithVowel = (string) => {
  let regex = /.*([AEIOUaeiou])$/
  let found = string.match(regex);
  if (found != null) {
    return true;
  } else {
    return false;
  }
};

captureThreeNumbers = (string) => {
  let regex = /\d{3}/
  let found = string.match(regex);
  if (found != null) {
    return found[0];
  } else {
    return false;
  }
};

matchesPattern = (string) => {
  let regex = /^\d{3}(-)\d{3}(-)\d{4}$/
  let found = string.match(regex);
  if (found != null) {
    return true;
  } else {
    return false;
  }
};

isUSD = (string) => {
  let regex = /^\$(([1-9][0-9]{1,3}(,[0-9]{1,3})*)|0)?(\.[0-9]{1,2})?$/
  let found = string.match(regex);
  if (found != null) {
    return true;
  } else {
    return false;
  }

};
