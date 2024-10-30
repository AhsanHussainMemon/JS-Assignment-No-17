// FUNCTIONS, SWITCH, STATEMENTS, WHILE, DO-WHILE LOOPS

// Question No 1

// function power(a, b) {
//     var result = 1;
//     for (var i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }
// var a = prompt("Enter The Base:");
// var b = prompt("Enter The Exponent:");
// console.log("Result:", power(a, b));

// Question No 2

// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             return year % 400 === 0; 
//         }
//         return true; 
//     }
//     return false; 
// }
// var year = +prompt("Enter a Year:");

// if (year > 0) {
//     if (isLeapYear(year)) {
//         console.log(year + " Is a Leap Year.");
//     } else {
//         console.log(year + " Is Not a Leap Year.");
//     }
// } else {
//     console.log("Please Enter a Valid Year Greater Than 0.");
// }

// Question No 3

// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2; 
// }

// function calculateArea(a, b, c) {
//     var S = calculateSemiPerimeter(a, b, c); 
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// var a = parseFloat(prompt("Enter The Length of Side a:"));
// var b = parseFloat(prompt("Enter The Length of Side b:"));
// var c = parseFloat(prompt("Enter The Length of Side c:"));

// if (a > 0 && b > 0 && c > 0) {
//     var area = calculateArea(a, b, c); 
//     console.log("The Area Of The Triangle Is: " + area);
// } else {
//     console.log("Please Enter Valid Lengths For The Sides Of The Triangle.");
// }


// Question No 4

// function calculateAverage(mark1, mark2, mark3) {
//     return (mark1 + mark2 + mark3) / 3; 
// }

// function calculatePercentage(mark1, mark2, mark3) {
//     var total = mark1 + mark2 + mark3; 
//     return (total / 300) * 100; 
// }

// function mainFunction() {

//     var mark1 = parseFloat(prompt("Enter Marks For Subject 1:"));
//     var mark2 = parseFloat(prompt("Enter Marks For Subject 2:"));
//     var mark3 = parseFloat(prompt("Enter Marks For Subject 3:"));

//     var average = calculateAverage(mark1, mark2, mark3);
//     var percentage = calculatePercentage(mark1, mark2, mark3);

//     console.log("Average Marks: " + average.toFixed(2));
//     console.log("Percentage: " + percentage.toFixed(2) + "%");
// }

// mainFunction();


// Question No 5

// function customIndexOf(str, char) {
//     str = str.toLowerCase();
//     char = char.toLowerCase();

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; 
//         }
//     }
//     return "Not Found!"; 
// }

// function mainFunction() {
//     var inputString = prompt("Enter a String:");
//     var inputChar = prompt("Enter a Character To Find:");

//     var result = customIndexOf(inputString, inputChar);

//     console.log("Result: " + result);
// }
// mainFunction();

// Question No 6

// function removeVowels(sentence) {
//     var vowels = 'aeiouAEIOU';
//     var result = '';
//     for (let i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }
//     return result; 
// }

// var inputSentence = prompt("Enter a Sentence (max 25 characters):");
// if (inputSentence.length <= 25) {
//     var outputSentence = removeVowels(inputSentence);
//     console.log("Sentence Without Vowels: " + outputSentence);
// } else {
//     console.log("Please Enter a Sentence With 25 Characters OR Fewer.");
// }


// Question No 7

// function countDoubleVowels(sentence) {
//     var vowels = "aeiouAEIOU"; 
//     var count = 0; 
//     var doubleVowelPairs = []; 
//     for (var i = 0; i < sentence.length - 1; i++) {
//         switch (sentence[i]) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//             case 'A':
//             case 'E':
//             case 'I':
//             case 'O':
//             case 'U':
//                 if (vowels.includes(sentence[i + 1])) {
//                     count++; 
//                     doubleVowelPairs.push(sentence[i] + sentence[i + 1]); 
//                     i++; 
//                 }
//                 break;
//         }
//     }
//     return { count, doubleVowelPairs }; 
// }

// var inputSentence = "Pleases Read This Application And Give Me Gratuity";
// var result = countDoubleVowels(inputSentence);
// console.log("Number Of Occurrences Of Double Vowels: " + result.count);
// console.log("Double Vowel Characters Found: " + result.doubleVowelPairs.join(", "));


// Question No 8

// function convertDistance(kilometers) {
//     var meters = kilometers * 1000; 
//     var feet = kilometers * 3280.84; 
//     var inches = kilometers * 39370.1; 
//     var centimeters = kilometers * 100000; 

//     console.log("Distance In Meters: " + meters);
//     console.log("Distance In Feet: " + feet);
//     console.log("Distance In Inches: " + inches);
//     console.log("Distance In Centimeters: " + centimeters);
// }

// function mainFunction() {
//     var kilometers = +prompt("Enter The Distance In Kilometers:"); 
//     if (kilometers >= 0) {
//         convertDistance(kilometers); 
//     } else {
//         console.log("Please Enter a Valid Distance Greater Than OR Equal To 0.");
//     }
// }
// mainFunction();

// Question No 9

// function calculateOvertimePay(hoursWorked) {
//     if (hoursWorked > 12) {
//         return (hoursWorked - 12) * 12; 
//     }
//     return 0; 
// }
// function mainFunction() {
//     var hoursWorked = +prompt("Enter The Number Of Hours Worked:"); 
//     if (hoursWorked >= 0) {
//         var overtimePay = calculateOvertimePay(hoursWorked); 
//         console.log("Overtime Pay: Rs. " + overtimePay); 
//     } else {
//         console.log("Please Enter a Valid Number Of Hours."); 
//     }
// }
// mainFunction();

// Question No 10

// function calculateNotes(amount) {
//     var notes100 = Math.floor(amount / 100);
//     var notes50 = Math.floor((amount % 100) / 50);
//     var notes10 = Math.floor((amount % 50) / 10);

//     console.log("100 Rs notes: " + notes100);
//     console.log("50 Rs notes: " + notes50);
//     console.log("10 Rs notes: " + notes10);
// }

// var amount = prompt("Enter The Amount To Withdraw (In Hundreds):");
// calculateNotes(amount);

// ****************************************************************************

// Events

// Question No 1

// function showAlert() {
//     alert("You clicked the link!");
// }


// Question No 2

// function showMessage(mobileName) {
//     alert("Thanks For Purchasing The New Phone " + mobileName);
// }


// Question No 3

// function deleteRow(button) {
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }


// Question No 4
// HTML FILE


// Question No 5

// var count = 0;

// function increase() {
//     count++;
//     document.getElementById("counter").innerText = count;
// }
//         function decrease() {
//             count--;
//             document.getElementById("counter").innerText = count;
//         }

