function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString)
}
// Lines 1 to 7 is the Day 0 challenge

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    let secondInt, secondDouble, secondString;
 // read and save an integer, double, and String to your variables.
 secondInt = readLine();
    secondDouble = readLine();
    secondString = readLine();
    // Print the sum of both integer variables on a new line.
console.log(Number(secondInt) + i);
    // Print the sum of the double variables on a new line.
  console.log((Number(secondDouble) + d).toFixed(1))
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + secondString);
}

// Lines 10 through 48 is the Day 1 challenge
// Code needs standard input stream from HackerRank to work
