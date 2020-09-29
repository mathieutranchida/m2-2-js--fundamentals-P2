// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string
  const majB = str.split("");
  let total = 0;
  majB.forEach(function (x) {
    if (x === "B") total++;
  });
  return total;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.
console.log(countBs("Hello my name is Bea or Bob, I don't remember."));
// This is needed for automated testing (more on that later)
module.exports = countBs;
