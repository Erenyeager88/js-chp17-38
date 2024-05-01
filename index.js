// Chp 17-20
// 1. Declare and initialize an empty multidimensional array.
// // (Array of arrays)
// var multiArray = [[]];

// console.log(multiArray);

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var matrix =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for (j = 0; j < matrix.length; j++) {
// document.write(matrix[j] +"</br>")
// }
// 3. Write a program to print numeric counting from 1 to 10.
// for (count=1;count<=10; count++){
//     document.write(count+"</br>")
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var multiTable= +prompt("Enter a number to show its multiplication table:");
// var tableLength= +prompt("Enter the legnth of multiplication table:");

// for(i=1;i<=tableLength;i++){
//     result=multiTable*i;
//     document.write(multiTable+" x "+ i + "=" + result +"</br>")
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
// var fruits = ["apple", "banana", "mango", "orange","strawberry"]
// for (i=0;i<fruits.length;i++){
//     document.write(fruits[i] +"</br>")
// }
// document.write("</br>")
// for(j=0;j<fruits.length;j++){
//     document.write("Element on index "+j+" is "+fruits[j]+"</br>")
// }

// 6.Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("</br> Counting: </br>")
// for (let i = 1; i <= 15; i++) {
//     document.write(i + "</br>");
//   }
//   document.write("</br> Reverse Counting: </br>")
//   for (let i = 10; i >= 1; i--) {
//     document.write(i + "</br>");
//   }
//   document.write("</br> Even </br>")
//   for (let i = 0; i <= 20; i += 2) {
//     document.write(i + "</br>");
//   }
//   document.write("</br> Odd </br>")
//   for (let i = 1; i <= 19; i += 2) {
//     document.write(i + "</br>");
//   }
//   document.write("</br> Series </br>")
//   for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k" + "</br>");
//   }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchTerm = prompt("Enter a search term:");
// let found = false;
// for (let i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === searchTerm.toLowerCase()) {
//     found = true;
//     if (found) {
//         alert(searchTerm + "is available at index "+i);
//       } else {
//         alert("We are sorry. "+searchTerm + " is not available in our bakery. ");
//       }
//     break;
//   }
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

    // let A = [24, 53, 78, 91, 12];
    // let largest = A[0];
    // for (let i = 1; i < A.length; i++) {
    //   if (A[i] > largest) {
    //     largest = A[i];
    //   }
    // }
    // document.write("The largest number in the array is: " + largest);

//     9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

//  let A = [24, 53, 78, 91, 12];
//     let smallest = A[0];
//     for (let i = 1; i < A.length; i++) {
//       if (A[i] < smallest) {
//         smallest = A[i];
//       }
//     }
//     document.write("The smallest number in the array is: " + smallest);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
// for (let i = 1; i <= 100; i++) {
    
//     if (i % 5 === 0) {
//       document.write(i+"</br>");
//     }
//   }

// CHP 21-25
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Nice to meet you.");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mobileModel = prompt("Please enter your favorite mobile phone model:");
// document.write("my favourite phone is: " + mobileModel)
// document.write("The length of string is: " + mobileModel.length);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
//  var country="pakistani"
//  letter="n"
//  var result=country.indexOf(letter)
//  document.write("string: "+country+"</br>"+"index of 'n': "+result)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var str = "Hello World";
// var letter = "l";
// var lastIndex = str.lastIndexOf(letter);
// document.write("The last index of the letter '" + letter + "' in the word '" + str + "' is: " + lastIndex);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// var str = "Pakistani";
// var index = 3;
// var character = str.charAt(index);
// document.write("The character at index " + index + " in the word '" + str + "' is: " + character);

// 6. Repeat Q1 using string concat() method.
// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// var fullName = firstName.concat(" ",lastName)
// alert("Hello, " + fullName + "! Nice to meet you.");

// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// var cityName = "Hyderabad";
// var newCityName = cityName.replace("Hyder", "Islam");
// document.write("The new city name is: " + newCityName);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replaceAll("and", "&");
// document.write(newMessage);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var str = "472";
// document.write("Value: " + str+ "<br>");
// document.write("Type: " + typeof str);
// var num = Number(str);
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// var input= prompt("Enter something");
// document.write(input.toUpperCase())

// 11. Write a program that takes user input. Convert and
// show the input in title case.
// Prompt the user for a string
// var str = prompt("Please enter a string:");
// var titleCaseStr = str.toLowerCase().split(' ').map(function(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// }).join(' ');
// document.write("Title case: " + titleCaseStr);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var num = 35.36;
// var numString = num.toString().replace('.', '');
// document.write(numString);

    // 13. Write a program to take user input and store username
    // in a variable. If the username contains any special symbol
    // among [@ . , !], prompt the user to enter a valid username.
    // For character codes of [@ .

    // Note:
    // ASCII code of ! is 33
    // ASCII code of , is 44
    // ASCII code of . is 46
    // ASCII code of @ is 64
    // var username = prompt("Enter your username:");
    // function containsSpecialSymbols(username) {
    //     for (var i = 0; i < username.length; i++) {
    //         var charCode = username.charCodeAt(i);
    //         if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    // if (containsSpecialSymbols(username)) {
    //     alert("Please enter a valid username without special symbols [@ . , !]");
    // } else {
    //     alert("Username accepted: " + username);
    // }
 

    // CHAPTER 35-38
    // var num1 = parseFloat(prompt("Enter the first number:"));
    //     var num2 = parseFloat(prompt("Enter the second number:"));
    // function addNumbers() {
    //     var sum = num1 + num2;
    //     return sum;
    // }
    // var result = addNumbers();
    // alert("The sum of the two numbers is: " + result);
    

    // 5. Write a function that squares its argument.
    // function square(x) {
    //     return x * x;
    //   }

    // 6. Write a function that computes factorial of a number.
    // function factorial(n) {
    //     if (n == 0) {
    //       return 1;
    //     } else {
    //       return n * factorial(n - 1);
    //     }
    //   }
    //   const result = factorial(5); 

//     7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function count(start, end) {
//     for (let i = start; i <= end; i++) {
//       document.write(i + "</br>");
//     }
//   }
//   count(1, 10);

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

// function calculateArea(width, height) {
//     return width * height;
//   }
//   const area = calculateArea(5, 10);
// document.write("The area of the rectangle is: " + area);

// let width = 5;
// let height = 10;
// const area = calculateArea(width, height);
// document.write("The area of the rectangle is: " + area);

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function titleCase(str) {
//     return str.toLowerCase().split(' ').map(function(word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
//   }
//   const input = 'the quick brown fox';
// const output = titleCase(input);
// console.log(output);