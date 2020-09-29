// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  // grades is an array of numbers

  let total = grades.reduce(function (accumulator, currentArrayItem) {
    return accumulator + currentArrayItem;
  });
  return Math.round(total / grades.length);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
console.log(calculateAverage([96, 75, 39, 82, 64]));
// Create more test cases.
console.log(calculateAverage([92, 78, 34, 89, 62, 63, 93, 78, 55]));
// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
