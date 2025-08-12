function indexOfIgnoreCase(s1, s2) {
  // If s2 is an empty string, return 0 (same as String.indexOf behavior)
  if (s2 === "") return 0;
  
  // Convert both strings to lowercase for case-insensitive comparison
  return s1.toLowerCase().indexOf(s2.toLowerCase());
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
