var Question = "My name is: ";
var myName = "Andrew";
alert(Question + myName);

var userBalance = parseInt(prompt("What is your balance?"));
alert("You lost $10. Your new balance is: $" + (userBalance - 10));

var studentGrade = parseInt(prompt("Enter your number grade?"));
var extraCredit = parseInt(prompt("Enter your extra credit."));
alert("Your total grade is: " + (studentGrade + extraCredit));

var balance = parseInt(prompt("What is your balance?"));
var deduction = parseInt(prompt("How much do you want to deduct?"));
alert("Remaining balance: " + (balance - deduction));