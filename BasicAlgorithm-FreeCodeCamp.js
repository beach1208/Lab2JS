//Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertToF(30);

//Factorialize a Number
function factorialize(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

//Find the Longest Word in a String
function findLongestWordLength(str) {
  let string = str.split(" ");
  let longest = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > longest) {
      longest = string[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
  let string = str.slice(str.length - target.length);
  if (string == target) {
    return true;
  }
  return false;
}
console.log(confirmEnding("Bastian", "n"));

// Repeat a String Repeat a String
// no repeat function method
function repeatStringNumTimes(str, num) {
  // repeat after me
  let result = [];
  for (let i = 0; i < num; i++) {
    if (num < 0) {
      return "";
    }
    result.push(str);
  }
  return result.join("");
}

console.log(repeatStringNumTimes("abc", 3));

// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  if (typeof bool == "boolean") {
    return true;
  }
  return false;
}

booWho(null);

// Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
