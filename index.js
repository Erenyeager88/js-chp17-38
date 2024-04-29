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
