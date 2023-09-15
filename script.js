function firstNonRepeatedChar(str) {
  // Create a frequency map to count character occurrences
  const charCount = {};

  // Iterate through the string and populate the frequency map
  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  // Return null if there are no non-repeated characters
  return null;
}

// Examples
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // null
