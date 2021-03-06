// Exercise 8
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greetLong(["bob", "daniel"]) returns ["Hello daniel"]
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function greetLong(list) {
  // list is an array of strings
  return list
    .filter(function (x) {
      return x.length > 3;
    })
    .map(function (x) {
      return "Hello " + x;
    });
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(greetLong(["Scott", "Bob", "Ric", "Jim"]));

// Create more test cases.
console.log(
  greetLong(["Scott", "Bob", "Ric", "Jim", "Mathieu", "Marion", "Laurent"])
);
console.log(greetLong(["Gertrude", "Gerard", "Tanguy", "Kevin"]));
// This is needed for automated testing (more on that later)
module.exports = greetLong;
