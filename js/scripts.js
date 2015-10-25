
// var factorial = function(userInput) {
//   var fact = 1;
//   if (userInput < 0) {
//     return("Its not a valid input, Please refresh and enter again.")
//   } else if ((userInput === 0) || (userInput === 1))  {
//     return(fact);
//   } else {
//     for (var i = userInput; i>0; i--) {
//       fact = fact * i;
//     }
//     return(fact);
//   }
//
// }
//
// $(document).ready(function() {
//   $("form").submit(function(event) {
//
//     var userInput = $("input#userInput").val();
//
//     $(".factorialoutput").text(factorial(userInput));
//
//     $("#result").show();
//
//     event.preventDefault();
//   });
// });
